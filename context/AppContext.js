import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AppContext = createContext();

const LEVELS = [
  { level: 1, minXp: 0, title: 'Beginner' },
  { level: 2, minXp: 100, title: 'Curious Mind' },
  { level: 3, minXp: 250, title: 'Eager Learner' },
  { level: 4, minXp: 500, title: 'Knowledge Seeker' },
  { level: 5, minXp: 1000, title: 'Scholar' },
  { level: 6, minXp: 2000, title: 'Enthusiast' },
  { level: 7, minXp: 3500, title: 'Trailblazer' },
  { level: 8, minXp: 5000, title: 'Expert' },
  { level: 9, minXp: 7500, title: 'Visionary' },
  { level: 10, minXp: 10000, title: 'Grandmaster' },
];

function getLevelInfo(xp) {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXp) {
      const next = LEVELS[i + 1];
      return {
        level: LEVELS[i].level,
        title: LEVELS[i].title,
        xpForNext: next ? next.minXp - LEVELS[i].minXp : 0,
        progress: next ? Math.min(100, ((xp - LEVELS[i].minXp) / (next.minXp - LEVELS[i].minXp)) * 100) : 100,
        nextTitle: next ? next.title : null,
      };
    }
  }
  return { level: 1, title: 'Beginner', xpForNext: 100, progress: 0, nextTitle: 'Curious Mind' };
}

const BADGE_DEFS = {
  first_lesson: { label: 'First Steps', desc: 'Complete your first lesson', icon: '👣' },
  quiz_whiz: { label: 'Quiz Whiz', desc: 'Pass your first quiz', icon: '🧠' },
  streak_7: { label: 'Streak Master', desc: 'Maintain a 7-day streak', icon: '🔥' },
  graduate: { label: 'Course Graduate', desc: 'Complete your first course', icon: '🎓' },
  explorer: { label: 'Knowledge Seeker', desc: 'Enroll in 5 courses', icon: '📖' },
  centurion: { label: 'Centurion', desc: 'Reach 1,000 XP', icon: '⚡' },
  bookworm: { label: 'Bookworm', desc: 'Read all materials in a course', icon: '📚' },
};

