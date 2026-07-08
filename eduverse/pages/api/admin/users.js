import { requireAdmin } from '../../../lib/admin';
import { getAllUsers, deleteUserById } from '../../../lib/firestore-admin';
import { isReady } from '../../../lib/firestore-admin';
import { sanitize } from '../../../lib/sanitize';

async function handler(req, res) {
  if (!isReady()) {
    return res.status(503).json({ error: 'Service unavailable' });
  }

  if (req.method === 'GET') {
    const users = await getAllUsers();
    return res.status(200).json({ users });
  }

  if (req.method === 'DELETE') {
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ error: 'Please provide the user ID to delete.' });
    await deleteUserById(sanitize(userId));
    return res.status(200).json({ success: true });
  }

  res.status(405).json({ error: 'Method not allowed' });
}

export default requireAdmin(handler);
