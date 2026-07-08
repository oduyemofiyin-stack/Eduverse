import { Resend } from 'resend';
import { signToken } from '../../../lib/jwt';
import { getUserByEmail } from '../../../lib/firestore-admin';
import { sanitize } from '../../../lib/sanitize';
import { getClientIp, checkBan } from '../../../lib/ip-ban';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const ip = getClientIp(req);
    const ban = await checkBan(ip);
    if (ban.banned) {
      return res.status(429).json({ error: 'Too many requests. Try again later.' });
    }

    const { email } = req.body;
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    const sanitizedEmail = sanitize(email).toLowerCase();
    const user = await getUserByEmail(sanitizedEmail);

    if (!user) {
      return res.status(200).json({ message: 'If an account with that email exists, a reset link has been sent.' });
    }

    const token = signToken(
      { sub: user.id, email: user.email, purpose: 'password_reset' },
      '1h'
    );

    const origin = req.headers.origin || 'http://localhost:3000';
    const resetUrl = `${origin}/reset-password?token=${token}`;

    const fromAddress = process.env.RESEND_FROM || 'onboarding@resend.dev';
    await resend.emails.send({
      from: `Eduverse <${fromAddress}>`,
      to: sanitizedEmail,
      subject: 'Reset your Eduverse password',
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;">
          <h2 style="color:#f0c040;">Eduverse</h2>
          <p>You requested a password reset. Click the link below to set a new password. This link expires in 1 hour.</p>
          <a href="${resetUrl}" style="display:inline-block;padding:12px 24px;background:#6366f1;color:#fff;text-decoration:none;border-radius:8px;margin:16px 0;">Reset Password</a>
          <p style="color:#888;font-size:14px;">If you didn't request this, you can ignore this email.</p>
        </div>
      `,
    });

    res.status(200).json({ message: 'If an account with that email exists, a reset link has been sent.' });
  } catch (e) {
    console.error('Forgot password error:', e);
    res.status(200).json({ message: 'If an account with that email exists, a reset link has been sent.' });
  }
}
