import { requireAdmin } from '../../../lib/admin';
import courses from '../../../data/courses';

async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ count: courses.length });
  }

  if (req.method === 'POST') {
    return res.status(200).json({
      message: 'Courses are managed via data files. Edit data/courses.js and rebuild.',
    });
  }

  res.status(405).json({ error: 'Method not allowed' });
}

export default requireAdmin(handler);
