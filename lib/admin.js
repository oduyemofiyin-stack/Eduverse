import { verifyToken } from './jwt';

export function requireAdmin(handler) {
  return async (req, res) => {
    const auth = req.headers.authorization;
    if (!auth?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'You need to be logged in to access this.' });
    }

    const payload = verifyToken(auth.slice(7));
    if (!payload) {
      return res.status(401).json({ error: 'Session expired. Please log in again.' });
    }

    const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(e => e.trim().toLowerCase()) || [];
    if (!adminEmails.includes(payload.email?.toLowerCase())) {
      return res.status(403).json({ error: 'This area is restricted to admins only.' });
    }

    req.user = payload;
    return handler(req, res);
  };
}
