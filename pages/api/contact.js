export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const contactData = { name, email, subject: subject || '', message, receivedAt: new Date().toISOString() };

  if (process.env.CONTACT_WEBHOOK_URL) {
    try {
      await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData),
      });
    } catch {
      // Webhook failure is non-fatal
    }
  }

  res.status(200).json({ success: true });
}
