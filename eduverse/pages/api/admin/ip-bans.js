import { requireAdmin } from '../../../lib/admin';
import { banIp, unbanIp, getBannedIps } from '../../../lib/ip-ban';

async function handler(req, res) {
  if (req.method === 'GET') {
    const banned = await getBannedIps();
    return res.status(200).json({ banned });
  }

  if (req.method === 'POST') {
    const { ip, reason } = req.body;
    if (!ip) return res.status(400).json({ error: 'Please provide an IP address to ban.' });
    await banIp(ip, reason || 'Manually banned by admin');
    return res.status(200).json({ success: true });
  }

  if (req.method === 'DELETE') {
    const { ip } = req.body;
    if (!ip) return res.status(400).json({ error: 'Please provide an IP address to unban.' });
    await unbanIp(ip);
    return res.status(200).json({ success: true });
  }

  res.status(405).json({ error: 'Method not allowed' });
}

export default requireAdmin(handler);
