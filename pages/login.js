import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../context/AppContext';

const GOOGLE_CLIENT_ID = '641651558011-3gfeoe353bs9qj41npr3s8jut94l2rfr.apps.googleusercontent.com';

export default function Login() {
  const { currentUser, login } = useApp();
  const router = useRouter();
  const [tab, setTab] = useState('login');
  const [form, setForm] = useState({ firstName:'', lastName:'', email:'', password:'' });
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (currentUser) router.push('/');
  }, [currentUser]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => initGoogle();
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  function initGoogle() {
    if (typeof window === 'undefined' || !window.google) return;
    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleCredential,
    });
    renderGoogleButtons();
  }

  function renderGoogleButtons() {
    ['googleSignInBtn','googleSignUpBtn'].forEach(id => {
      const el = document.getElementById(id);
      if (el && window.google) {
        window.google.accounts.id.renderButton(el, {
          theme:'filled_black', size:'large', width:340,
          text: id === 'googleSignInBtn' ? 'signin_with' : 'signup_with',
          shape:'rectangular',
        });
      }
    });
  }

  function handleGoogleCredential(response) {
    try {
      const parts = response.credential.split('.');
      const payload = JSON.parse(atob(parts[1].replace(/-/g,'+').replace(/_/g,'/')));
      login({
        firstName: payload.given_name || payload.name.split(' ')[0] || 'User',
        lastName: payload.family_name || payload.name.split(' ').slice(1).join(' ') || '',
        email: payload.email,
        picture: payload.picture || '',
        provider: 'Google',
      });
      router.push('/');
    } catch(e) {
      setErrors({ general: 'Google sign-in failed. Please try email login.' });
    }
  }

  function switchTab(t) {
    setTab(t);
    setErrors({});
    setForm({ firstName:'', lastName:'', email:'', password:'' });
    setTimeout(renderGoogleButtons, 100);
  }

  function validate() {
    const errs = {};
    if (tab === 'signup') {
      if (!form.firstName.trim()) errs.firstName = 'First name is required';
      if (!form.lastName.trim()) errs.lastName = 'Last name is required';
    }
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Please enter a valid email';
    if (form.password.length < 6) errs.password = 'Password must be at least 6 characters';
    return errs;
  }

  function handleLogin() {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    const user = users.find(u => u.email === form.email && u.password === form.password);
    if (!user) { setErrors({ general: 'Incorrect email or password' }); return; }
    login(user);
    router.push('/');
  }

  function handleSignup() {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    if (users.find(u => u.email === form.email)) {
      setErrors({ email: 'An account with this email already exists' }); return;
    }
    const newUser = {
      firstName: form.firstName, lastName: form.lastName,
      email: form.email, password: form.password,
      provider: 'email', picture: '',
    };
    setUsers(prev => [...prev, newUser]);
    login(newUser);
    router.push('/');
  }

  const inp = (hasErr) => ({
    width:'100%', background:'#161b26',
    border:`1px solid ${hasErr ? 'rgba(255,107,157,0.6)' : 'rgba(255,255,255,0.13)'}`,
    borderRadius:'11px', padding:'0.78rem 1rem',
    fontSize:'0.9rem', color:'#eef0f8', outline:'none', fontFamily:'inherit',
  });

  return (
    <div style={{
      minHeight:'100vh',
      background:'#06080f',
      display:'flex', alignItems:'center', justifyContent:'center',
      padding:'1rem',
      backgroundImage:'radial-gradient(ellipse 70% 50% at 15% 0%, rgba(68,136,255,0.1) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 100%, rgba(0,212,170,0.08) 0%, transparent 60%)',
    }}>
      <div style={{
        background:'#0d1117',
        border:'1px solid rgba(255,255,255,0.13)',
        borderRadius:'24px', padding:'2rem',
        width:'100%', maxWidth:'420px',
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
        <div style={{display:'flex', background:'#161b26', borderRadius:'12px', padding:'4px', marginBottom:'1.6rem'}}>
          {['login','signup'].map(t => (
            <button key={t} onClick={() => switchTab(t)} style={{
              flex:1, padding:'0.5rem', borderRadius:'9px', border:'none',
              background: tab === t ? '#1e2535' : 'transparent',
              color: tab === t ? '#eef0f8' : '#7a80a0',
              fontFamily:'inherit', fontSize:'0.85rem', fontWeight:'600', cursor:'pointer',
            }}>
              {t === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          ))}
        </div>

        {/* TITLE */}
        <div style={{fontFamily:'Georgia, serif', fontSize:'1.3rem', fontWeight:'700', textAlign:'center', marginBottom:'0.3rem'}}>
          {tab === 'login' ? 'Welcome back' : 'Create your account'}
        </div>
        <div style={{fontSize:'0.82rem', color:'#7a80a0', textAlign:'center', marginBottom:'1.4rem'}}>
          {tab === 'login' ? 'Sign in to continue your learning journey' : 'Join 50,000+ learners. Completely free.'}
        </div>

        {/* GOOGLE BUTTON */}
        <div style={{display:'flex', justifyContent:'center', marginBottom:'1.2rem', minHeight:'44px'}}>
          <div id={tab === 'login' ? 'googleSignInBtn' : 'googleSignUpBtn'}></div>
        </div>

        {/* DIVIDER */}
        <div style={{display:'flex', alignItems:'center', gap:'0.8rem', marginBottom:'1.2rem'}}>
          <div style={{flex:1, height:'1px', background:'rgba(255,255,255,0.13)'}}/>
          <span style={{fontSize:'0.73rem', color:'#3a4060', whiteSpace:'nowrap'}}>
            {tab === 'login' ? 'or sign in with email' : 'or sign up with email'}
          </span>
          <div style={{flex:1, height:'1px', background:'rgba(255,255,255,0.13)'}}/>
        </div>

        {/* GENERAL ERROR */}
        {errors.general && (
          <div style={{background:'rgba(255,107,157,0.1)', border:'1px solid rgba(255,107,157,0.3)', borderRadius:'10px', padding:'0.65rem 1rem', fontSize:'0.82rem', color:'#ff6b9d', marginBottom:'1rem'}}>
            {errors.general}
          </div>
        )}

        {/* FORM */}
        <div style={{display:'flex', flexDirection:'column', gap:'0.85rem'}}>
          {tab === 'signup' && (
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.7rem'}}>
              <div>
                <label style={{display:'block', fontSize:'0.76rem', fontWeight:'600', color:'#7a80a0', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>First Name</label>
                <input type="text" placeholder="John" value={form.firstName}
                  onChange={e => setForm(p => ({...p, firstName: e.target.value}))}
                  style={inp(errors.firstName)}/>
                {errors.firstName && <div style={{fontSize:'0.73rem', color:'#ff6b9d', marginTop:'0.3rem'}}>{errors.firstName}</div>}
              </div>
              <div>
                <label style={{display:'block', fontSize:'0.76rem', fontWeight:'600', color:'#7a80a0', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>Last Name</label>
                <input type="text" placeholder="Doe" value={form.lastName}
                  onChange={e => setForm(p => ({...p, lastName: e.target.value}))}
                  style={inp(errors.lastName)}/>
                {errors.lastName && <div style={{fontSize:'0.73rem', color:'#ff6b9d', marginTop:'0.3rem'}}>{errors.lastName}</div>}
              </div>
            </div>
          )}

          <div>
            <label style={{display:'block', fontSize:'0.76rem', fontWeight:'600', color:'#7a80a0', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>Email</label>
            <input type="email" placeholder="you@example.com" value={form.email}
              onChange={e => setForm(p => ({...p, email: e.target.value}))}
              style={inp(errors.email)}/>
            {errors.email && <div style={{fontSize:'0.73rem', color:'#ff6b9d', marginTop:'0.3rem'}}>{errors.email}</div>}
          </div>

          <div>
            <label style={{display:'block', fontSize:'0.76rem', fontWeight:'600', color:'#7a80a0', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>Password</label>
            <input type="password" placeholder="At least 6 characters" value={form.password}
              onChange={e => setForm(p => ({...p, password: e.target.value}))}
              onKeyDown={e => e.key === 'Enter' && (tab === 'login' ? handleLogin() : handleSignup())}
              style={inp(errors.password)}/>
            {errors.password && <div style={{fontSize:'0.73rem', color:'#ff6b9d', marginTop:'0.3rem'}}>{errors.password}</div>}
          </div>

          <button
            onClick={tab === 'login' ? handleLogin : handleSignup}
            style={{
              width:'100%', padding:'0.85rem', borderRadius:'12px',
              border:'none', cursor:'pointer',
              background:'linear-gradient(135deg,#4488ff,#3366dd)',
              color:'#fff', fontFamily:'inherit', fontSize:'0.92rem',
              fontWeight:'700', marginTop:'0.2rem',
              boxShadow:'0 8px 22px rgba(68,136,255,0.28)',
            }}>
            {tab === 'login' ? 'Sign In' : 'Create Free Account'}
          </button>
        </div>

        <div style={{fontSize:'0.77rem', color:'#7a80a0', textAlign:'center', marginTop:'1rem'}}>
          {tab === 'login' ? (
            <>Don&apos;t have an account?{' '}
              <span onClick={() => switchTab('signup')} style={{color:'#4488ff', cursor:'pointer'}}>Create one free</span>
            </>
          ) : (
            <>Already have an account?{' '}
              <span onClick={() => switchTab('login')} style={{color:'#4488ff', cursor:'pointer'}}>Sign in</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}