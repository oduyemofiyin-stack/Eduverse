import { verifyToken } from '../../../lib/jwt';
import { getUserById } from '../../../lib/firestore-admin';

export default async function handler(req, res) {
  const auth = req.headers.authorization;
  if (!auth?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'You need to be logged in to view this.' });
  }

  const payload = verifyToken(auth.slice(7));
  if (!payload) {
    return res.status(401).json({ error: 'Session expired. Please log in again.' });
  }

  const user = await getUserById(payload.sub);
  if (!user) {
    return res.status(401).json({ error: 'Account not found.' });
  }

  res.status(200).json({ user: { id: payload.sub, ...user } });
}
