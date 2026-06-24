import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET;
const EXPIRY = '7d';

export function signToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: EXPIRY });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}
