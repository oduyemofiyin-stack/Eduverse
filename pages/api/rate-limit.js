import { getDb } from '../../lib/firestore-admin';

const COLLECTION = 'rate_limits';

function getClientIp(req) {
  return req.headers['x-forwarded-for']?.split(',')[0]?.trim()
    || req.headers['x-real-ip']
    || req.socket?.remoteAddress
    || 'unknown';
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'This endpoint only accepts POST requests.' });
  }

  const { key, maxRequests = 5, windowMs = 60000 } = req.body;
  const ip = getClientIp(req);
  const rateKey = `${ip}:${key || 'default'}`;
  const now = Date.now();

  const firestore = getDb();
  if (!firestore) {
    return res.status(200).json({ allowed: true, remaining: maxRequests - 1 });
  }

  const ref = firestore.collection(COLLECTION).doc(rateKey);

  try {
    const result = await firestore.runTransaction(async (transaction) => {
      const snap = await transaction.get(ref);
      const entry = snap.data();
      if (!entry) {
        transaction.set(ref, { count: 1, start: new Date(now) });
        return { allowed: true, remaining: maxRequests - 1 };
      }
      const start = entry.start?.toMillis?.() ?? entry.start;
      if (now - start > windowMs) {
        transaction.set(ref, { count: 1, start: new Date(now) });
        return { allowed: true, remaining: maxRequests - 1 };
      }
      const count = entry.count + 1;
      if (count > maxRequests) {
        const retryAfter = Math.ceil((windowMs - (now - start)) / 1000);
        transaction.set(ref, { count, start: entry.start });
        return { allowed: false, message: 'Too many requests. Please try again later.', retryAfter };
      }
      transaction.set(ref, { count, start: entry.start });
      return { allowed: true, remaining: maxRequests - count };
    });
    return res.status(result.allowed ? 200 : 429).json(result);
  } catch (e) {
    console.warn('Rate limit DB error:', e.message);
    return res.status(200).json({ allowed: true, remaining: maxRequests - 1 });
  }
}
