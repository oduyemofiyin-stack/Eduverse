import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useApp } from '../context/AppContext';
import { logger } from '../lib/logger';

function decodeJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join(''));
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

export default function Login() {
  const { currentUser, signInWithGoogle } = useApp();
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const googleCallbackRef = useRef(null);

  async function handleGoogleCredentialResponse(response) {
    const payload = decodeJwt(response.credential);
    if (!payload) {
      setErrors({ general: 'Failed to verify sign-in. Please try again.' });
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      signInWithGoogle({
        id: payload.sub,
        email: payload.email || '',
        firstName: payload.given_name || '',
        lastName: payload.family_name || '',
        username: '',
        picture: payload.picture || '',
        provider: 'google',
        createdAt: new Date().toISOString(),
      });
      logger.info('Google Sign-In', 'Successful', { email: payload.email });
      router.push('/');
    } catch (e) {
      logger.warn('Google Sign-In', 'Failed', { error: e.message });
      setErrors({ general: 'Sign-in failed. Please try again.' });
      setLoading(false);
    }
  }

  useEffect(() => {
    googleCallbackRef.current = handleGoogleCredentialResponse;
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.google?.accounts?.id) {
        window.google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          callback: (res) => googleCallbackRef.current(res),
          cancel_on_tap_outside: false,
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (currentUser) router.push('/');
  }, [currentUser]);

  function handleGoogle() {
    if (window.google?.accounts?.id) {
      window.google.accounts.id.prompt();
    } else {
      setErrors({ general: 'Sign-in is loading. Please try again.' });
    }
  }

  return (
    <main>
      <Head>
        <title>Sign In | Eduverse</title>
      </Head>
      <div suppressHydrationWarning style={{
        minHeight:'100vh', background:'var(--bg)',
        display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem',
        backgroundImage:'radial-gradient(ellipse 70% 50% at 15% 0%, rgba(68,136,255,0.1) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 100%, rgba(0,212,170,0.08) 0%, transparent 60%)',
      }}>
        <div className="login-card" style={{
          background:'var(--surface)', border:'1px solid var(--border2)',
          borderRadius:'24px', padding:'2rem', width:'100%', maxWidth:'420px',
          boxSizing:'border-box',
          boxShadow:'0 20px 60px rgba(0,0,0,0.3)',
        }}>

        {/* LOGO */}
        <div style={{display:'flex', alignItems:'center', gap:'10px', justifyContent:'center', marginBottom:'1.6rem'}}>
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="17" stroke="url(#lg1)" strokeWidth="1.5"/>
            <ellipse cx="18" cy="18" rx="17" ry="6.5" stroke="url(#lg2)" strokeWidth="1" strokeDasharray="2.5 2" transform="rotate(-22 18 18)"/>
            <circle cx="18" cy="18" r="4" fill="url(#lg3)"/>
            <circle cx="29" cy="10" r="1.8" fill="#f0c040" opacity="0.85"/>
            <circle cx="7" cy="26" r="1.4" fill="#4488ff" opacity="0.75"/>
            <defs>
              <linearGradient id="lg1" x1="1" y1="1" x2="35" y2="35"><stop stopColor="#f0c040"/><stop offset="1" stopColor="#4488ff"/></linearGradient>
              <linearGradient id="lg2" x1="1" y1="18" x2="35" y2="18"><stop stopColor="#4488ff"/><stop offset="1" stopColor="#00d4aa"/></linearGradient>
              <linearGradient id="lg3" x1="14" y1="14" x2="22" y2="22"><stop stopColor="#f0c040"/><stop offset="1" stopColor="#4488ff"/></linearGradient>
            </defs>
          </svg>
          <span className="heading-serif" style={{fontSize:'1.4rem', fontWeight:'700', background:'linear-gradient(135deg,#f0c040,#4488ff 55%,#00d4aa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>Eduverse</span>
        </div>

        {/* TITLE */}
        <div className="heading-serif" style={{fontSize:'1.3rem', fontWeight:'700', textAlign:'center', marginBottom:'0.3rem', color:'var(--text)'}}>
          Welcome back
        </div>
        <div style={{fontSize:'0.82rem', color:'var(--muted)', textAlign:'center', marginBottom:'1.8rem'}}>
          Sign in to continue your learning journey
        </div>

        {/* ERROR */}
        {errors.general && (
          <div className="shake" style={{background:'rgba(239,68,68,0.1)', border:'1px solid rgba(239,68,68,0.3)', borderRadius:'10px', padding:'0.65rem 1rem', fontSize:'0.82rem', color:'var(--red)', marginBottom:'1rem'}}>
            {errors.general}
          </div>
        )}

        {/* EDUVERSE SIGN-IN BUTTON */}
        <button type="button" onClick={handleGoogle} disabled={loading} style={{
          width:'100%', padding:'0.88rem', borderRadius:'12px', border:'none',
          cursor: loading ? 'not-allowed' : 'pointer',
          background:'var(--accent)',
          color:'#fff', fontFamily:'inherit', fontSize:'0.92rem', fontWeight:'700',
          opacity: loading ? 0.7 : 1,
          boxShadow: loading ? 'none' : '0 8px 22px rgba(99,102,241,0.35)',
          transition:'all 0.2s',
          display:'flex', alignItems:'center', justifyContent:'center', gap:'0.6rem',
        }}>
          {loading ? (
            <><span style={{display:'inline-block', width:'18px', height:'18px', borderRadius:'50%', border:'2px solid rgba(255,255,255,0.3)', borderTop:'2px solid #fff', animation:'spin 0.6s linear infinite'}}/> Signing in...</>
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Continue with Eduverse
            </>
          )}
        </button>

        <div style={{fontSize:'0.72rem', color:'var(--muted2)', textAlign:'center', marginTop:'1rem', lineHeight:'1.5'}}>
          By continuing, you agree to Eduverse&apos;s Terms of Service and Privacy Policy
        </div>

        </div>
      </div>
    </main>
  );
}
