import { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { useRouter } from 'next/router';

export default function Header() {
  const { currentUser, logout, wishlist, enrolled, theme, toggleTheme, unreadNotifications } = useApp();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const sy = window.scrollY;
      setScrolled(sy > 20);
      if (sy > 100) {
        setHeaderHidden(sy > lastScrollY.current);
      } else {
        setHeaderHidden(false);
      }
      lastScrollY.current = sy;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Courses', path: '/' },
    { label: 'Search', path: '/search' },
    { label: 'Paths', path: '/paths' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: `Wishlist${wishlist.length > 0 ? ` (${wishlist.length})` : ''}`, path: '/wishlist' },
    { label: `My Learning${enrolled.length > 0 ? ` (${enrolled.length})` : ''}`, path: '/enrolled' },
    { label: 'Leaderboard', path: '/leaderboard' },
    { label: 'Blog', path: '/blog' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`header-collapsible ${headerHidden ? 'header-hidden' : ''}`} style={{
      position: 'sticky', top: 0, zIndex: 200,
      background: 'transparent',
      backdropFilter: 'none',
      borderBottom: '1px solid transparent',
      transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
    }}>
      <div className="glass" style={{
        margin: scrolled ? '0.5rem 1rem' : '0.75rem 1.2rem',
        borderRadius: 'var(--radius-lg)',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
        transition: 'all 0.3s ease',
        maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto',
      }}>
        <div style={{
          height: '56px', padding: '0 0.8rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* LEFT: Hamburger + Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setDropdownOpen(false); }}
              className="hamburger"
              aria-label="Menu"
              style={{
                background: 'transparent', border: 'none',
                borderRadius: '9px', padding: '0.4rem 0.5rem',
                cursor: 'pointer', color: 'var(--text)', fontSize: '1.1rem', lineHeight: '1',
                transition: 'background 0.2s ease',
              }}>
              {mobileMenuOpen ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="3" x2="15" y2="15" /><line x1="15" y1="3" x2="3" y2="15" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="2" y1="4" x2="16" y2="4" /><line x1="2" y1="9" x2="16" y2="9" /><line x1="2" y1="14" x2="16" y2="14" />
                </svg>
              )}
            </button>
            <div onClick={() => { router.push('/'); setMobileMenuOpen(false); }}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="17" stroke="url(#g1)" strokeWidth="1.5" />
                <ellipse cx="18" cy="18" rx="17" ry="6.5" stroke="url(#g2)" strokeWidth="1" strokeDasharray="2.5 2" transform="rotate(-22 18 18)" />
                <circle cx="18" cy="18" r="4" fill="url(#g3)" />
                <circle cx="29" cy="10" r="1.8" fill="#F4C542" opacity="0.85" />
                <circle cx="7" cy="26" r="1.4" fill="#6366F1" opacity="0.75" />
                <defs>
                  <linearGradient id="g1" x1="1" y1="1" x2="35" y2="35"><stop stopColor="#F4C542" /><stop offset="1" stopColor="#6366F1" /></linearGradient>
                  <linearGradient id="g2" x1="1" y1="18" x2="35" y2="18"><stop stopColor="#6366F1" /><stop offset="1" stopColor="#5EEAD4" /></linearGradient>
                  <linearGradient id="g3" x1="14" y1="14" x2="22" y2="22"><stop stopColor="#F4C542" /><stop offset="1" stopColor="#6366F1" /></linearGradient>
                </defs>
              </svg>
              <span className="heading-serif" style={{
                fontSize: '1.2rem', fontWeight: '700',
                background: 'linear-gradient(135deg,#F4C542,#6366F1 55%,#5EEAD4)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Eduverse</span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>

            {/* DESKTOP NAV */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="desktop-nav">
              {navItems.slice(0, 4).map(item => {
                const isActive = router.pathname === item.path;
                return (
                  <button key={item.path} onClick={() => router.push(item.path)} style={{
                    fontFamily: 'inherit', fontSize: '0.75rem', fontWeight: '500',
                    padding: '0.3rem 0.65rem', borderRadius: '8px', border: 'none',
                    cursor: 'pointer',
                    background: isActive ? 'var(--surface2)' : 'transparent',
                    color: isActive ? 'var(--text)' : 'var(--muted)',
                    transition: 'background 0.2s ease, color 0.2s ease',
                  }}>
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* THEME TOGGLE */}
            <button
              onClick={() => {
                toggleTheme();
                const btn = document.getElementById('themeBtn');
                if (btn) { btn.classList.remove('theme-spin'); void btn.offsetWidth; btn.classList.add('theme-spin'); }
              }}
              id="themeBtn"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              style={{
                background: 'transparent', border: 'none',
                borderRadius: '9px', padding: '0.35rem 0.5rem',
                cursor: 'pointer', fontSize: '0.95rem', lineHeight: '1',
                color: 'var(--muted)',
              }}>
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
              )}
            </button>

            {/* NOTIFICATION BELL */}
            <button onClick={() => router.push('/notifications')} title="Notifications" style={{
              background: 'transparent', border: 'none',
              borderRadius: '9px', padding: '0.35rem 0.5rem',
              cursor: 'pointer', fontSize: '0.95rem', lineHeight: '1', position: 'relative',
              color: 'var(--muted)',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" /></svg>
              {unreadNotifications > 0 && (
                <span style={{
                  position: 'absolute', top: '0', right: '1px',
                  width: '14px', height: '14px', borderRadius: '50%',
                  background: 'var(--accent)', color: '#fff',
                  fontSize: '0.5rem', fontWeight: '700',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid var(--bg)',
                }}>{unreadNotifications > 9 ? '9+' : unreadNotifications}</span>
              )}
            </button>

            {/* USER AVATAR / SIGN IN */}
            {currentUser ? (
              <div style={{ position: 'relative' }}>
                <div onClick={() => { setDropdownOpen(!dropdownOpen); setMobileMenuOpen(false); }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    background: 'transparent', border: 'none',
                    borderRadius: '100px', padding: '0.15rem 0.5rem 0.15rem 0.2rem',
                    cursor: 'pointer', transition: 'background 0.2s ease',
                  }}>
                  {currentUser.picture && !avatarError ? (
                    <img src={currentUser.picture} alt="avatar" referrerPolicy="no-referrer"
                      onError={() => setAvatarError(true)}
                      style={{ width: '26px', height: '26px', borderRadius: '50%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{
                      width: '26px', height: '26px', borderRadius: '50%',
                      background: 'var(--accent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.68rem', fontWeight: '700', color: '#fff',
                    }}>
                      {(currentUser.firstName[0] + (currentUser.lastName[0] || '')).toUpperCase()}
                    </div>
                  )}
                  <span className="user-name-desktop" style={{ fontSize: '0.76rem', fontWeight: '600', color: 'var(--text)', maxWidth: '80px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {currentUser.firstName}
                  </span>
                  <span style={{ fontSize: '0.5rem', color: 'var(--muted)' }}>▾</span>
                </div>

                {dropdownOpen && (
                  <div className="dropdown-enter" style={{
                    position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.4rem',
                    minWidth: '200px', zIndex: 300,
                    boxShadow: 'var(--shadow-lg)',
                  }}>
                    <div style={{ padding: '0.5rem 0.7rem 0.7rem', borderBottom: '1px solid var(--border)', marginBottom: '0.3rem' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text)', marginBottom: '0.15rem' }}>
                        {currentUser.firstName} {currentUser.lastName}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{currentUser.email}</div>
                    </div>
                    {[
                      { ico: '👤', label: 'My Profile', path: '/profile' },
                      { ico: '📊', label: 'Dashboard', path: '/dashboard' },
                      { ico: '📚', label: 'My Learning', path: '/enrolled' },
                      { ico: '♡', label: 'Wishlist', path: '/wishlist' },
                      { ico: '🔍', label: 'Search', path: '/search' },
                      { ico: '🗺️', label: 'Learning Paths', path: '/paths' },
                      { ico: '🏆', label: 'Leaderboard', path: '/leaderboard' },
                      { ico: '📝', label: 'Blog', path: '/blog' },
                      { ico: '🎓', label: 'Certificates', path: '/certificates' },
                      { ico: '📋', label: 'Study Planner', path: '/planner' },
                      { ico: '🔔', label: 'Notifications', path: '/notifications' },
                      { ico: '👨‍🏫', label: 'Instructors', path: '/instructors' },
                      { ico: 'ℹ️', label: 'About', path: '/about' },
                      { ico: '✉️', label: 'Contact', path: '/contact' },
                    ].map(item => (
                      <button key={item.path}
                        onClick={() => { router.push(item.path); setDropdownOpen(false); }}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '0.6rem',
                          padding: '0.5rem 0.7rem', borderRadius: '8px',
                          fontSize: '0.82rem', cursor: 'pointer',
                          color: 'var(--muted)', border: 'none',
                          background: 'none', width: '100%', textAlign: 'left',
                          transition: 'background 0.15s ease, color 0.15s ease',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface2)'; e.currentTarget.style.color = 'var(--text)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--muted)'; }}
                      >
                        {item.label}
                      </button>
                    ))}
                    <button
                      onClick={() => { logout(); setDropdownOpen(false); router.push('/login'); }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.6rem',
                        padding: '0.55rem 0.7rem', borderRadius: '8px',
                        fontSize: '0.82rem', cursor: 'pointer', color: 'var(--red)',
                        border: 'none', background: 'none', width: '100%', textAlign: 'left',
                        marginTop: '0.2rem', borderTop: '1px solid var(--border)',
                        transition: 'background 0.15s ease',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(239,68,68,0.08)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'none'}
                    >
                      ↩ Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button onClick={() => router.push('/login')}
                style={{
                  background: 'var(--accent)', border: 'none',
                  borderRadius: '8px', padding: '0.35rem 0.7rem',
                  color: '#fff', fontFamily: 'inherit', fontSize: '0.76rem', fontWeight: '600',
                  cursor: 'pointer', whiteSpace: 'nowrap', lineHeight: '1',
                  transition: 'transform 0.2s ease',
                }}>
                Sign In
              </button>
            )}
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'mobile-open' : ''}`} style={{
          background: 'transparent',
          borderTop: '1px solid var(--border)',
          overflow: 'hidden',
          maxHeight: mobileMenuOpen ? '70vh' : '0',
          transition: 'max-height 0.3s var(--ease-out)',
        }}>
          <div style={{ padding: '0.3rem 0.8rem 0.8rem', display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
            {navItems.map(item => (
              <button key={item.path}
                onClick={() => { router.push(item.path); setMobileMenuOpen(false); }}
                style={{
                  fontFamily: 'inherit', fontSize: '0.88rem', fontWeight: '500',
                  padding: '0.6rem 0.8rem', borderRadius: '8px', border: 'none',
                  cursor: 'pointer', textAlign: 'left',
                  background: router.pathname === item.path ? 'var(--surface2)' : 'transparent',
                  color: router.pathname === item.path ? 'var(--text)' : 'var(--muted)',
                }}>
                {item.label}
              </button>
            ))}
            {currentUser && (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', padding: '0.6rem 0.8rem', borderBottom: '1px solid var(--border)', marginBottom: '0.2rem' }}>
                  {currentUser.picture && !avatarError ? (
                    <img src={currentUser.picture} alt="avatar" referrerPolicy="no-referrer"
                      onError={() => setAvatarError(true)}
                      style={{ width: '30px', height: '30px', borderRadius: '50%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{
                      width: '30px', height: '30px', borderRadius: '50%',
                      background: 'var(--accent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.7rem', fontWeight: '700', color: '#fff', flexShrink: 0,
                    }}>
                      {(currentUser.firstName[0] + (currentUser.lastName[0] || '')).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text)' }}>{currentUser.firstName} {currentUser.lastName}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{currentUser.email}</div>
                  </div>
                </div>
                <button
                  onClick={() => { logout(); setMobileMenuOpen(false); router.push('/login'); }}
                  style={{ fontFamily: 'inherit', fontSize: '0.88rem', fontWeight: '500', padding: '0.6rem 0.8rem', borderRadius: '8px', border: 'none', cursor: 'pointer', textAlign: 'left', background: 'transparent', color: 'var(--red)', borderTop: '1px solid var(--border)', marginTop: '0.15rem' }}>
                  ↩ Sign Out
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .desktop-nav { display: flex; }
        .hamburger { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
          .user-name-desktop { display: none !important; }
        }
      `}</style>
    </header>
  );
}
