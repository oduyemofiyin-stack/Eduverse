import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../context/AppContext';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db, googleProvider } from '../lib/firebase';

export default function Login() {
  const { login } = useApp();
  const router = useRouter();
  const [tab, setTab] = useState('login');
  const [form, setForm] = useState({ firstName:'', lastName:'', email:'', password:'' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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
    if (form.password.length < 6) errs.password = 'Password must be at least 6 characters';
    return errs;
  }

  async function handleLogin() {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, form.email, form.password);
      const user = result.user;
      // Get extra info from Firestore
      const docSnap = await getDoc(doc(db, 'users', user.uid));
      const userData = docSnap.exists() ? docSnap.data() : {};
      login({
        uid: user.uid,
        firstName: userData.firstName || user.displayName?.split(' ')[0] || 'User',
        lastName: userData.lastName || user.displayName?.split(' ').slice(1).join(' ') || '',
        email: user.email,
        picture: user.photoURL || '',
        provider: 'email',
      });
      router.push('/');
    } catch(e) {
      setErrors({ general: e.code === 'auth/wrong-password' || e.code === 'auth/user-not-found'
        ? 'Incorrect email or password'
        : 'Sign in failed. Please try again.' });
    }
    setLoading(false);
  }

  async function handleSignup() {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = result.user;
      const fullName = `${form.firstName} ${form.lastName}`;
      await updateProfile(user, { displayName: fullName });
      // Save to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        provider: 'email',
        createdAt: new Date().toISOString(),
      });
      login({
        uid: user.uid,
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        picture: '',
        provider: 'email',
      });
      router.push('/');
    } catch(e) {
      setErrors({ general: e.code === 'auth/email-already-in-use'
        ? 'An account with this email already exists'
        : 'Sign up failed. Please try again.' });
    }
    setLoading(false);
  }

  async function handleGoogle() {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const firstName = user.displayName?.split(' ')[0] || 'User';
      const lastName = user.displayName?.split(' ').slice(1).join(' ') || '';
      // Save to Firestore if new user
      const docSnap = await getDoc(doc(db, 'users', user.uid));
      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          firstName,
          lastName,
          email: user.email,
          picture: user.photoURL || '',
          provider: 'Google',
          createdAt: new Date().toISOString(),
        });
      }
      login({
        uid: user.uid,
        firstName,
        lastName,
        email: user.email,
        picture: user.photoURL || '',
        provider: 'Google',
      });
      router.push('/');
    } catch(e) {
      setErrors({ general: 'Google sign-in failed. Please try again.' });
    }
    setLoading(false);
  }

  const inp = (hasErr) => ({
    width:'100%', background:'var(--surface2)',
    border:`1px solid ${hasErr ? 'rgba(255,107,157,0.6)' : 'var(--border2)'}`,
    borderRadius:'11px', padding:'0.78rem 1rem',
    fontSize:'0.9rem', color:'var(--text)', outline:'none', fontFamily:'inherit',
  });

  return (
    <div style={{
      minHeight:'100vh', background:'var(--bg)',
      display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem',
    }}>
      <div style={{
        background:'var(--surface)', border:'1px solid var(--border2)',
        borderRadius:'24px', padding:'2rem', width:'100%', maxWidth:'420px',
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
        <button onClick={handleGoogle} disabled={loading} style={{
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
            {tab === 'login' ? 'or sign in with email' : 'or sign up with email'}
          </span>
          <div style={{flex:1, height:'1px', background:'var(--border2)'}}/>
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

          <button
            onClick={tab === 'login' ? handleLogin : handleSignup}
            disabled={loading}
            style={{
              width:'100%', padding:'0.88rem', borderRadius:'12px',
              border:'none', cursor: loading ? 'not-allowed' : 'pointer',
              background:'linear-gradient(135deg,#4488ff,#3366dd)',
              color:'#fff', fontFamily:'inherit', fontSize:'0.92rem',
              fontWeight:'700', marginTop:'0.2rem', opacity: loading ? 0.7 : 1,
              boxShadow:'0 8px 22px rgba(68,136,255,0.28)',
            }}>
            {loading ? 'Please wait...' : tab === 'login' ? 'Sign In' : 'Create Free Account'}
          </button>
        </div>

        <div style={{fontSize:'0.77rem', color:'var(--muted)', textAlign:'center', marginTop:'1rem'}}>
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