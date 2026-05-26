import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { AppProvider, useApp } from '../context/AppContext';
import { ToastProvider } from '../components/Toast';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomNav from '../components/BottomNav';
import ScrollToTop from '../components/ScrollToTop';
import OfflineBanner from '../components/OfflineBanner';
import '../styles/globals.css';

function AuthGuard({ Component, pageProps }) {
  const { currentUser, theme } = useApp();
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const touchStartX = useRef(0);

  const publicPaths = ['/login', '/admin', '/auth/callback'];
  const noFramePaths = ['/login', '/admin', '/auth/callback'];

  // Back-swipe gesture
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
    const timer = setTimeout(() => setChecking(false), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!checking && !currentUser && !publicPaths.includes(router.pathname)) {
      router.push('/login');
    }
  }, [checking, currentUser, router.pathname]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  if (checking) return (
    <div style={{
      minHeight:'100vh',
      background: theme === 'light' ? '#f0f4ff' : '#06080f',
      display:'flex', alignItems:'center', justifyContent:'center',
    }}>
      <div style={{
        width:'40px', height:'40px', borderRadius:'50%',
        border:'3px solid rgba(68,136,255,0.2)',
        borderTop:'3px solid #4488ff',
        animation:'spin 0.8s linear infinite',
      }}/>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );

  if (!currentUser && !publicPaths.includes(router.pathname)) return null;

  if (publicPaths.includes(router.pathname)) {
    return <Component {...pageProps} />;
  }

  return (
    <div style={{
      minHeight:'100vh',
      background:'var(--bg)',
      color:'var(--text)',
      display:'flex',
      flexDirection:'column',
      transition:'background 0.3s ease, color 0.3s ease',
    }}>
      <div style={{
        position:'fixed', inset:0,
        background: theme === 'dark'
          ? 'radial-gradient(ellipse 70% 50% at 15% 0%, rgba(68,136,255,0.1) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 100%, rgba(0,212,170,0.08) 0%, transparent 60%)'
          : 'radial-gradient(ellipse 70% 50% at 15% 0%, rgba(68,136,255,0.05) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 100%, rgba(0,212,170,0.04) 0%, transparent 60%)',
        pointerEvents:'none', zIndex:0,
      }}/>
      <OfflineBanner />
      <Header />
      <main style={{flex:1, position:'relative', zIndex:1, transition:'opacity 0.2s, transform 0.2s', opacity: transitioning ? 0.7 : 1, transform: transitioning ? 'scale(0.98)' : 'scale(1)'}}>
        <Component {...pageProps} />
      </main>
      <Footer />
      <BottomNav />
      <ScrollToTop />
      <div className="back-swipe-area"/>
    </div>
  );
}

export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <ToastProvider>
        <AuthGuard Component={Component} pageProps={pageProps} />
      </ToastProvider>
    </AppProvider>
  );
}