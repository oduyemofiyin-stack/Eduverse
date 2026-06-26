import { getDb } from './firestore-admin';

const BANS_COLLECTION = 'ip_bans';
const RATE_COLLECTION = 'rate_limits';
const RATE_LIMIT_MS = 60 * 1000;
const MAX_REQUESTS = 10;
const VIOLATION_THRESHOLD = 3;
const BAN_DURATION_MS = 60 * 60 * 1000;

export function getClientIp(req) {
  return req.headers['x-forwarded-for']?.split(',')[0]?.trim()
    || req.headers['x-real-ip']
    || req.socket?.remoteAddress
    || 'unknown';
}

export async function checkBan(ip) {
  const firestore = getDb();
  if (!firestore) return { banned: false };
  const snap = await firestore.collection(BANS_COLLECTION).doc(ip).get();
  if (!snap.exists) return { banned: false };
  const data = snap.data();
  const until = data.until?.toMillis?.() ?? data.until;
  if (Date.now() < until) {
    return { banned: true, reason: data.reason };
  }
  await snap.ref.delete();
  return { banned: false };
}

export async function checkRateLimit(ip) {
  const firestore = getDb();
  if (!firestore) return { allowed: true };
  const key = `login:${ip}`;
  const ref = firestore.collection(RATE_COLLECTION).doc(key);
  const now = Date.now();
  try {
    const result = await firestore.runTransaction(async (transaction) => {
      const snap = await transaction.get(ref);
      const entry = snap.data();
      if (!entry) {
        transaction.set(ref, { count: 1, start: new Date(now), violations: 0 });
        return { allowed: true };
      }
      const start = entry.start?.toMillis?.() ?? entry.start;
      if (now - start > RATE_LIMIT_MS) {
        transaction.set(ref, { count: 1, start: new Date(now), violations: 0 });
        return { allowed: true };
      }
      const count = entry.count + 1;
      const violations = count > MAX_REQUESTS ? (entry.violations || 0) + 1 : (entry.violations || 0);
      if (count > MAX_REQUESTS) {
        if (violations >= VIOLATION_THRESHOLD) {
          const banRef = firestore.collection(BANS_COLLECTION).doc(ip);
          transaction.set(banRef, {
            reason: `Rate limit exceeded (${violations} violations)`,
            until: new Date(now + BAN_DURATION_MS),
            bannedAt: new Date().toISOString(),
          });
        }
        transaction.set(ref, { count, start: entry.start, violations });
        return { allowed: false };
      }
      transaction.set(ref, { count, start: entry.start, violations });
      return { allowed: true };
    });
    return result;
  } catch (e) {
    console.warn('Rate limit check failed:', e.message);
    return { allowed: true };
  }
}

export async function banIp(ip, reason = 'Manually banned by admin') {
  const firestore = getDb();
  if (!firestore) return false;
  await firestore.collection(BANS_COLLECTION).doc(ip).set({
    reason,
    until: new Date(Date.now() + 86400000 * 365),
    bannedAt: new Date().toISOString(),
  });
  return true;
}

export async function unbanIp(ip) {
  const firestore = getDb();
  if (!firestore) return false;
  await firestore.collection(BANS_COLLECTION).doc(ip).delete();
  await firestore.collection(RATE_COLLECTION).doc(`login:${ip}`).delete().catch(() => {});
  return true;
}

export async function getBannedIps() {
  const firestore = getDb();
  if (!firestore) return [];
  const snapshot = await firestore.collection(BANS_COLLECTION).get();
  const now = Date.now();
  const active = [];
  const expired = [];
  for (const doc of snapshot.docs) {
    const data = doc.data();
    const until = data.until?.toMillis?.() ?? data.until;
    if (now < until) {
      active.push({
        ip: doc.id,
        reason: data.reason,
        bannedAt: data.bannedAt,
        expiresAt: new Date(until).toISOString(),
      });
    } else {
      expired.push(doc.ref);
    }
  }
  if (expired.length > 0) {
    const batch = firestore.batch();
    expired.forEach(ref => batch.delete(ref));
    await batch.commit();
  }
  return active;
}
