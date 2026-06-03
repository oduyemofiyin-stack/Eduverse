import { createContext, useContext, useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { saveUserData, loadUserData } from '../lib/firestore';

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
  const [currentUser, setCurrentUser] = useState(() => {
    if (typeof window === 'undefined') return null;
    try {
      const saved = localStorage.getItem('eduverse_user');
      return saved ? JSON.parse(saved) : null;
    } catch { return null; }
  });
  const [wishlist, setWishlist] = useState([]);
  const [enrolled, setEnrolled] = useState([]);
  const [progress, setProgress] = useState({});
  const [readingProgress, setReadingProgress] = useState({});
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
  const [reviews, setReviews] = useState(() => {
    if (typeof window === 'undefined') return [];
    try { return JSON.parse(localStorage.getItem('eduverse_reviews') || '[]'); } catch { return []; }
  });
  const [forumTopics, setForumTopics] = useState(() => {
    if (typeof window === 'undefined') return [];
    try { return JSON.parse(localStorage.getItem('eduverse_forum_topics') || '[]'); } catch { return []; }
  });
  const [notes, setNotes] = useState({});
  const [bookmarks, setBookmarks] = useState({});
  const [comments, setComments] = useState({});
  const [certificates, setCertificates] = useState([]);
  const [studyTime, setStudyTime] = useState(() => {
    if (typeof window === 'undefined') return {};
    try {
      const saved = localStorage.getItem('eduverse_study_time');
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });
  const [followingPaths, setFollowingPaths] = useState(() => {
    if (typeof window === 'undefined') return [];
    try { return JSON.parse(localStorage.getItem('eduverse_following_paths') || '[]'); } catch { return []; }
  });
  const [plannerGoals, setPlannerGoals] = useState(() => {
    if (typeof window === 'undefined') return [];
    try { return JSON.parse(localStorage.getItem('eduverse_planner_goals') || '[]'); } catch { return []; }
  });
  const [plannerTarget, setPlannerTarget] = useState(() => {
    if (typeof window === 'undefined') return 30;
    try { return parseInt(localStorage.getItem('eduverse_planner_target')) || 30; } catch { return 30; }
  });
  // TODO: move all these localStorage reads into a single helper function...
  const [unreadNotifications, setUnreadNotifications] = useState(() => {
    if (typeof window === 'undefined') return 0;
    try { return parseInt(localStorage.getItem('eduverse_unread_notifications')) || 0; } catch { return 0; }
  });
  const [dismissedNotifs, setDismissedNotifs] = useState(() => {
    if (typeof window === 'undefined') return [];
    try { return JSON.parse(localStorage.getItem('eduverse_dismissed_notifs') || '[]'); } catch { return []; }
  });
  const trackingRef = useRef(null);

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
      const savedReading = localStorage.getItem('eduverse_reading_progress');
      if (savedReading) setReadingProgress(JSON.parse(savedReading));
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
      const savedReviews = localStorage.getItem('eduverse_reviews');
      if (savedReviews) setReviews(JSON.parse(savedReviews));
      const savedForum = localStorage.getItem('eduverse_forum_topics');
      if (savedForum) setForumTopics(JSON.parse(savedForum));
    } catch(e) {}
  }, []);

  // Firestore: load cloud data after localStorage
  useEffect(() => {
    if (!currentUser) return;
    loadUserData(currentUser.id).then(cloud => {
      if (!cloud) return;
      if (cloud.wishlist) setWishlist(cloud.wishlist);
      if (cloud.enrolled) setEnrolled(cloud.enrolled);
      if (cloud.progress) setProgress(cloud.progress);
      if (cloud.readingProgress) setReadingProgress(cloud.readingProgress);
      if (cloud.completed) setCompleted(cloud.completed);
      if (cloud.ratings) setRatings(cloud.ratings);
      if (cloud.xp !== undefined) setXp(cloud.xp);
      if (cloud.streak !== undefined) setStreak(cloud.streak);
      if (cloud.lastActiveDate) setLastActiveDate(cloud.lastActiveDate);
      if (cloud.badges) setBadges(cloud.badges);
      if (cloud.activityLog) setActivityLog(cloud.activityLog);
      if (cloud.notes) setNotes(cloud.notes);
      if (cloud.bookmarks) setBookmarks(cloud.bookmarks);
      if (cloud.comments) setComments(cloud.comments);
      if (cloud.certificates) setCertificates(cloud.certificates);
      if (cloud.reviews) setReviews(cloud.reviews);
      if (cloud.forumTopics) setForumTopics(cloud.forumTopics);
    });
  }, [currentUser?.id]);

  // Firestore sync helper
  const syncToFirestore = useCallback(() => {
    if (!currentUser) return;
    saveUserData(currentUser.id, {
      email: currentUser.email,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      picture: currentUser.picture,
      provider: currentUser.provider,
      wishlist, enrolled, progress, readingProgress, completed, ratings,
      xp, streak, lastActiveDate, badges, activityLog,
      notes, bookmarks, comments, certificates, studyTime,
      reviews, forumTopics,
    });
  }, [currentUser, wishlist, enrolled, progress, readingProgress, completed, ratings, xp, streak, lastActiveDate, badges, activityLog, notes, bookmarks, comments, certificates, studyTime]);

  // Persist everything to localStorage + firestore (yes its a lot of useEffects lol)
  useEffect(() => { if (currentUser) { localStorage.setItem('eduverse_user', JSON.stringify(currentUser)); syncToFirestore(); } }, [currentUser]);
  useEffect(() => { localStorage.setItem('eduverse_wishlist', JSON.stringify(wishlist)); if (currentUser) syncToFirestore(); }, [wishlist]);
  useEffect(() => { localStorage.setItem('eduverse_enrolled', JSON.stringify(enrolled)); if (currentUser) syncToFirestore(); }, [enrolled]);
  useEffect(() => { localStorage.setItem('eduverse_progress', JSON.stringify(progress)); if (currentUser) syncToFirestore(); }, [progress]);
  useEffect(() => { localStorage.setItem('eduverse_reading_progress', JSON.stringify(readingProgress)); if (currentUser) syncToFirestore(); }, [readingProgress]);
  useEffect(() => { localStorage.setItem('eduverse_completed', JSON.stringify(completed)); if (currentUser) syncToFirestore(); }, [completed]);
  useEffect(() => { localStorage.setItem('eduverse_ratings', JSON.stringify(ratings)); if (currentUser) syncToFirestore(); }, [ratings]);
  useEffect(() => { localStorage.setItem('eduverse_theme', theme); document.documentElement.setAttribute('data-theme', theme); }, [theme]);
  useEffect(() => { localStorage.setItem('eduverse_users', JSON.stringify(users)); if (currentUser) saveUserData(currentUser.id, { users }).catch(() => {}); }, [users]);
  useEffect(() => { localStorage.setItem('eduverse_xp', xp.toString()); if (currentUser) syncToFirestore(); }, [xp]);
  useEffect(() => { localStorage.setItem('eduverse_streak', streak.toString()); if (currentUser) syncToFirestore(); }, [streak]);
  useEffect(() => { localStorage.setItem('eduverse_last_active', lastActiveDate || ''); if (currentUser) syncToFirestore(); }, [lastActiveDate]);
  useEffect(() => { localStorage.setItem('eduverse_badges', JSON.stringify(badges)); if (currentUser) syncToFirestore(); }, [badges]);
  useEffect(() => { localStorage.setItem('eduverse_activity', JSON.stringify(activityLog)); if (currentUser) syncToFirestore(); }, [activityLog]);
  useEffect(() => { localStorage.setItem('eduverse_notes', JSON.stringify(notes)); if (currentUser) syncToFirestore(); }, [notes]);
  useEffect(() => { localStorage.setItem('eduverse_bookmarks', JSON.stringify(bookmarks)); if (currentUser) syncToFirestore(); }, [bookmarks]);
  useEffect(() => { localStorage.setItem('eduverse_comments', JSON.stringify(comments)); if (currentUser) syncToFirestore(); }, [comments]);
  useEffect(() => { localStorage.setItem('eduverse_certificates', JSON.stringify(certificates)); if (currentUser) syncToFirestore(); }, [certificates]);
  useEffect(() => { localStorage.setItem('eduverse_study_time', JSON.stringify(studyTime)); if (currentUser) syncToFirestore(); }, [studyTime]);
  useEffect(() => { localStorage.setItem('eduverse_following_paths', JSON.stringify(followingPaths)); }, [followingPaths]);
  useEffect(() => { localStorage.setItem('eduverse_planner_goals', JSON.stringify(plannerGoals)); }, [plannerGoals]);
  useEffect(() => { localStorage.setItem('eduverse_planner_target', plannerTarget.toString()); }, [plannerTarget]);
  useEffect(() => { localStorage.setItem('eduverse_unread_notifications', unreadNotifications.toString()); }, [unreadNotifications]);
  useEffect(() => { localStorage.setItem('eduverse_dismissed_notifs', JSON.stringify(dismissedNotifs)); }, [dismissedNotifs]);
  useEffect(() => { localStorage.setItem('eduverse_reviews', JSON.stringify(reviews)); }, [reviews]);
  useEffect(() => { localStorage.setItem('eduverse_forum_topics', JSON.stringify(forumTopics)); }, [forumTopics]);
  // Streak check on mount — im using date string compare, works fine
  useEffect(() => {
    if (!currentUser) return;
    const today = new Date().toDateString();
    if (lastActiveDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (lastActiveDate === yesterday) {
      setStreak(prev => prev + 1);
    } else if (lastActiveDate && lastActiveDate !== today) {
      console.log('streak lost :(');
      setStreak(0);
    } else if (!lastActiveDate) {
      setStreak(1);
    }
    setLastActiveDate(today);
  }, [currentUser]);

  // Check if we earned any new badges
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
    setNotes({}); setBookmarks({}); setComments({}); setCertificates([]); setStudyTime({});
    setReviews([]); setForumTopics([]);
    localStorage.removeItem('eduverse_user'); localStorage.removeItem('eduverse_wishlist');
    localStorage.removeItem('eduverse_enrolled'); localStorage.removeItem('eduverse_progress'); localStorage.removeItem('eduverse_reading_progress');
    localStorage.removeItem('eduverse_completed'); localStorage.removeItem('eduverse_ratings');
    localStorage.removeItem('eduverse_xp'); localStorage.removeItem('eduverse_streak');
    localStorage.removeItem('eduverse_last_active'); localStorage.removeItem('eduverse_badges');
    localStorage.removeItem('eduverse_activity'); localStorage.removeItem('eduverse_notes');
    localStorage.removeItem('eduverse_bookmarks'); localStorage.removeItem('eduverse_comments');
    localStorage.removeItem('eduverse_certificates'); localStorage.removeItem('eduverse_study_time');
    localStorage.removeItem('eduverse_reviews'); localStorage.removeItem('eduverse_forum_topics');
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

  // ─── Notes (user notes on lessons) ───
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

  // ─── Bookmarks (might refactor this later) ───
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

  // ─── Comments on lessons ───
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

  // ─── Quiz ───
  function markQuizPassed(courseId) {
    addBadgeIfMissing('quiz_whiz');
    addXp(20, `Passed quiz in course #${courseId}`);
    addActivity('quiz', `Passed quiz in course #${courseId}`);
  }

  // ─── Study Time Tracking ───
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

  // ─── Bookworm badge ───
  function checkBookworm(courseId, totalLessons) {
    const watched = (progress[courseId] || []).length;
    if (watched >= totalLessons && !badges.includes('bookworm')) {
      addBadgeIfMissing('bookworm');
    }
  }

  // ─── Leaderboard ───
  const [leaderboard, setLeaderboard] = useState(() => {
    if (typeof window === 'undefined') return [];
    try {
      const saved = localStorage.getItem('eduverse_leaderboard');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem('eduverse_leaderboard', JSON.stringify(leaderboard));
  }, [leaderboard]);

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

  // ─── Reviews ───
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

  // ─── Forum Topics ───
  function addForumTopic(courseId, courseName, title, body) {
    const topic = {
      id: Date.now() + Math.random(),
      courseId, courseName, title, body,
      userName: currentUser?.firstName || currentUser?.email?.split('@')[0] || 'Anonymous',
      userEmail: currentUser?.email || '',
      createdAt: new Date().toISOString(),
      replies: [],
    };
    setForumTopics(prev => [topic, ...prev]);
    addActivity('forum', `${topic.userName} posted "${title}" in ${courseName}`);
  }

  function addForumReply(topicId, text) {
    const reply = {
      id: Date.now() + Math.random(),
      userName: currentUser?.firstName || currentUser?.email?.split('@')[0] || 'Anonymous',
      text,
      createdAt: new Date().toISOString(),
    };
    setForumTopics(prev => prev.map(t => t.id === topicId ? { ...t, replies: [...t.replies, reply] } : t));
    addActivity('forum', `${reply.userName} replied to a topic`);
  }

  function getForumTopics(courseId) {
    return forumTopics.filter(t => t.courseId === courseId).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  function getAllForumTopics() {
    return [...forumTopics].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  const ctxValue = useMemo(() => ({
    currentUser, login, logout,
    wishlist, toggleWishlist,
    enrolled, toggleEnroll,
    progress, markLesson, getCourseProgress,
    readingProgress, markReading, getReadingProgress, getCombinedProgress,
    completed, markCompleted,
    ratings, rateCourse, getUserRating,
    theme, toggleTheme,
    users, addUser, syncToFirestore,
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
    forumTopics, addForumTopic, addForumReply, getForumTopics, getAllForumTopics,
  }), [
    currentUser, wishlist, enrolled, progress, readingProgress, completed, ratings,
    theme, users, xp, streak, lastActiveDate, badges, activityLog,
    notes, bookmarks, comments, certificates, studyTime,
    leaderboard, followingPaths, plannerGoals, plannerTarget,
    unreadNotifications, dismissedNotifs, reviews, forumTopics,
  ]);

  return (
    <AppContext.Provider value={ctxValue}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}