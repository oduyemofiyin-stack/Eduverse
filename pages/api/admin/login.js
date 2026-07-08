import { signToken } from '../../../lib/jwt';

const ADMIN_USER = process.env.ADMIN_USER;
const ADMIN_PASS = process.env.ADMIN_PASS;
const ADMIN_EMAIL = (process.env.ADMIN_EMAILS || '').split(',')[0]?.trim() || 'admin@eduverse.app';
const ADMIN_NAME = process.env.ADMIN_NAME || 'Admin';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  if (username !== ADMIN_USER || password !== ADMIN_PASS) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const payload = { sub: ADMIN_EMAIL, email: ADMIN_EMAIL, name: ADMIN_NAME };
  const token = signToken(payload);
  if (!token) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const cookie = `token=${token}; HttpOnly; Path=/api/admin; Max-Age=604800; SameSite=Strict${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`;
  res.setHeader('Set-Cookie', cookie);

  return res.status(200).json({ success: true, admin: { email: ADMIN_EMAIL, name: ADMIN_NAME } });
}