export function AppProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [enrolled, setEnrolled] = useState([]);
  const [progress, setProgress] = useState({});
  const [completed, setCompleted] = useState([]);
  const [ratings, setRatings] = useState({});
  const [theme, setTheme] = useState('dark');
  const [users, setUsers] = useState(() => {
    if (typeof window === 'undefined') return [];
    try {
      const saved = localStorage.getItem('eduverse_users');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lastActiveDate, setLastActiveDate] = useState(null);
  const [badges, setBadges] = useState([]);
  const [activityLog, setActivityLog] = useState([]);
  const [notes, setNotes] = useState({});
  const [bookmarks, setBookmarks] = useState({});
  const [comments, setComments] = useState({});
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('eduverse_user');
      const savedWishlist = localStorage.getItem('eduverse_wishlist');
      const savedEnrolled = localStorage.getItem('eduverse_enrolled');
      const savedProgress = localStorage.getItem('eduverse_progress');
      const savedCompleted = localStorage.getItem('eduverse_completed');
      const savedRatings = localStorage.getItem('eduverse_ratings');
      const savedTheme = localStorage.getItem('eduverse_theme');
      if (savedUser) setCurrentUser(JSON.parse(savedUser));
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
      if (savedEnrolled) setEnrolled(JSON.parse(savedEnrolled));
      if (savedProgress) setProgress(JSON.parse(savedProgress));
      if (savedCompleted) setCompleted(JSON.parse(savedCompleted));
      if (savedRatings) setRatings(JSON.parse(savedRatings));
      if (savedTheme) setTheme(savedTheme);
      const savedUsers = localStorage.getItem('eduverse_users');
      if (savedUsers) setUsers(JSON.parse(savedUsers));
      const savedXp = localStorage.getItem('eduverse_xp');
      if (savedXp) setXp(parseInt(savedXp) || 0);
      const savedStreak = localStorage.getItem('eduverse_streak');
      if (savedStreak) setStreak(parseInt(savedStreak) || 0);
      const savedLastActive = localStorage.getItem('eduverse_last_active');
      if (savedLastActive) setLastActiveDate(savedLastActive);
      const savedBadges = localStorage.getItem('eduverse_badges');
      if (savedBadges) setBadges(JSON.parse(savedBadges));
      const savedActivity = localStorage.getItem('eduverse_activity');
      if (savedActivity) setActivityLog(JSON.parse(savedActivity));
      const savedNotes = localStorage.getItem('eduverse_notes');
      if (savedNotes) setNotes(JSON.parse(savedNotes));
      const savedBookmarks = localStorage.getItem('eduverse_bookmarks');
      if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks));
      const savedComments = localStorage.getItem('eduverse_comments');
      if (savedComments) setComments(JSON.parse(savedComments));
      const savedCerts = localStorage.getItem('eduverse_certificates');
      if (savedCerts) setCertificates(JSON.parse(savedCerts));
    } catch(e) {}
  }, []);

  // Persist new state
  useEffect(() => { if (currentUser) localStorage.setItem('eduverse_user', JSON.stringify(currentUser)); }, [currentUser]);
  useEffect(() => { localStorage.setItem('eduverse_wishlist', JSON.stringify(wishlist)); }, [wishlist]);
  useEffect(() => { localStorage.setItem('eduverse_enrolled', JSON.stringify(enrolled)); }, [enrolled]);
  useEffect(() => { localStorage.setItem('eduverse_progress', JSON.stringify(progress)); }, [progress]);
  useEffect(() => { localStorage.setItem('eduverse_completed', JSON.stringify(completed)); }, [completed]);
  useEffect(() => { localStorage.setItem('eduverse_ratings', JSON.stringify(ratings)); }, [ratings]);
  useEffect(() => { localStorage.setItem('eduverse_theme', theme); document.documentElement.setAttribute('data-theme', theme); }, [theme]);
  useEffect(() => { localStorage.setItem('eduverse_users', JSON.stringify(users)); }, [users]);
  useEffect(() => { localStorage.setItem('eduverse_xp', xp.toString()); }, [xp]);
  useEffect(() => { localStorage.setItem('eduverse_streak', streak.toString()); }, [streak]);
  useEffect(() => { localStorage.setItem('eduverse_last_active', lastActiveDate || ''); }, [lastActiveDate]);
  useEffect(() => { localStorage.setItem('eduverse_badges', JSON.stringify(badges)); }, [badges]);
  useEffect(() => { localStorage.setItem('eduverse_activity', JSON.stringify(activityLog)); }, [activityLog]);
  useEffect(() => { localStorage.setItem('eduverse_notes', JSON.stringify(notes)); }, [notes]);
  useEffect(() => { localStorage.setItem('eduverse_bookmarks', JSON.stringify(bookmarks)); }, [bookmarks]);
  useEffect(() => { localStorage.setItem('eduverse_comments', JSON.stringify(comments)); }, [comments]);
  useEffect(() => { localStorage.setItem('eduverse_certificates', JSON.stringify(certificates)); }, [certificates]);

  // Streak check on mount
  useEffect(() => {
    if (!currentUser) return;
    const today = new Date().toDateString();
    if (lastActiveDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (lastActiveDate === yesterday) {
      setStreak(prev => prev + 1);
    } else if (lastActiveDate && lastActiveDate !== today) {
      setStreak(0);
    } else if (!lastActiveDate) {
      setStreak(1);
    }
    setLastActiveDate(today);
  }, [currentUser]);

  // Check streak badge
  useEffect(() => {
    if (streak >= 7 && !badges.includes('streak_7')) {
      setBadges(prev => [...prev, 'streak_7']);
    }
  }, [streak]);

  function login(user) {
    setCurrentUser(user);
    localStorage.setItem('eduverse_user', JSON.stringify(user));
  }

  function logout() {
    setCurrentUser(null);
    setWishlist([]); setEnrolled([]); setProgress({}); setCompleted([]); setRatings({});
    setXp(0); setStreak(0); setLastActiveDate(null); setBadges([]); setActivityLog([]);
    setNotes({}); setBookmarks({}); setComments({}); setCertificates([]);
    localStorage.removeItem('eduverse_user'); localStorage.removeItem('eduverse_wishlist');
    localStorage.removeItem('eduverse_enrolled'); localStorage.removeItem('eduverse_progress');
    localStorage.removeItem('eduverse_completed'); localStorage.removeItem('eduverse_ratings');
    localStorage.removeItem('eduverse_xp'); localStorage.removeItem('eduverse_streak');
    localStorage.removeItem('eduverse_last_active'); localStorage.removeItem('eduverse_badges');
    localStorage.removeItem('eduverse_activity'); localStorage.removeItem('eduverse_notes');
    localStorage.removeItem('eduverse_bookmarks'); localStorage.removeItem('eduverse_comments');
    localStorage.removeItem('eduverse_certificates');
  }

  function addXp(amount, reason) {
    setXp(prev => {
      const newXp = prev + amount;
      // Check centurion badge
      if (prev < 1000 && newXp >= 1000 && !badges.includes('centurion')) {
        setBadges(b => [...b, 'centurion']);
      }
      return newXp;
    });
    addActivity('xp', `${reason} (+${amount} XP)`);
  }

  function addActivity(type, detail) {
    const entry = { id: Date.now() + Math.random(), type, detail, date: new Date().toISOString() };
    setActivityLog(prev => [entry, ...prev].slice(0, 200));
  }

  function addBadgeIfMissing(badgeId) {
    if (!badges.includes(badgeId)) {
      setBadges(prev => [...prev, badgeId]);
      addActivity('badge', `Earned badge: ${BADGE_DEFS[badgeId]?.label || badgeId}`);
    }
  }

  function toggleWishlist(id, toast) {
    setWishlist(prev => {
      const exists = prev.includes(id);
      if (toast) toast(exists ? 'Removed from wishlist' : 'Added to wishlist', exists ? 'error' : 'success');
      const updated = exists ? prev.filter(x => x !== id) : [...prev, id];
      if (!exists) addActivity('wishlist', `Added course #${id} to wishlist`);
      return updated;
    });
  }

  function toggleEnroll(id, courseName, toast) {
    setEnrolled(prev => {
      const exists = prev.includes(id);
      if (toast) toast(exists ? 'Unenrolled from course' : `Enrolled in "${courseName}"`, exists ? 'error' : 'success');
      const updated = exists ? prev.filter(x => x !== id) : [...prev, id];
      if (!exists) {
        addXp(20, `Enrolled in "${courseName}"`);
        addActivity('enroll', `Enrolled in "${courseName}"`);
        if (updated.length >= 5) addBadgeIfMissing('explorer');
      }
      return updated;
    });
  }

  function markLesson(courseId, lessonIndex, totalLessons) {
    setProgress(prev => {
      const courseProgress = prev[courseId] || [];
      if (courseProgress.includes(lessonIndex)) return prev;
      const updated = [...courseProgress, lessonIndex];
      const res = { ...prev, [courseId]: updated };
      // Auto-check first lesson badge
      addBadgeIfMissing('first_lesson');
      addXp(10, `Completed lesson ${lessonIndex + 1} in course #${courseId}`);
      addActivity('lesson', `Completed lesson ${lessonIndex + 1} in course #${courseId}`);
      // Check if course fully done
      if (updated.length === totalLessons) {
        addActivity('course_complete', `Finished all lessons in course #${courseId}`);
      }
      return res;
    });
  }

  function getCourseProgress(courseId, totalLessons) {
    const watched = (progress[courseId] || []).length;
    return totalLessons > 0 ? Math.round((watched / totalLessons) * 100) : 0;
  }

  function markCompleted(courseId, courseName) {
    setCompleted(prev => {
      if (prev.includes(courseId)) return prev;
      addBadgeIfMissing('graduate');
      addXp(50, `Completed "${courseName}"`);
      addActivity('certificate', `Earned certificate for "${courseName}"`);
      // Generate certificate
      const code = `EDU-${courseId}-${Date.now().toString(36).toUpperCase()}`;
      setCertificates(c => [...c, {
        courseId, courseName,
        userName: currentUser?.firstName + ' ' + currentUser?.lastName,
        userEmail: currentUser?.email,
        completionDate: new Date().toISOString(),
        code,
      }]);
      return [...prev, courseId];
    });
  }

  function rateCourse(courseId, rating) {
    setRatings(prev => ({ ...prev, [courseId]: rating }));
  }

  function getUserRating(courseId) {
    return ratings[courseId] || 0;
  }

  function toggleTheme() {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }

  function addUser(user) {
    setUsers(prev => {
      const exists = prev.findIndex(u => u.email === user.email);
      let updated;
      if (exists > -1) {
        updated = [...prev];
        updated[exists] = user;
      } else {
        updated = [...prev, user];
      }
      localStorage.setItem('eduverse_users', JSON.stringify(updated));
      return updated;
    });
  }

  // ─── Notes ───
  function addNote(courseId, lessonIdx, text) {
    const key = `${courseId}_${lessonIdx}`;
    const note = { id: Date.now() + Math.random(), text, createdAt: new Date().toISOString() };
    setNotes(prev => ({ ...prev, [key]: [...(prev[key] || []), note] }));
    addActivity('note', `Added note in course #${courseId}, lesson ${lessonIdx + 1}`);
  }

  function removeNote(courseId, lessonIdx, noteId) {
    const key = `${courseId}_${lessonIdx}`;
    setNotes(prev => ({ ...prev, [key]: (prev[key] || []).filter(n => n.id !== noteId) }));
  }

  // ─── Bookmarks ───
  function toggleBookmark(courseId, lessonIdx) {
    setBookmarks(prev => {
      const list = prev[courseId] || [];
      const exists = list.includes(lessonIdx);
      const updated = exists ? list.filter(i => i !== lessonIdx) : [...list, lessonIdx];
      return { ...prev, [courseId]: updated };
    });
  }

  function isBookmarked(courseId, lessonIdx) {
    return (bookmarks[courseId] || []).includes(lessonIdx);
  }

  // ─── Comments ───
  function addComment(courseId, lessonIdx, userName, text) {
    const key = `${courseId}_${lessonIdx}`;
    const comment = { id: Date.now() + Math.random(), userName, text, createdAt: new Date().toISOString() };
    setComments(prev => ({ ...prev, [key]: [...(prev[key] || []), comment] }));
    addActivity('comment', `${userName} commented on course #${courseId}, lesson ${lessonIdx + 1}`);
  }

  function getCommentsData(courseId, lessonIdx) {
    return comments[`${courseId}_${lessonIdx}`] || [];
  }

  // ─── Quiz ───
  function markQuizPassed(courseId) {
    addBadgeIfMissing('quiz_whiz');
    addXp(20, `Passed quiz in course #${courseId}`);
    addActivity('quiz', `Passed quiz in course #${courseId}`);
  }

  // ─── Bookworm badge ───
  function checkBookworm(courseId, totalLessons) {
    const watched = (progress[courseId] || []).length;
    if (watched >= totalLessons && !badges.includes('bookworm')) {
      addBadgeIfMissing('bookworm');
    }
  }

  return (
    <AppContext.Provider value={{
      currentUser, login, logout,
      wishlist, toggleWishlist,
      enrolled, toggleEnroll,
      progress, markLesson, getCourseProgress,
      completed, markCompleted,
      ratings, rateCourse, getUserRating,
      theme, toggleTheme,
      users, addUser,
      xp, streak, badges, activityLog, getLevelInfo, BADGE_DEFS,
      notes, addNote, removeNote,
      bookmarks, toggleBookmark, isBookmarked,
      comments, addComment, getCommentsData,
      certificates, addXp, addActivity, markQuizPassed, checkBookworm,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}