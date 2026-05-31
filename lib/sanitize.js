// Strip out dangerous chars from user input (better safe than sorry)
export function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str
    .trim()
    .replace(/[<>'"`;]/g, '') // Remove HTML/JS injection chars
    .slice(0, 500); // Max 500 characters
}

// Basic email validation - not perfect but catches most typos
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Password strength: at least 6 chars, not too long
export function isValidPassword(pass) {
  return typeof pass === 'string' && pass.length >= 6 && pass.length <= 128;
}

// Validate name fields
export function isValidName(name) {
  return typeof name === 'string' && name.trim().length >= 1 && name.trim().length <= 50 && /^[a-zA-Z\s'-]+$/.test(name.trim());
}

// Client-side rate limiter using localStorage (prevents brute force spam)
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
    return { allowed: true };
  }
}