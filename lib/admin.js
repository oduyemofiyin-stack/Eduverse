import { verifyToken } from './jwt';

export function requireAdmin(handler) {
  return async (req, res) => {
    const auth = req.headers.authorization;
    if (!auth?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const payload = verifyToken(auth.slice(7));
    if (!payload) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(e => e.trim().toLowerCase()) || [];
    if (!adminEmails.includes(payload.email?.toLowerCase())) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    req.user = payload;
    return handler(req, res);
  };
}
