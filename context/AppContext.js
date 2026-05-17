import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [enrolled, setEnrolled] = useState([]);

  // Load from localStorage on first render
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('eduverse_user');
      const savedWishlist = localStorage.getItem('eduverse_wishlist');
      const savedEnrolled = localStorage.getItem('eduverse_enrolled');
      if (savedUser) setCurrentUser(JSON.parse(savedUser));
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
      if (savedEnrolled) setEnrolled(JSON.parse(savedEnrolled));
    } catch(e) {}
  }, []);

  // Save to localStorage whenever they change
  useEffect(() => {
    if (currentUser) localStorage.setItem('eduverse_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('eduverse_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('eduverse_enrolled', JSON.stringify(enrolled));
  }, [enrolled]);

  function login(user) {
    setCurrentUser(user);
    localStorage.setItem('eduverse_user', JSON.stringify(user));
  }

  function logout() {
    setCurrentUser(null);
    setWishlist([]);
    setEnrolled([]);
    localStorage.removeItem('eduverse_user');
    localStorage.removeItem('eduverse_wishlist');
    localStorage.removeItem('eduverse_enrolled');
  }

  function toggleWishlist(id) {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  }

  function toggleEnroll(id) {
    setEnrolled(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  }

  return (
    <AppContext.Provider value={{
      currentUser, login, logout,
      wishlist, toggleWishlist,
      enrolled, toggleEnroll,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}