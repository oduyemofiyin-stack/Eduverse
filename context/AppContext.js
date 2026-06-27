import { createContext, useContext, useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { saveUserData, loadUserData } from '../lib/firestore';
import { getDbInstance } from '../lib/firebase';

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

function loadLocal(key, fallback = null) {
  if (typeof window === 'undefined') return fallback;
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch { return fallback; }
}

function saveLocal(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn('Failed to save to localStorage:', e.message);
  }
}

export function AppProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => loadLocal('eduverse_user'));
  const [authInitialized, setAuthInitialized] = useState(false);
  const [wishlist, setWishlist] = useState(() => loadLocal('eduverse_wishlist', []));
  const [enrolled, setEnrolled] = useState(() => loadLocal('eduverse_enrolled', []));
  const [progress, setProgress] = useState(() => loadLocal('eduverse_progress', {}));
  const [readingProgress, setReadingProgress] = useState(() => loadLocal('eduverse_reading_progress', {}));
  const [completed, setCompleted] = useState(() => loadLocal('eduverse_completed', []));
  const [ratings, setRatings] = useState(() => loadLocal('eduverse_ratings', {}));
  const [theme, setTheme] = useState(() => loadLocal('eduverse_theme', 'dark'));
  const [xp, setXp] = useState(() => loadLocal('eduverse_xp', 0));
  const [streak, setStreak] = useState(() => loadLocal('eduverse_streak', 0));
  const [lastActiveDate, setLastActiveDate] = useState(() => loadLocal('eduverse_last_active_date'));
  const [badges, setBadges] = useState(() => loadLocal('eduverse_badges', []));
  const [activityLog, setActivityLog] = useState(() => loadLocal('eduverse_activity', []));
  const [notes, setNotes] = useState(() => loadLocal('eduverse_notes', {}));
  const [bookmarks, setBookmarks] = useState(() => loadLocal('eduverse_bookmarks', {}));
  const [comments, setComments] = useState(() => loadLocal('eduverse_comments', {}));
  const [certificates, setCertificates] = useState(() => loadLocal('eduverse_certificates', []));
  const [reviews, setReviews] = useState(() => loadLocal('eduverse_reviews', []));
  const [studyTime, setStudyTime] = useState(() => loadLocal('eduverse_study_time', {}));
  const [followingPaths, setFollowingPaths] = useState(() => loadLocal('eduverse_following_paths', []));
  const [plannerGoals, setPlannerGoals] = useState(() => loadLocal('eduverse_planner_goals', []));
  const [plannerTarget, setPlannerTarget] = useState(() => loadLocal('eduverse_planner_target', 30));
  const [unreadNotifications, setUnreadNotifications] = useState(() => loadLocal('eduverse_unread_notifications', 0));
  const [dismissedNotifs, setDismissedNotifs] = useState(() => loadLocal('eduverse_dismissed_notifs', []));
  const [leaderboard, setLeaderboard] = useState(() => loadLocal('eduverse_leaderboard', []));
  const trackingRef = useRef(null);
  const syncTimeoutRef = useRef(null);

  function signInWithGoogle(user) {
    setCurrentUser(user);
    saveLocal('eduverse_user', user);
    loadUserData(user.id).then(data => {
      if (data) {
        if (data.wishlist) setWishlist(data.wishlist);
        if (data.enrolled) setEnrolled(data.enrolled);
        if (data.progress) setProgress(data.progress);
        if (data.readingProgress) setReadingProgress(data.readingProgress);
        if (data.completed) setCompleted(data.completed);
        if (data.ratings) setRatings(data.ratings);
        if (data.xp !== undefined) setXp(data.xp);
        if (data.streak !== undefined) setStreak(data.streak);
        if (data.lastActiveDate) setLastActiveDate(data.lastActiveDate);
        if (data.badges) setBadges(data.badges);
        if (data.activityLog) setActivityLog(data.activityLog);
        if (data.notes) setNotes(data.notes);
        if (data.bookmarks) setBookmarks(data.bookmarks);
        if (data.comments) setComments(data.comments);
        if (data.certificates) setCertificates(data.certificates);
        if (data.reviews) setReviews(data.reviews);
        if (data.studyTime) setStudyTime(data.studyTime);
        if (data.followingPaths) setFollowingPaths(data.followingPaths);
      }
    });
  }

  function clearUserState() {
    setCurrentUser(null);
    setWishlist([]); setEnrolled([]); setProgress({}); setReadingProgress({});
    setCompleted([]); setRatings({}); setXp(0); setStreak(0);
    setLastActiveDate(null); setBadges([]); setActivityLog([]);
    setNotes({}); setBookmarks({}); setComments({}); setCertificates([]);
    setReviews([]); setStudyTime({}); setFollowingPaths([]);
    setPlannerGoals([]); setPlannerTarget(30);
    setUnreadNotifications(0); setDismissedNotifs([]); setLeaderboard([]);
    const keys = [
      'eduverse_user', 'eduverse_wishlist', 'eduverse_enrolled', 'eduverse_progress',
      'eduverse_reading_progress', 'eduverse_completed', 'eduverse_ratings',
      'eduverse_xp', 'eduverse_streak', 'eduverse_last_active_date', 'eduverse_badges',
      'eduverse_activity', 'eduverse_notes', 'eduverse_bookmarks', 'eduverse_comments',
      'eduverse_certificates', 'eduverse_reviews', 'eduverse_study_time',
      'eduverse_following_paths', 'eduverse_planner_goals', 'eduverse_planner_target',
      'eduverse_unread_notifications', 'eduverse_dismissed_notifs', 'eduverse_leaderboard',
      'eduverse_theme',
    ];
    keys.forEach(k => localStorage.removeItem(k));
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAuthInitialized(true);
  }, []);

  // ─── Load user data from Firestore on mount ───
  useEffect(() => {
    if (!currentUser) return;
    loadUserData(currentUser.id).then(data => {
      if (!data) return;
      if (data.wishlist) setWishlist(data.wishlist);
      if (data.enrolled) setEnrolled(data.enrolled);
      if (data.progress) setProgress(data.progress);
      if (data.readingProgress) setReadingProgress(data.readingProgress);
      if (data.completed) setCompleted(data.completed);
      if (data.ratings) setRatings(data.ratings);
      if (data.xp !== undefined) setXp(data.xp);
      if (data.streak !== undefined) setStreak(data.streak);
      if (data.lastActiveDate) setLastActiveDate(data.lastActiveDate);
      if (data.badges) setBadges(data.badges);
      if (data.activityLog) setActivityLog(data.activityLog);
      if (data.notes) setNotes(data.notes);
      if (data.bookmarks) setBookmarks(data.bookmarks);
      if (data.comments) setComments(data.comments);
      if (data.certificates) setCertificates(data.certificates);
      if (data.reviews) setReviews(data.reviews);
      if (data.studyTime) setStudyTime(data.studyTime);
      if (data.followingPaths) setFollowingPaths(data.followingPaths);
    });
  }, [currentUser]);

  // ─── Debounced Firestore Sync ───
  const scheduleSync = useCallback(() => {
    if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);
    syncTimeoutRef.current = setTimeout(() => {
      if (!currentUser) return;
      saveUserData(currentUser.id, {
        wishlist, enrolled, progress, readingProgress,
        completed, ratings, xp, streak, lastActiveDate,
        badges, activityLog, notes, bookmarks, comments,
        certificates, reviews, studyTime, followingPaths,
      });
    }, 2000);
  }, [currentUser, wishlist, enrolled, progress, readingProgress, completed, ratings, xp, streak, lastActiveDate, badges, activityLog, notes, bookmarks, comments, certificates, reviews, studyTime, followingPaths]);

  const persist = useCallback((key, value, sync = false) => {
    saveLocal(key, value);
    if (sync && currentUser) scheduleSync();
  }, [currentUser, scheduleSync]);

  useEffect(() => { persist('eduverse_user', currentUser, true); }, [currentUser, persist]);
  useEffect(() => { persist('eduverse_wishlist', wishlist, true); }, [wishlist, persist]);
  useEffect(() => { persist('eduverse_enrolled', enrolled, true); }, [enrolled, persist]);
  useEffect(() => { persist('eduverse_progress', progress, true); }, [progress, persist]);
  useEffect(() => { persist('eduverse_reading_progress', readingProgress, true); }, [readingProgress, persist]);
  useEffect(() => { persist('eduverse_completed', completed, true); }, [completed, persist]);
  useEffect(() => { persist('eduverse_ratings', ratings, true); }, [ratings, persist]);
  useEffect(() => { saveLocal('eduverse_theme', theme); document.documentElement.setAttribute('data-theme', theme); }, [theme]);
  useEffect(() => { persist('eduverse_xp', xp, true); }, [xp, persist]);
  useEffect(() => { persist('eduverse_streak', streak, true); }, [streak, persist]);
  useEffect(() => { persist('eduverse_last_active_date', lastActiveDate, true); }, [lastActiveDate, persist]);
  useEffect(() => { persist('eduverse_badges', badges, true); }, [badges, persist]);
  useEffect(() => { persist('eduverse_activity', activityLog, true); }, [activityLog, persist]);
  useEffect(() => { persist('eduverse_notes', notes, true); }, [notes, persist]);
  useEffect(() => { persist('eduverse_bookmarks', bookmarks, true); }, [bookmarks, persist]);
  useEffect(() => { persist('eduverse_comments', comments, true); }, [comments, persist]);
  useEffect(() => { persist('eduverse_certificates', certificates, true); }, [certificates, persist]);
  useEffect(() => { persist('eduverse_study_time', studyTime, true); }, [studyTime, persist]);
  useEffect(() => { persist('eduverse_following_paths', followingPaths); }, [followingPaths, persist]);
  useEffect(() => { persist('eduverse_planner_goals', plannerGoals); }, [plannerGoals, persist]);
  useEffect(() => { persist('eduverse_planner_target', plannerTarget); }, [plannerTarget, persist]);
  useEffect(() => { persist('eduverse_unread_notifications', unreadNotifications); }, [unreadNotifications, persist]);
  useEffect(() => { persist('eduverse_dismissed_notifs', dismissedNotifs); }, [dismissedNotifs, persist]);
  useEffect(() => { persist('eduverse_reviews', reviews); }, [reviews, persist]);
  useEffect(() => { persist('eduverse_leaderboard', leaderboard); }, [leaderboard, persist]);

  // ─── Streak check on mount ───
  useEffect(() => {
    if (!currentUser) return;
    const today = new Date().toDateString();
    if (lastActiveDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (lastActiveDate === yesterday) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStreak(prev => prev + 1);
    } else if (lastActiveDate && lastActiveDate !== today) {
      setStreak(0);
    } else if (!lastActiveDate) {
      setStreak(1);
    }
    setLastActiveDate(today);
  }, [currentUser, lastActiveDate]);

  useEffect(() => {
    if (streak >= 7 && !badges.includes('streak_7')) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBadges(prev => [...prev, 'streak_7']);
    }
  }, [streak, badges]);

  function logout() {
    clearUserState();
  }

  function manualSync() {
    if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);
    if (!currentUser) return;
    saveUserData(currentUser.id, {
      wishlist, enrolled, progress, readingProgress,
      completed, ratings, xp, streak, lastActiveDate,
      badges, activityLog, notes, bookmarks, comments,
      certificates, reviews, studyTime, followingPaths,
    });
  }

  function addXp(amount, reason) {
    setXp(prev => {
      const newXp = prev + amount;
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
      addBadgeIfMissing('first_lesson');
      addXp(10, `Completed lesson ${lessonIndex + 1} in course #${courseId}`);
      addActivity('lesson', `Completed lesson ${lessonIndex + 1} in course #${courseId}`);
      if (updated.length === totalLessons) {
        addActivity('course_complete', `Finished all lessons in course #${courseId}`);
      }
      return res;
    });
  }

  function markReading(courseId, sectionIndex) {
    setReadingProgress(prev => {
      const courseReading = prev[courseId] || [];
      if (courseReading.includes(sectionIndex)) return prev;
      return { ...prev, [courseId]: [...courseReading, sectionIndex] };
    });
  }

  function getCourseProgress(courseId, totalLessons) {
    const watched = (progress[courseId] || []).length;
    return totalLessons > 0 ? Math.round((watched / totalLessons) * 100) : 0;
  }

  function getReadingProgress(courseId, totalReading) {
    const read = (readingProgress[courseId] || []).length;
    return totalReading > 0 ? Math.round((read / totalReading) * 100) : 0;
  }

  function getCombinedProgress(courseId, totalLessons, totalReading) {
    const watched = (progress[courseId] || []).length;
    const read = (readingProgress[courseId] || []).length;
    const total = totalLessons + totalReading;
    return total > 0 ? Math.round(((watched + read) / total) * 100) : 0;
  }

  function markCompleted(courseId, courseName) {
    setCompleted(prev => {
      if (prev.includes(courseId)) return prev;
      addBadgeIfMissing('graduate');
      addXp(50, `Completed "${courseName}"`);
      addActivity('certificate', `Earned certificate for "${courseName}"`);
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

  function addComment(courseId, lessonIdx, userName, text, parentId = null) {
    const key = `${courseId}_${lessonIdx}`;
    const comment = { id: Date.now() + Math.random(), userName, text, parentId, createdAt: new Date().toISOString() };
    setComments(prev => ({ ...prev, [key]: [...(prev[key] || []), comment] }));
    addActivity('comment', `${userName} commented on course #${courseId}, lesson ${lessonIdx + 1}`);
  }

  function getCommentsData(courseId, lessonIdx) {
    return comments[`${courseId}_${lessonIdx}`] || [];
  }

  function getReplies(courseId, lessonIdx, parentId) {
    return (comments[`${courseId}_${lessonIdx}`] || []).filter(c => c.parentId === parentId);
  }

  function markQuizPassed(courseId) {
    addBadgeIfMissing('quiz_whiz');
    addXp(20, `Passed quiz in course #${courseId}`);
    addActivity('quiz', `Passed quiz in course #${courseId}`);
  }

  function startTracking(courseId) {
    if (trackingRef.current) clearInterval(trackingRef.current);
    trackingRef.current = setInterval(() => {
      setStudyTime(prev => ({ ...prev, [courseId]: (prev[courseId] || 0) + 30 }));
    }, 30000);
  }

  function stopTracking() {
    if (trackingRef.current) {
      clearInterval(trackingRef.current);
      trackingRef.current = null;
    }
  }

  function getStudyTime(courseId) {
    const seconds = studyTime[courseId] || 0;
    return Math.floor(seconds / 60);
  }

  function checkBookworm(courseId, totalLessons) {
    const watched = (progress[courseId] || []).length;
    if (watched >= totalLessons && !badges.includes('bookworm')) {
      addBadgeIfMissing('bookworm');
    }
  }

  function addScore(userName, courseId, score, total) {
    const entry = { userName, courseId, score, total, date: new Date().toISOString() };
    setLeaderboard(prev => [...prev, entry]);
    addActivity('leaderboard', `${userName} scored ${score}/${total} in course #${courseId}`);
  }

  function getLeaderboard(courseId) {
    return leaderboard
      .filter(e => e.courseId === courseId)
      .sort((a, b) => b.score - a.score || new Date(a.date) - new Date(b.date))
      .slice(0, 10);
  }

  function togglePathFollow(pathId) {
    setFollowingPaths(prev => prev.includes(pathId) ? prev.filter(p => p !== pathId) : [...prev, pathId]);
  }

  function addPlannerGoal(text, targetMinutes = 30) {
    const goal = { id: Date.now() + Math.random(), text, targetMinutes, completed: false, createdAt: new Date().toISOString() };
    setPlannerGoals(prev => [...prev, goal]);
  }

  function togglePlannerGoal(id) {
    setPlannerGoals(prev => prev.map(g => g.id === id ? { ...g, completed: !g.completed } : g));
  }

  function removePlannerGoal(id) {
    setPlannerGoals(prev => prev.filter(g => g.id !== id));
  }

  function addNotification(type, title, desc) {
    setUnreadNotifications(prev => prev + 1);
    addActivity(type, desc || title);
  }

  function markNotificationsRead() {
    setUnreadNotifications(0);
  }

  function dismissNotification(id) {
    setDismissedNotifs(prev => [...prev, id]);
  }

  function getPlannerProgress() {
    if (plannerGoals.length === 0) return 0;
    return Math.round((plannerGoals.filter(g => g.completed).length / plannerGoals.length) * 100);
  }

  function getPathProgress(pathCourses) {
    if (!pathCourses || pathCourses.length === 0) return 0;
    const completedCount = pathCourses.filter(cId => completed.includes(cId)).length;
    return Math.round((completedCount / pathCourses.length) * 100);
  }

  function addReview(courseId, courseName, rating, text) {
    const review = {
      id: Date.now() + Math.random(),
      courseId, courseName, rating, text,
      userName: currentUser?.firstName || 'Anonymous',
      userEmail: currentUser?.email || '',
      createdAt: new Date().toISOString(),
    };
    setReviews(prev => [review, ...prev]);
    rateCourse(courseId, rating);
    addActivity('review', `${review.userName} reviewed "${courseName}" (${rating} stars)`);
  }

  function updateReview(reviewId, newRating, newText) {
    setReviews(prev => prev.map(r => r.id === reviewId ? { ...r, rating: newRating, text: newText } : r));
    addActivity('review', `Review updated (${newRating} stars)`);
  }

  function deleteReview(reviewId) {
    setReviews(prev => prev.filter(r => r.id !== reviewId));
    addActivity('review', 'Review deleted');
  }

  function getCourseReviews(courseId) {
    return reviews.filter(r => r.courseId === courseId).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  function getAverageRating(courseId) {
    const courseReviews = reviews.filter(r => r.courseId === courseId);
    if (courseReviews.length === 0) return 0;
    const sum = courseReviews.reduce((a, r) => a + r.rating, 0);
    return Math.round((sum / courseReviews.length) * 10) / 10;
  }

  function getRatingDistribution(courseId) {
    const courseReviews = reviews.filter(r => r.courseId === courseId);
    const dist = [0, 0, 0, 0, 0];
    courseReviews.forEach(r => { if (r.rating >= 1 && r.rating <= 5) dist[r.rating - 1]++; });
    return dist;
  }

  const ctxValue = useMemo(() => ({
    currentUser, authInitialized, signInWithGoogle, logout,
    wishlist, toggleWishlist,
    enrolled, toggleEnroll,
    progress, markLesson, getCourseProgress,
    readingProgress, markReading, getReadingProgress, getCombinedProgress,
    completed, markCompleted,
    ratings, rateCourse, getUserRating,
    theme, toggleTheme,
    xp, streak, badges, activityLog, getLevelInfo, BADGE_DEFS,
    notes, addNote, removeNote,
    bookmarks, toggleBookmark, isBookmarked,
    comments, addComment, getCommentsData, getReplies,
    certificates, addXp, addActivity, markQuizPassed, checkBookworm,
    studyTime, startTracking, stopTracking, getStudyTime,
    leaderboard, addScore, getLeaderboard,
    followingPaths, togglePathFollow, getPathProgress,
    plannerGoals, plannerTarget, setPlannerTarget, addPlannerGoal, togglePlannerGoal, removePlannerGoal, getPlannerProgress,
    unreadNotifications, addNotification, markNotificationsRead, dismissNotification, dismissedNotifs,
    reviews, addReview, updateReview, deleteReview, getCourseReviews, getAverageRating, getRatingDistribution,
    manualSync,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [currentUser, authInitialized, wishlist, enrolled, progress, readingProgress, completed, ratings, theme, xp, streak, badges, activityLog, notes, bookmarks, comments, certificates, studyTime, leaderboard, followingPaths, plannerGoals, plannerTarget, unreadNotifications, dismissedNotifs, reviews]);

  return (
    <AppContext.Provider value={ctxValue}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
