const bannedIps = new Map();
const violationCount = new Map();

const RATE_LIMIT_WINS = 60 * 1000;
const MAX_REQUESTS = 10;
const VIOLATION_THRESHOLD = 3;
const BAN_DURATION = 60 * 60 * 1000;

export function getClientIp(req) {
  return req.headers['x-forwarded-for']?.split(',')[0]?.trim()
    || req.headers['x-real-ip']
    || req.socket?.remoteAddress
    || 'unknown';
}

export function checkBan(ip) {
  const ban = bannedIps.get(ip);
  if (!ban) return { banned: false };
  if (Date.now() < ban.until) {
    return { banned: true, reason: ban.reason };
  }
  bannedIps.delete(ip);
  return { banned: false };
}

export function checkRateLimit(ip) {
  const key = `login:${ip}`;
  const now = Date.now();
  const entry = violationCount.get(key);
  if (!entry || now - entry.start > RATE_LIMIT_WINS) {
    violationCount.set(key, { count: 1, start: now });
    return { allowed: true };
  }
  entry.count++;
  if (entry.count > MAX_REQUESTS) {
    const violations = (entry.violations || 0) + 1;
    entry.violations = violations;
    if (violations >= VIOLATION_THRESHOLD) {
      autoBan(ip, `Rate limit exceeded (${violations} violations)`);
    }
    return { allowed: false };
  }
  return { allowed: true };
}

function autoBan(ip, reason) {
  bannedIps.set(ip, { reason, until: Date.now() + BAN_DURATION, bannedAt: new Date().toISOString() });
}

export function banIp(ip, reason = 'Manually banned by admin') {
  bannedIps.set(ip, { reason, until: Date.now() + 86400000 * 365, bannedAt: new Date().toISOString() });
  return true;
}

export function unbanIp(ip) {
  bannedIps.delete(ip);
  violationCount.delete(`login:${ip}`);
  return true;
}

export function getBannedIps() {
  const now = Date.now();
  const active = [];
  for (const [ip, data] of bannedIps) {
    if (now < data.until) {
      active.push({ ip, reason: data.reason, bannedAt: data.bannedAt, expiresAt: new Date(data.until).toISOString() });
    } else {
      bannedIps.delete(ip);
    }
  }
  return active;
}
