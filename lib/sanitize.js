export function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str
    .trim()
    .replace(/[<>'"`;]/g, '') // Remove HTML/JS injection chars
    .slice(0, 500); // Max 500 characters
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPassword(pass) {
  if (typeof pass !== 'string' || !pass) return false;
  if (pass.length < 12 || pass.length > 128) return false;
  if (!/[A-Z]/.test(pass)) return false;
  if (!/[a-z]/.test(pass)) return false;
  if (!/[0-9]/.test(pass)) return false;
  if (!/[^A-Za-z0-9]/.test(pass)) return false;
  return true;
}

export function getPasswordErrors(pass) {
  const errors = [];
  if (typeof pass !== 'string' || !pass) return errors;
  if (pass.length < 12) errors.push('At least 12 characters');
  if (!/[A-Z]/.test(pass)) errors.push('One uppercase letter (A-Z)');
  if (!/[a-z]/.test(pass)) errors.push('One lowercase letter (a-z)');
  if (!/[0-9]/.test(pass)) errors.push('One number (0-9)');
  if (!/[^A-Za-z0-9]/.test(pass)) errors.push('One special character (e.g. @, #, $, !, %)');
  return errors;
}

export function isValidName(name) {
  return typeof name === 'string' && name.trim().length >= 1 && name.trim().length <= 50 && /^[a-zA-Z\s'-]+$/.test(name.trim());
}

export function checkRateLimit(key, maxAttempts = 5, windowMs = 10 * 60 * 1000) {
  try {
    const now = Date.now();
    const attempts = JSON.parse(localStorage.getItem(key) || '[]');
    // Remove attempts outside the window
    const recent = attempts.filter(t => now - t < windowMs);
    if (recent.length >= maxAttempts) {
      const waitMs = windowMs - (now - recent[0]);
      const waitMin = Math.ceil(waitMs / 60000);
      return { allowed: false, message: `Too many attempts. Please wait ${waitMin} minute${waitMin > 1 ? 's' : ''} before trying again.` };
    }
    recent.push(now);
    localStorage.setItem(key, JSON.stringify(recent));
    return { allowed: true };
  } catch(e) {
    console.warn('Rate limit check failed:', e.message);
    return { allowed: true };
  }
}