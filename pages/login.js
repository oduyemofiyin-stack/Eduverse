import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../context/AppContext';
import emailjs from '@emailjs/browser';

export default function Login() {
  const { login, users, addUser } = useApp();
  const router = useRouter();
  const [tab, setTab] = useState('login');
  const [form, setForm] = useState({ firstName:'', lastName:'', email:'', password:'' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  function switchTab(t) {
    setTab(t);
    setErrors({});
    setForm({ firstName:'', lastName:'', email:'', password:'' });
  }

  function validate() {
    const errs = {};
    if (tab === 'signup') {
      if (!form.firstName.trim()) errs.firstName = 'First name is required';
      if (!form.lastName.trim()) errs.lastName = 'Last name is required';
    }
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Please enter a valid email';
    if (!form.password || form.password.length < 6) errs.password = 'Password must be at least 6 characters';
    return errs;
  }

  function handleLogin() {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setErrors({});
    const user = users.find(u =>
      u.email.toLowerCase() === form.email.toLowerCase() &&
      u.password === form.password
    );
    if (!user) {
      setErrors({ general: 'Incorrect email or password. Please try again.' });
      setLoading(false);
      return;
    }
    login(user);
    setLoading(false);
    router.push('/');
  }

  function handleSignup() {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setErrors({});
    if (users.find(u => u.email === form.email)) {
      setErrors({ general: 'An account with this email already exists.' });
      setLoading(false);
      return;
    }
    const newUser = {
      id: Date.now().toString(),
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email,
      password: form.password,
      picture: '',
      provider: 'email',
      createdAt: new Date().toISOString(),
    };
    addUser(newUser);
    login(newUser);
    setLoading(false);
    router.push('/');
  }

  function handleGoogle() {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback');
    const scope = encodeURIComponent('openid email profile');
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;
    window.location.href = url;
  }

  async function handleForgotPassword() {
    if (!resetEmail || !/\S+@\S+\.\S+/.test(resetEmail)) {
      setErrors({ reset: 'Please enter a valid email address' });
      return;
    }
    const user = users.find(u => u.email === resetEmail);
    if (!user) {
      setErrors({ reset: 'No account found with this email' });
      return;
    }
    setResetLoading(true);
    setErrors({});
    try {
      const tempPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8).toUpperCase();
      // Update password in users
      addUser({ ...user, password: tempPassword });
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          to_name: `${user.firstName} ${user.lastName}`,
          to_email: resetEmail,
          temp_password: tempPassword,
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }
      );
      setResetSent(true);
    } catch(e) {
      setErrors({ reset: 'Could not send reset email. Please try again.' });
    }
    setResetLoading(false);
  }

  const inp = (hasErr) => ({
    width:'100%', background:'var(--surface2)',
    border:`1px solid ${hasErr ? '#ff6b9d' : 'var(--border2)'}`,
    borderRadius:'11px', padding:'0.78rem 1rem',
    fontSize:'0.9rem', color:'var(--text)', outline:'none',
    fontFamily:'inherit', transition:'border 0.2s',
  });

  return (
      <div style={{
        minHeight:'100vh', background:'var(--bg)',
        display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem',
        backgroundImage:'radial-gradient(ellipse 70% 50% at 15% 0%, rgba(68,136,255,0.1) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 100%, rgba(0,212,170,0.08) 0%, transparent 60%)',
      }}>
        <div className="login-card" style={{
          background:'var(--surface)', border:'1px solid var(--border2)',
          borderRadius:'24px', padding:'2rem', width:'100%', maxWidth:'420px',
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
          <span style={{fontFamily:'Georgia, serif', fontSize:'1.4rem', fontWeight:'700', background:'linear-gradient(135deg,#f0c040,#4488ff 55%,#00d4aa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>Eduverse</span>
        </div>

        {/* TABS */}
        <div style={{display:'flex', background:'var(--surface2)', borderRadius:'12px', padding:'4px', marginBottom:'1.6rem'}}>
          {['login','signup'].map(t => (
            <button key={t} onClick={() => switchTab(t)} style={{
              flex:1, padding:'0.5rem', borderRadius:'9px', border:'none',
              background: tab === t ? 'var(--surface3)' : 'transparent',
              color: tab === t ? 'var(--text)' : 'var(--muted)',
              fontFamily:'inherit', fontSize:'0.85rem', fontWeight:'600', cursor:'pointer',
            }}>
              {t === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          ))}
        </div>

        {/* TITLE */}
        <div style={{fontFamily:'Georgia, serif', fontSize:'1.3rem', fontWeight:'700', textAlign:'center', marginBottom:'0.3rem', color:'var(--text)'}}>
          {tab === 'login' ? 'Welcome back' : 'Create your account'}
        </div>
        <div style={{fontSize:'0.82rem', color:'var(--muted)', textAlign:'center', marginBottom:'1.4rem'}}>
          {tab === 'login' ? 'Sign in to continue your learning journey' : 'Join 50,000+ learners. Completely free.'}
        </div>

        {/* GOOGLE BUTTON */}
        <button onClick={handleGoogle} style={{
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
          <span style={{fontSize:'0.73rem', color:'var(--muted2)', whiteSpace:'nowrap'}}>
            or {tab === 'login' ? 'sign in' : 'sign up'} with email
          </span>
          <div style={{flex:1, height:'1px', background:'var(--border2)'}}/>
        </div>

        {/* ERROR */}
        {errors.general && (
          <div className="shake" style={{background:'rgba(255,107,157,0.1)', border:'1px solid rgba(255,107,157,0.3)', borderRadius:'10px', padding:'0.65rem 1rem', fontSize:'0.82rem', color:'#ff6b9d', marginBottom:'1rem'}}>
            {errors.general}
          </div>
        )}

        {/* FORM */}
        <div style={{display:'flex', flexDirection:'column', gap:'0.85rem'}}>
          {tab === 'signup' && (
            <div className="name-grid" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.7rem'}}>
              <div>
                <label style={{display:'block', fontSize:'0.76rem', fontWeight:'600', color:'var(--muted)', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>First Name</label>
                <input type="text" placeholder="John" value={form.firstName}
                  onChange={e => setForm(p => ({...p, firstName: e.target.value}))}
                  style={inp(errors.firstName)}/>
                {errors.firstName && <div style={{fontSize:'0.73rem', color:'#ff6b9d', marginTop:'0.3rem'}}>{errors.firstName}</div>}
              </div>
              <div>
                <label style={{display:'block', fontSize:'0.76rem', fontWeight:'600', color:'var(--muted)', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>Last Name</label>
                <input type="text" placeholder="Doe" value={form.lastName}
                  onChange={e => setForm(p => ({...p, lastName: e.target.value}))}
                  style={inp(errors.lastName)}/>
                {errors.lastName && <div style={{fontSize:'0.73rem', color:'#ff6b9d', marginTop:'0.3rem'}}>{errors.lastName}</div>}
              </div>
            </div>
          )}

          <div>
            <label style={{display:'block', fontSize:'0.76rem', fontWeight:'600', color:'var(--muted)', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>Email</label>
            <input type="email" placeholder="you@example.com" value={form.email}
              onChange={e => setForm(p => ({...p, email: e.target.value}))}
              onKeyDown={e => e.key === 'Enter' && tab === 'login' && handleLogin()}
              style={inp(errors.email)}/>
            {errors.email && <div style={{fontSize:'0.73rem', color:'#ff6b9d', marginTop:'0.3rem'}}>{errors.email}</div>}
          </div>

          <div>
            <label style={{display:'block', fontSize:'0.76rem', fontWeight:'600', color:'var(--muted)', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>Password</label>
            <input type="password" placeholder="At least 6 characters" value={form.password}
              onChange={e => setForm(p => ({...p, password: e.target.value}))}
              onKeyDown={e => e.key === 'Enter' && (tab === 'login' ? handleLogin() : handleSignup())}
              style={inp(errors.password)}/>
            {errors.password && <div style={{fontSize:'0.73rem', color:'#ff6b9d', marginTop:'0.3rem'}}>{errors.password}</div>}
          </div>

          {/* FORGOT PASSWORD LINK */}
          {tab === 'login' && !showReset && (
            <div style={{textAlign:'right', marginTop:'-0.3rem'}}>
              <span onClick={() => setShowReset(true)} style={{fontSize:'0.78rem', color:'#4488ff', cursor:'pointer', fontWeight:'500'}}>
                Forgot password?
              </span>
            </div>
          )}

          {/* FORGOT PASSWORD PANEL */}
          {showReset && (
            <div style={{background:'var(--surface2)', border:'1px solid var(--border2)', borderRadius:'12px', padding:'1.2rem'}}>
              {resetSent ? (
                <div style={{textAlign:'center'}}>
                  <p style={{fontSize:'0.85rem', color:'var(--text)', fontWeight:'600', marginBottom:'0.3rem'}}>Reset email sent!</p>
                  <p style={{fontSize:'0.8rem', color:'var(--muted)', marginBottom:'0.8rem'}}>Check your inbox for your temporary password.</p>
                  <span onClick={() => { setShowReset(false); setResetSent(false); setResetEmail(''); }} style={{fontSize:'0.78rem', color:'#4488ff', cursor:'pointer'}}>Back to sign in</span>
                </div>
              ) : (
                <>
                  <p style={{fontSize:'0.82rem', color:'var(--text)', fontWeight:'600', marginBottom:'0.5rem'}}>Reset your password</p>
                  <p style={{fontSize:'0.78rem', color:'var(--muted)', marginBottom:'0.8rem'}}>Enter your email and we will send you a temporary password.</p>
                  <input type="email" placeholder="your@email.com" value={resetEmail}
                    onChange={e => setResetEmail(e.target.value)}
                    style={{width:'100%', background:'var(--surface)', border:`1px solid ${errors.reset ? '#ff6b9d' : 'var(--border2)'}`, borderRadius:'9px', padding:'0.65rem 0.9rem', fontSize:'0.88rem', color:'var(--text)', outline:'none', fontFamily:'inherit', marginBottom:'0.6rem'}}/>
                  {errors.reset && <div style={{fontSize:'0.75rem', color:'#ff6b9d', marginBottom:'0.6rem'}}>{errors.reset}</div>}
                  <div style={{display:'flex', gap:'0.6rem'}}>
                    <button onClick={handleForgotPassword} disabled={resetLoading} style={{flex:1, padding:'0.65rem', borderRadius:'9px', border:'none', background:'linear-gradient(135deg,#4488ff,#3366dd)', color:'#fff', fontFamily:'inherit', fontSize:'0.85rem', fontWeight:'600', cursor:'pointer', opacity: resetLoading ? 0.7 : 1}}>
                      {resetLoading ? 'Sending...' : 'Send Reset Email'}
                    </button>
                    <button onClick={() => { setShowReset(false); setErrors({}); setResetEmail(''); }} style={{padding:'0.65rem 1rem', borderRadius:'9px', border:'1px solid var(--border2)', background:'transparent', color:'var(--muted)', fontFamily:'inherit', fontSize:'0.85rem', cursor:'pointer'}}>
                      Cancel
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          <button onClick={tab === 'login' ? handleLogin : handleSignup} disabled={loading} style={{
            width:'100%', padding:'0.88rem', borderRadius:'12px', border:'none',
            cursor: loading ? 'not-allowed' : 'pointer',
            background:'linear-gradient(135deg,#4488ff,#3366dd)',
            color:'#fff', fontFamily:'inherit', fontSize:'0.92rem', fontWeight:'700',
            marginTop:'0.2rem', opacity: loading ? 0.7 : 1,
            boxShadow: loading ? 'none' : '0 8px 22px rgba(68,136,255,0.35)',
            transition:'all 0.2s',
            display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem',
          }}>
            {loading ? (
              <><span style={{display:'inline-block', width:'18px', height:'18px', borderRadius:'50%', border:'2px solid rgba(255,255,255,0.3)', borderTop:'2px solid #fff', animation:'spin 0.6s linear infinite'}}/> Signing in...</>
            ) : tab === 'login' ? 'Sign In' : 'Create Free Account'}
          </button>
        </div>

        <div style={{fontSize:'0.77rem', color:'var(--muted)', textAlign:'center', marginTop:'1rem'}}>
          {tab === 'login' ? (
            <>Don&apos;t have an account?{' '}
              <span onClick={() => switchTab('signup')} style={{color:'#4488ff', cursor:'pointer', fontWeight:'600'}}>Create one free</span>
            </>
          ) : (
            <>Already have an account?{' '}
              <span onClick={() => switchTab('login')} style={{color:'#4488ff', cursor:'pointer', fontWeight:'600'}}>Sign in</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
  