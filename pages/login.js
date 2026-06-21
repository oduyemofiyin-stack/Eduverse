import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useApp } from '../context/AppContext';
import { getSupabase } from '../lib/supabase';
import { checkUsername } from '../lib/supabase-db';
import { isValidPassword, checkRateLimit } from '../lib/sanitize';
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
  const [tab, setTab] = useState('login');
  const [form, setForm] = useState({ firstName:'', lastName:'', email:'', password:'', username:'', confirmEmail:'' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const tokenClientRef = useRef(null);

  useEffect(() => {
    if (currentUser) router.push('/');
  }, [currentUser]);

  function switchTab(t) {
    setTab(t);
    setErrors({});
    setMessage('');
    setForm({ firstName:'', lastName:'', email:'', password:'', username:'', confirmEmail:'' });
  }

  function validate() {
    const errs = {};
    if (tab === 'signup') {
      if (!form.firstName.trim()) errs.firstName = 'First name is required';
      if (!form.lastName.trim()) errs.lastName = 'Last name is required';
      if (!form.username.trim()) {
        errs.username = 'Username is required';
      } else if (form.username.trim().length < 4 || form.username.trim().length > 20) {
        errs.username = 'Username must be 4-20 characters';
      } else if (!/^[A-Za-z]/.test(form.username.trim())) {
        errs.username = 'Must start with a letter';
      } else if (!/^[A-Za-z][A-Za-z0-9_-]*$/.test(form.username.trim())) {
        errs.username = 'Letters, numbers, underscores, hyphens only';
      }
      if (form.confirmEmail !== form.email) {
        errs.confirmEmail = 'Emails do not correspond';
      }
    }
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Please enter a valid email';
    if (!form.password) {
      errs.password = 'Password is required';
    } else if (tab === 'signup' && !isValidPassword(form.password)) {
      errs.password = 'Password does not meet requirements';
    }
    return errs;
  }

  async function handleLogin() {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    const rl = checkRateLimit('login_' + form.email.toLowerCase(), 10, 600000);
    if (!rl.allowed) { setErrors({ general: rl.message }); return; }
    setLoading(true);
    setErrors({});

    const supabase = getSupabase();
    if (!supabase) { setErrors({ general: 'Backend not configured.' }); setLoading(false); return; }

    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) {
      logger.warn('Login', 'Failed login attempt', { email: form.email.toLowerCase(), error: error.message });
      if (error.message.includes('Email not confirmed')) {
        setErrors({ general: 'Please confirm your email before signing in. Check your inbox.' });
      } else {
        setErrors({ general: 'Incorrect email or password. Please try again.' });
      }
      setLoading(false);
      return;
    }

    logger.info('Login', 'Successful login', { email: form.email.toLowerCase() });
    setLoading(false);
    setTimeout(() => router.push('/'), 300);
  }

  async function handleSignup() {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    const rl = checkRateLimit('signup_' + form.email.toLowerCase(), 3, 600000);
    if (!rl.allowed) { setErrors({ general: rl.message }); return; }
    setLoading(true);
    setErrors({});

    const supabase = getSupabase();
    if (!supabase) { setErrors({ general: 'Backend not configured.' }); setLoading(false); return; }

    const usernameAvailable = await checkUsername(form.username.trim());
    if (!usernameAvailable) {
      setErrors({ general: 'This username is already taken.' });
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          first_name: form.firstName.trim(),
          last_name: form.lastName.trim(),
          username: form.username.trim(),
        },
      },
    });

    if (error) {
      logger.warn('Signup', 'Failed', { email: form.email.toLowerCase(), error: error.message });
      if (error.message.includes('already registered')) {
        setErrors({ general: 'An account with this email already exists.' });
      } else {
        setErrors({ general: error.message });
      }
      setLoading(false);
      return;
    }

    logger.info('Signup', 'Account created', { email: form.email.toLowerCase() });
    setMessage('Account created! Check your email to confirm your sign-in.');
    setLoading(false);
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.google?.accounts?.oauth2) {
        tokenClientRef.current = window.google.accounts.oauth2.initTokenClient({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          scope: 'openid email profile',
          callback: (response) => {
            if (response.error) {
              setErrors({ general: 'Sign-in cancelled or failed.' });
              setLoading(false);
              return;
            }
            const payload = decodeJwt(response.id_token);
            if (!payload) {
              setErrors({ general: 'Failed to verify sign-in.' });
              setLoading(false);
              return;
            }
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
          },
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  function handleGoogle() {
    if (tokenClientRef.current) {
      setLoading(true);
      setErrors({});
      tokenClientRef.current.requestAccessToken();
    } else {
      setErrors({ general: 'Google sign-in is loading. Please try again.' });
    }
  }

  const inp = (hasErr) => ({
    width:'100%', boxSizing:'border-box', background:'var(--surface2)',
    border:`1px solid ${hasErr ? 'var(--red)' : 'var(--border2)'}`,
    borderRadius:'11px', padding:'0.78rem 1rem',
    fontSize:'0.9rem', color:'var(--text)', outline:'none',
    fontFamily:'inherit', transition:'border 0.2s',
  });

  return (
    <main>
      <Head>
        <title>{tab === 'login' ? 'Sign In' : 'Sign Up'} | Eduverse</title>
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

        {/* TABS */}
        <div style={{display:'flex', background:'var(--surface2)', borderRadius:'12px', padding:'4px', marginBottom:'1.6rem'}}>
          {['login','signup'].map(t => (
            <button key={t} type="button" onClick={() => switchTab(t)} style={{
              flex:1, padding:'0.5rem', borderRadius:'9px', border:'none',
              background: tab === t ? 'var(--surface3)' : 'transparent',
              color: tab === t ? 'var(--text)' : 'var(--muted)',
              fontFamily:'inherit', fontSize:'0.85rem', fontWeight:'600', cursor:'pointer',
            }}>
              {t === 'login' ? 'Sign In' : 'Sign Up'}
            </button>
          ))}
        </div>

        {/* TITLE */}
        <div className="heading-serif" style={{fontSize:'1.3rem', fontWeight:'700', textAlign:'center', marginBottom:'0.3rem', color:'var(--text)'}}>
          {tab === 'login' ? 'Welcome back' : 'Sign Up'}
        </div>
        <div style={{fontSize:'0.82rem', color:'var(--muted)', textAlign:'center', marginBottom:'1.4rem'}}>
          {tab === 'login' ? 'Sign in to continue your learning journey' : 'Sign up to Eduverse and start learning'}
        </div>

        {/* GOOGLE BUTTON */}
        <button type="button" onClick={handleGoogle} style={{
          width:'100%', padding:'0.78rem', borderRadius:'12px',
          border:'1px solid var(--border2)', background:'var(--surface2)',
          color:'var(--text)', fontFamily:'inherit', fontSize:'0.9rem',
          fontWeight:'600', cursor:'pointer', marginBottom:'1.2rem',
          display:'flex', alignItems:'center', justifyContent:'center', gap:'0.7rem',
          transition:'all 0.2s',
        }}>
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
            <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
            <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
          </svg>
          {tab === 'login' ? 'Continue with Google' : 'Sign up with Google'}
        </button>

        {/* DIVIDER */}
        <div style={{display:'flex', alignItems:'center', gap:'0.8rem', marginBottom:'1.2rem'}}>
          <div style={{flex:1, height:'1px', background:'var(--border2)'}}/>
          <span style={{fontSize:'0.73rem', color:'var(--text2)', whiteSpace:'nowrap'}}>
            or {tab === 'login' ? 'sign in' : 'sign up'} with email
          </span>
          <div style={{flex:1, height:'1px', background:'var(--border2)'}}/>
        </div>

        {/* MESSAGE */}
        {message && (
          <div style={{background:'rgba(94,234,212,0.1)', border:'1px solid rgba(94,234,212,0.3)', borderRadius:'10px', padding:'0.65rem 1rem', fontSize:'0.82rem', color:'var(--opal-teal)', marginBottom:'1rem'}}>
            {message}
          </div>
        )}

        {/* ERROR */}
        {errors.general && (
          <div className="shake" style={{background:'rgba(239,68,68,0.1)', border:'1px solid rgba(239,68,68,0.3)', borderRadius:'10px', padding:'0.65rem 1rem', fontSize:'0.82rem', color:'var(--red)', marginBottom:'1rem'}}>
            {errors.general}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={e => {
          e.preventDefault();
          tab === 'login' ? handleLogin() : handleSignup();
        }}>
          <div style={{display:'flex', flexDirection:'column', gap:'0.85rem'}}>
            {tab === 'signup' && (
              <div className="name-grid" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.7rem'}}>
                <div>
                  <label style={{display:'block', fontSize:'0.76rem', fontWeight:'600', color:'var(--muted)', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>First Name</label>
                  <input type="text" placeholder="John" value={form.firstName}
                    onChange={e => setForm(p => ({...p, firstName: e.target.value}))}
                    inputMode="text" autoComplete="given-name"
                    style={inp(errors.firstName)}/>
                  {errors.firstName && <div style={{fontSize:'0.73rem', color:'var(--red)', marginTop:'0.3rem'}}>{errors.firstName}</div>}
                </div>
                <div>
                  <label style={{display:'block', fontSize:'0.76rem', fontWeight:'600', color:'var(--muted)', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>Last Name</label>
                  <input type="text" placeholder="Doe" value={form.lastName}
                    onChange={e => setForm(p => ({...p, lastName: e.target.value}))}
                    inputMode="text" autoComplete="family-name"
                    style={inp(errors.lastName)}/>
                  {errors.lastName && <div style={{fontSize:'0.73rem', color:'var(--red)', marginTop:'0.3rem'}}>{errors.lastName}</div>}
                </div>
              </div>
            )}

            {tab === 'signup' && (
              <div>
                <label style={{display:'block', fontSize:'0.76rem', fontWeight:'600', color:'var(--muted)', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>Username</label>
                <input type="text" placeholder="e.g. johndoe" value={form.username}
                  onChange={e => setForm(p => ({...p, username: e.target.value}))}
                  inputMode="text" autoComplete="username"
                  style={inp(errors.username)}/>
                {errors.username && <div style={{fontSize:'0.73rem', color:'var(--red)', marginTop:'0.3rem'}}>{errors.username}</div>}
                <div style={{fontSize:'0.7rem', color:'var(--muted2)', marginTop:'0.3rem', lineHeight:'1.4'}}>4-20 characters. Letters, numbers, underscores, and hyphens. Must start with a letter.</div>
              </div>
            )}

            <div>
              <label style={{display:'block', fontSize:'0.76rem', fontWeight:'600', color:'var(--muted)', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>Email</label>
              <input type="email" placeholder="you@example.com" value={form.email}
                onChange={e => setForm(p => ({...p, email: e.target.value}))}
                inputMode="email" autoComplete="email"
                style={inp(errors.email)}/>
              {errors.email && <div style={{fontSize:'0.73rem', color:'var(--red)', marginTop:'0.3rem'}}>{errors.email}</div>}
            </div>

            {tab === 'signup' && (
              <div>
                <label style={{display:'block', fontSize:'0.76rem', fontWeight:'600', color:'var(--muted)', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>Confirm Email</label>
                <input type="email" placeholder="you@example.com" value={form.confirmEmail}
                  onChange={e => {
                    const val = e.target.value;
                    setForm(p => ({...p, confirmEmail: val}));
                    if (val && val !== form.email) {
                      setErrors(prev => ({...prev, confirmEmail: 'Emails do not correspond'}));
                    } else {
                      setErrors(prev => {
                        const copy = {...prev};
                        delete copy.confirmEmail;
                        return copy;
                      });
                    }
                  }}
                  inputMode="email" autoComplete="email"
                  style={inp(errors.confirmEmail)}/>
                {errors.confirmEmail && <div style={{fontSize:'0.73rem', color:'var(--red)', marginTop:'0.3rem'}}>{errors.confirmEmail}</div>}
              </div>
            )}

            <div>
              <label style={{display:'block', fontSize:'0.76rem', fontWeight:'600', color:'var(--muted)', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>Password</label>
              <input type="password" placeholder={tab === 'login' ? 'Enter your password' : 'At least 12 characters'} value={form.password}
                onChange={e => setForm(p => ({...p, password: e.target.value}))}
                inputMode="text" autoComplete={tab === 'login' ? 'current-password' : 'new-password'}
                style={inp(errors.password)}/>
              {errors.password && <div style={{fontSize:'0.73rem', color:'var(--red)', marginTop:'0.3rem'}}>{errors.password}</div>}
              {tab === 'signup' && (
                <div style={{marginTop:'0.5rem', display:'flex', flexDirection:'column', gap:'0.2rem'}}>
                  {[
                    { check: form.password.length >= 12, label: 'At least 12 characters' },
                    { check: /[A-Z]/.test(form.password), label: 'One uppercase letter (A-Z)' },
                    { check: /[a-z]/.test(form.password), label: 'One lowercase letter (a-z)' },
                    { check: /[0-9]/.test(form.password), label: 'One number (0-9)' },
                    { check: /[^A-Za-z0-9]/.test(form.password), label: 'One special character (e.g. @, #, $, !, %)' },
                  ].map((item, i) => (
                    <div key={i} style={{display:'flex', alignItems:'center', gap:'0.4rem', fontSize:'0.73rem', color: item.check ? 'var(--opal-teal)' : 'var(--muted)'}}>
                      <span style={{fontSize:'0.65rem'}}>{item.check ? '✓' : '✗'}</span>
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button type="submit" disabled={loading} style={{
              width:'100%', padding:'0.88rem', borderRadius:'12px', border:'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              background:'var(--accent)',
              color:'#fff', fontFamily:'inherit', fontSize:'0.92rem', fontWeight:'700',
              marginTop:'0.2rem', opacity: loading ? 0.7 : 1,
              boxShadow: loading ? 'none' : '0 8px 22px rgba(99,102,241,0.35)',
              transition:'all 0.2s',
              display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem',
            }}>
              {loading ? (
                <><span style={{display:'inline-block', width:'18px', height:'18px', borderRadius:'50%', border:'2px solid rgba(255,255,255,0.3)', borderTop:'2px solid #fff', animation:'spin 0.6s linear infinite'}}/> {tab === 'login' ? 'Signing in...' : 'Creating account...'}</>
              ) : tab === 'login' ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
        </form>

        <div style={{fontSize:'0.77rem', color:'var(--muted)', textAlign:'center', marginTop:'1rem'}}>
          {tab === 'login' ? (
            <>Don&apos;t have an account?{' '}
              <span onClick={() => switchTab('signup')} style={{color:'var(--accent)', cursor:'pointer', fontWeight:'600'}}>Create one free</span>
            </>
          ) : (
            <>Already have an account?{' '}
              <span onClick={() => switchTab('login')} style={{color:'var(--accent)', cursor:'pointer', fontWeight:'600'}}>Sign in</span>
            </>
          )}
          </div>
        </div>
      </div>
    </main>
  );
}
