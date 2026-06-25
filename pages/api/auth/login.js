import { verifyGoogleToken } from '../../../lib/verify-google';
import { signToken } from '../../../lib/jwt';
import { getUserById, saveUser } from '../../../lib/firestore-admin';
import { sanitize } from '../../../lib/sanitize';

const rateMap = new Map();

function getClientIp(req) {
  return req.headers['x-forwarded-for']?.split(',')[0]?.trim()
    || req.headers['x-real-ip']
    || req.socket?.remoteAddress
    || 'unknown';
}

function checkRateLimit(ip) {
  const key = `login:${ip}`;
  const now = Date.now();
  const windowMs = 60000;
  const maxRequests = 10;

  const entry = rateMap.get(key);
  if (!entry || now - entry.start > windowMs) {
    rateMap.set(key, { count: 1, start: now });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  entry.count++;
  if (entry.count > maxRequests) {
    return { allowed: false };
  }
  return { allowed: true, remaining: maxRequests - entry.count };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = getClientIp(req);
  const rate = checkRateLimit(ip);
  if (!rate.allowed) {
    return res.status(429).json({ error: 'Incorrect email or password' });
  }

  const { idToken } = req.body;
  if (!idToken) {
    return res.status(400).json({ error: 'Incorrect email or password' });
  }

  const payload = await verifyGoogleToken(idToken);
  if (!payload) {
    return res.status(401).json({ error: 'Incorrect email or password' });
  }

  const userId = payload.sub;
  const now = new Date().toISOString();

  const userData = {
    email: sanitize(payload.email || ''),
    firstName: sanitize(payload.given_name || payload.name?.split(' ')[0] || ''),
    lastName: sanitize(payload.family_name || payload.name?.split(' ').slice(1).join(' ') || ''),
    picture: payload.picture || '',
    provider: 'google',
    lastLogin: now,
  };

  const existing = await getUserById(userId);
  if (!existing) {
    userData.createdAt = now;
    userData.wishlist = [];
    userData.enrolled = [];
    userData.progress = {};
    userData.readingProgress = {};
    userData.completed = [];
    userData.ratings = {};
    userData.xp = 0;
    userData.streak = 0;
    userData.badges = [];
    userData.activityLog = [];
    userData.notes = {};
    userData.bookmarks = {};
    userData.comments = {};
    userData.certificates = [];
    userData.reviews = [];
    userData.studyTime = {};
    userData.followingPaths = [];
  }

  await saveUser(userId, userData);

  const token = signToken({
    sub: userId,
    email: userData.email,
    name: `${userData.firstName} ${userData.lastName}`.trim(),
    picture: userData.picture,
  });

  res.status(200).json({
    token,
    user: { id: userId, ...userData },
  });
}
