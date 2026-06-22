import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { AppProvider, useApp } from '../context/AppContext';
import { ToastProvider } from '../components/Toast';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomNav from '../components/BottomNav';
import ScrollToTop from '../components/ScrollToTop';
import ErrorBoundary from '../components/ErrorBoundary';

import '../styles/globals.css';

function AuthGuard({ Component, pageProps }) {
  const { currentUser, authInitialized, theme } = useApp();
  const router = useRouter();
  const [transitioning, setTransitioning] = useState(false);
  const touchStartX = useRef(0);

  const publicPaths = ['/login', '/admin', '/auth/callback'];

  useEffect(() => {
    function onTouchStart(e) { touchStartX.current = e.touches[0].clientX; }
    function onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (dx > 80 && touchStartX.current < 30 && window.history.length > 1) {
        router.back();
      }
    }
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  useEffect(() => {
    function onStart() { setTransitioning(true); }
    function onComplete() { setTransitioning(false); }
    router.events.on('routeChangeStart', onStart);
    router.events.on('routeChangeComplete', onComplete);
    return () => {
      router.events.off('routeChangeStart', onStart);
      router.events.off('routeChangeComplete', onComplete);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (authInitialized && !currentUser && !publicPaths.includes(router.pathname)) {
      router.push('/login');
    }
  }, [currentUser, authInitialized]);

  if (authInitialized && !currentUser && !publicPaths.includes(router.pathname)) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', border: '3px solid var(--border2)', borderTopColor: 'var(--accent)', animation: 'spin 0.6s linear infinite' }} />
      </div>
    );
  }

  if (publicPaths.includes(router.pathname)) {
    return <Component {...pageProps} />;
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      color: 'var(--text)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'background 0.4s ease, color 0.4s ease',
    }}>
      <div style={{
        position: 'fixed', inset: 0,
        background: theme === 'dark'
          ? 'radial-gradient(ellipse 60% 45% at 10% 0%, rgba(99,102,241,0.08) 0%, transparent 65%), radial-gradient(ellipse 45% 40% at 90% 100%, rgba(94,234,212,0.06) 0%, transparent 60%)'
          : 'radial-gradient(ellipse 60% 45% at 10% 0%, rgba(99,102,241,0.04) 0%, transparent 65%), radial-gradient(ellipse 45% 40% at 90% 100%, rgba(94,234,212,0.03) 0%, transparent 60%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <Header />
      <main style={{
        flex: 1, position: 'relative', zIndex: 1,
        transition: 'opacity 0.25s ease, transform 0.25s ease',
        opacity: transitioning ? 0.7 : 1,
        transform: transitioning ? 'scale(0.98)' : 'scale(1)',
      }}>
        <Component {...pageProps} />
      </main>
      <Footer />
      <BottomNav />
      <ScrollToTop />
      <div className="back-swipe-area" />
    </div>
  );
}

function SwCleanup() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(regs => {
        regs.forEach(r => r.unregister());
      });
    }
    if ('caches' in window) {
      caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
    }
  }, []);
  return null;
}

export default function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <AppProvider>
        <ToastProvider>
          <SwCleanup />
          <AuthGuard Component={Component} pageProps={pageProps} />
        </ToastProvider>
      </AppProvider>
    </ErrorBoundary>
  );
}
