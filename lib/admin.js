import { verifyToken } from './jwt';

function getToken(req) {
  if (req.headers.cookie) {
    const cookies = req.headers.cookie.split(';').map(c => c.trim());
    for (const cookie of cookies) {
      const [name, ...rest] = cookie.split('=');
      if (name === 'token' && rest.length) return rest.join('=');
    }
  }
  const auth = req.headers.authorization;
  if (auth?.startsWith('Bearer ')) {
    return auth.slice(7);
  }
  return null;
}

export function requireAdmin(handler) {
  return async (req, res) => {
    const token = getToken(req);
    if (!token) {
      return res.status(401).json({ error: 'You need to be logged in to access this.' });
    }

    const payload = verifyToken(token);
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
