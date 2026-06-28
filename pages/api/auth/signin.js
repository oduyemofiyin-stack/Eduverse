import bcrypt from 'bcryptjs';
import { signToken } from '../../../lib/jwt';
import { getUserByEmail, saveUser } from '../../../lib/firestore-admin';
import { sanitize } from '../../../lib/sanitize';
import { getClientIp, checkBan, checkRateLimit } from '../../../lib/ip-ban';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = getClientIp(req);

  const ban = await checkBan(ip);
  if (ban.banned) {
    return res.status(429).json({ error: 'Incorrect email or password.' });
  }

  const rate = await checkRateLimit(ip);
  if (!rate.allowed) {
    return res.status(429).json({ error: 'Incorrect email or password.' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  const sanitizedEmail = sanitize(email).toLowerCase();

  const user = await getUserByEmail(sanitizedEmail);
  if (!user) {
    return res.status(401).json({ error: 'Incorrect email or password.' });
  }

  if (!user.password) {
    return res.status(401).json({ error: 'This account uses Google sign-in. Please use Continue with Google.' });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ error: 'Incorrect email or password.' });
  }

  const now = new Date().toISOString();
  await saveUser(user.id, { lastLogin: now });

  const token = signToken({
    sub: user.id,
    email: user.email,
    name: `${user.firstName} ${user.lastName}`.trim(),
    picture: user.picture || '',
  });

  const { password: _, ...safeUser } = user;

  res.status(200).json({
    token,
    user: { id: user.id, ...safeUser },
  });
}
