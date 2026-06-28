import bcrypt from 'bcryptjs';
import { signToken } from '../../../lib/jwt';
import { getUserByEmail, getUserById, saveUser } from '../../../lib/firestore-admin';
import { sanitize, isValidPassword, isValidName } from '../../../lib/sanitize';
import { getClientIp, checkBan, checkRateLimit } from '../../../lib/ip-ban';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = getClientIp(req);

  const ban = await checkBan(ip);
  if (ban.banned) {
    return res.status(429).json({ error: 'Too many attempts. Please try again later.' });
  }

  const rate = await checkRateLimit(ip);
  if (!rate.allowed) {
    return res.status(429).json({ error: 'Too many attempts. Please try again later.' });
  }

  const { firstName, lastName, email, password, username } = req.body;

  if (!firstName || !lastName || !email || !password || !username) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const sanitizedEmail = sanitize(email).toLowerCase();
  if (!sanitizedEmail || !/\S+@\S+\.\S+/.test(sanitizedEmail)) {
    return res.status(400).json({ error: 'Please enter a valid email.' });
  }

  if (!isValidName(firstName) || !isValidName(lastName)) {
    return res.status(400).json({ error: 'Please enter valid names.' });
  }

  if (!isValidPassword(password)) {
    return res.status(400).json({ error: 'Password does not meet requirements.' });
  }

  const sanitizedUsername = sanitize(username);
  if (sanitizedUsername.length < 4 || sanitizedUsername.length > 20) {
    return res.status(400).json({ error: 'Username must be 4-20 characters.' });
  }
  if (!/^[A-Za-z]/.test(sanitizedUsername)) {
    return res.status(400).json({ error: 'Username must start with a letter.' });
  }
  if (!/^[A-Za-z][A-Za-z0-9_-]*$/.test(sanitizedUsername)) {
    return res.status(400).json({ error: 'Letters, numbers, underscores, hyphens only.' });
  }

  const existingEmail = await getUserByEmail(sanitizedEmail);
  if (existingEmail) {
    return res.status(409).json({ error: 'An account with this email already exists.' });
  }

  const existingUser = await getUserById(sanitizedUsername);
  if (existingUser) {
    return res.status(409).json({ error: 'This username is already taken.' });
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const now = new Date().toISOString();
  const userId = sanitizedUsername;

  const userData = {
    email: sanitizedEmail,
    firstName: sanitize(firstName.trim()),
    lastName: sanitize(lastName.trim()),
    username: sanitizedUsername,
    picture: '',
    provider: 'email',
    password: hashedPassword,
    createdAt: now,
    lastLogin: now,
    wishlist: [],
    enrolled: [],
    progress: {},
    readingProgress: {},
    completed: [],
    ratings: {},
    xp: 0,
    streak: 0,
    badges: [],
    activityLog: [],
    notes: {},
    bookmarks: {},
    comments: {},
    certificates: [],
    reviews: [],
    studyTime: {},
    followingPaths: [],
  };

  await saveUser(userId, userData);

  const token = signToken({
    sub: userId,
    email: sanitizedEmail,
    name: `${sanitize(firstName.trim())} ${sanitize(lastName.trim())}`.trim(),
    picture: '',
  });

  const { password: _, ...safeUser } = userData;

  res.status(200).json({
    token,
    user: { id: userId, ...safeUser },
  });
}
