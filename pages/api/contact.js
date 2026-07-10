import { sanitize, isValidEmail } from '../../lib/sanitize';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide your name, email, and a message.' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'That email address looks invalid. Please check and try again.' });
  }

  const contactData = {
    name: sanitize(name),
    email: sanitize(email),
    subject: sanitize(subject || ''),
    message: sanitize(message),
    receivedAt: new Date().toISOString(),
  };

  if (process.env.CONTACT_WEBHOOK_URL) {
    try {
      await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData),
      });
    } catch (e) {
      console.warn('Contact webhook failed:', e.message);
    }
  }

  res.status(200).json({ success: true });
}
