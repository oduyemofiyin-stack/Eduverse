import { requireAdmin } from '../../../lib/admin';
import { getAllUsers, isReady } from '../../../lib/firestore-admin';

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!isReady()) {
    return res.status(503).json({ error: 'Firestore admin not configured. Set FIREBASE_SERVICE_ACCOUNT env var.' });
  }

  const users = await getAllUsers();
  const totalUsers = users.length;
  const totalEnrollments = users.reduce((sum, u) => sum + (u.enrolled?.length || 0), 0);
  const totalXp = users.reduce((sum, u) => sum + (u.xp || 0), 0);
  const sevenDaysAgo = Date.now() - 604800000;
  const activeUsers = users.filter(u => {
    const last = u.lastLogin || u.lastActiveDate;
    return last && new Date(last).getTime() > sevenDaysAgo;
  }).length;

  res.status(200).json({
    totalUsers,
    totalEnrollments,
    totalXp,
    activeUsers,
  });
}

export default requireAdmin(handler);
