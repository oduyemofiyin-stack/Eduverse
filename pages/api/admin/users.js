import { requireAdmin } from '../../../lib/admin';
import { getAllUsers, deleteUserById } from '../../../lib/firestore-admin';
import { isReady } from '../../../lib/firestore-admin';

async function handler(req, res) {
  if (!isReady()) {
    return res.status(503).json({ error: 'Firestore admin not configured. Set FIREBASE_SERVICE_ACCOUNT env var.' });
  }

  if (req.method === 'GET') {
    const users = await getAllUsers();
    return res.status(200).json({ users });
  }

  if (req.method === 'DELETE') {
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ error: 'Missing userId' });
    await deleteUserById(userId);
    return res.status(200).json({ success: true });
  }

  res.status(405).json({ error: 'Method not allowed' });
}

export default requireAdmin(handler);
