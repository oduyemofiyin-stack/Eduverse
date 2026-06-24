const rateMap = new Map();

function getClientIp(req) {
  return req.headers['x-forwarded-for']?.split(',')[0]?.trim()
    || req.headers['x-real-ip']
    || req.socket?.remoteAddress
    || 'unknown';
}

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { key, maxRequests = 5, windowMs = 60000 } = req.body;
  const ip = getClientIp(req);
  const rateKey = `${ip}:${key || 'default'}`;
  const now = Date.now();

  const entry = rateMap.get(rateKey);
  if (!entry || now - entry.start > windowMs) {
    rateMap.set(rateKey, { count: 1, start: now });
    return res.status(200).json({ allowed: true, remaining: maxRequests - 1 });
  }

  entry.count++;
  if (entry.count > maxRequests) {
    const retryAfter = Math.ceil((windowMs - (now - entry.start)) / 1000);
    return res.status(429).json({
      allowed: false,
      message: 'Too many requests. Please try again later.',
      retryAfter,
    });
  }

  res.status(200).json({ allowed: true, remaining: maxRequests - entry.count });
}
