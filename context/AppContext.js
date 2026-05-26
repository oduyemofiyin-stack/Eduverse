import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

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
    } catch(e) {}
  }, []);

  useEffect(() => {
    if (currentUser) localStorage.setItem('eduverse_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('eduverse_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('eduverse_enrolled', JSON.stringify(enrolled));
  }, [enrolled]);

  useEffect(() => {
    localStorage.setItem('eduverse_progress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem('eduverse_completed', JSON.stringify(completed));
  }, [completed]);

  useEffect(() => {
    localStorage.setItem('eduverse_ratings', JSON.stringify(ratings));
  }, [ratings]);

  useEffect(() => {
    localStorage.setItem('eduverse_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('eduverse_users', JSON.stringify(users));
  }, [users]);

  function login(user) {
    setCurrentUser(user);
    localStorage.setItem('eduverse_user', JSON.stringify(user));
  }

  function logout() {
    setCurrentUser(null);
    setWishlist([]);
    setEnrolled([]);
    setProgress({});
    setCompleted([]);
    setRatings({});
    localStorage.removeItem('eduverse_user');
    localStorage.removeItem('eduverse_wishlist');
    localStorage.removeItem('eduverse_enrolled');
    localStorage.removeItem('eduverse_progress');
    localStorage.removeItem('eduverse_completed');
    localStorage.removeItem('eduverse_ratings');
  }

  function toggleWishlist(id, toast) {
    setWishlist(prev => {
      const exists = prev.includes(id);
      if (toast) toast(exists ? 'Removed from wishlist' : 'Added to wishlist ♥', exists ? 'error' : 'success');
      const updated = exists ? prev.filter(x => x !== id) : [...prev, id];
      return updated;
    });
  }

  function toggleEnroll(id, courseName, toast) {
    setEnrolled(prev => {
      const exists = prev.includes(id);
      if (toast) toast(exists ? 'Unenrolled from course' : `Enrolled in "${courseName}" 🎉`, exists ? 'error' : 'success');
      const updated = exists ? prev.filter(x => x !== id) : [...prev, id];
      return updated;
    });
  }

  function markLesson(courseId, lessonIndex, totalLessons) {
    setProgress(prev => {
      const courseProgress = prev[courseId] || [];
      if (courseProgress.includes(lessonIndex)) return prev;
      const updated = [...courseProgress, lessonIndex];
      return { ...prev, [courseId]: updated };
    });
  }

  function getCourseProgress(courseId, totalLessons) {
    const watched = (progress[courseId] || []).length;
    return totalLessons > 0 ? Math.round((watched / totalLessons) * 100) : 0;
  }

  function markCompleted(courseId) {
    setCompleted(prev => prev.includes(courseId) ? prev : [...prev, courseId]);
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
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}