export function isValidUserData(data) {
  if (!data || typeof data !== 'object') return false;
  const allowed = [
    'email', 'firstName', 'lastName', 'picture', 'provider',
    'wishlist', 'enrolled', 'progress', 'readingProgress', 'completed', 'ratings',
    'xp', 'streak', 'lastActiveDate', 'badges', 'activityLog',
    'notes', 'bookmarks', 'comments', 'certificates', 'studyTime',
    'reviews', 'users',
  ];
  for (const key of Object.keys(data)) {
    if (!allowed.includes(key)) return false;
    const val = data[key];
    if (val !== null && typeof val === 'object' && !Array.isArray(val) && val.constructor !== Object) return false;
  }
  if (data.email && (typeof data.email !== 'string' || data.email.length > 320)) return false;
  if (data.firstName && typeof data.firstName !== 'string') return false;
  if (data.lastName && typeof data.lastName !== 'string') return false;
  if (data.xp !== undefined && (typeof data.xp !== 'number' || data.xp < 0 || data.xp > 999999)) return false;
  if (data.streak !== undefined && (typeof data.streak !== 'number' || data.streak < 0 || data.streak > 10000)) return false;
  if (data.wishlist && (!Array.isArray(data.wishlist) || data.wishlist.some(i => typeof i !== 'number'))) return false;
  if (data.enrolled && (!Array.isArray(data.enrolled) || data.enrolled.some(i => typeof i !== 'number'))) return false;
  if (data.progress && (typeof data.progress !== 'object' || Array.isArray(data.progress))) return false;
  return true;
}
