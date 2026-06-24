import jwt from 'jsonwebtoken';

const CACHE_DURATION = 3600000;
let cachedKeys = null;
let cacheExpiry = 0;

async function getGooglePublicKeys() {
  if (cachedKeys && Date.now() < cacheExpiry) return cachedKeys;
  const res = await fetch('https://www.googleapis.com/oauth2/v3/certs');
  if (!res.ok) throw new Error('Failed to fetch Google public keys');
  const { keys } = await res.json();
  cachedKeys = keys;
  cacheExpiry = Date.now() + CACHE_DURATION;
  return keys;
}

export async function verifyGoogleToken(idToken) {
  try {
    const decoded = jwt.decode(idToken, { complete: true });
    if (!decoded?.header?.kid) return null;

    const keys = await getGooglePublicKeys();
    const key = keys.find(k => k.kid === decoded.header.kid);
    if (!key?.x5c?.[0]) return null;

    const pem = `-----BEGIN CERTIFICATE-----\n${key.x5c[0]}\n-----END CERTIFICATE-----`;

    const payload = jwt.verify(idToken, pem, {
      algorithms: ['RS256'],
      audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      issuer: ['https://accounts.google.com', 'accounts.google.com'],
    });

    return payload;
  } catch {
    return null;
  }
}
