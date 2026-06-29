import bcrypt from 'bcryptjs';
import { verifyToken } from '../../../lib/jwt';
import { getUserById, saveUser } from '../../../lib/firestore-admin';

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const { token, password } = req.body;

    if (!token) {
      return res.status(400).json({ error: 'Reset token is required.' });
    }

    const payload = verifyToken(token);
    if (!payload || payload.purpose !== 'password_reset') {
      return res.status(400).json({ error: 'Invalid or expired reset token.' });
    }

    if (!password || password.length < 12 || password.length > 128) {
      return res.status(400).json({ error: 'Password must be at least 12 characters.' });
    }
    if (!/[A-Z]/.test(password)) {
      return res.status(400).json({ error: 'Password must contain an uppercase letter.' });
    }
    if (!/[a-z]/.test(password)) {
      return res.status(400).json({ error: 'Password must contain a lowercase letter.' });
    }
    if (!/[0-9]/.test(password)) {
      return res.status(400).json({ error: 'Password must contain a number.' });
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      return res.status(400).json({ error: 'Password must contain a special character.' });
    }

    const user = await getUserById(payload.sub);
    if (!user) {
      return res.status(400).json({ error: 'User not found.' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    await saveUser(payload.sub, { password: hashedPassword });

    res.status(200).json({ message: 'Password reset successfully. You can now sign in with your new password.' });
  } catch (e) {
    console.error('Reset password error:', e);
    res.status(500).json({ error: 'Internal server error.' });
  }
}
