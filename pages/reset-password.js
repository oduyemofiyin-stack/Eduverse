import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function ResetPassword() {
  const router = useRouter();
  const { token } = router.query;
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!token && router.isReady) {
      setErrors({ general: 'Missing reset token. Please request a new password reset link.' });
    }
  }, [token, router.isReady]);

  async function handleReset(e) {
    e.preventDefault();
    setErrors({});
    setMessage('');

    if (!password) {
      setErrors({ password: 'Password is required' });
      return;
    }
    if (password.length < 12) {
      setErrors({ password: 'Password must be at least 12 characters' });
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setErrors({ password: 'Must contain an uppercase letter' });
      return;
    }
    if (!/[a-z]/.test(password)) {
      setErrors({ password: 'Must contain a lowercase letter' });
      return;
    }
    if (!/[0-9]/.test(password)) {
      setErrors({ password: 'Must contain a number' });
      return;
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      setErrors({ password: 'Must contain a special character' });
      return;
    }
    if (password !== confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrors({ general: data.error || 'Reset failed.' });
        setLoading(false);
        return;
      }
      setSuccess(true);
      setMessage(data.message);
      setLoading(false);
    } catch (e) {
      console.error('Reset error:', e);
      setErrors({ general: 'Network error. Please try again.' });
      setLoading(false);
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
        <title>Reset Password | Eduverse</title>
      </Head>
      <div suppressHydrationWarning style={{
        minHeight:'100vh', background:'var(--bg)',
        display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem',
      }}>
        <div style={{
          background:'var(--surface)', border:'1px solid var(--border2)',
          borderRadius:'24px', padding:'2rem', width:'100%', maxWidth:'420px',
          boxSizing:'border-box',
          boxShadow:'0 20px 60px rgba(0,0,0,0.3)',
        }}>
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
            <span style={{fontSize:'1.4rem', fontWeight:'700', background:'linear-gradient(135deg,#f0c040,#4488ff 55%,#00d4aa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>Eduverse</span>
          </div>

          <div style={{fontSize:'1.3rem', fontWeight:'700', textAlign:'center', marginBottom:'0.3rem', color:'var(--text)'}}>
            {success ? 'Password Reset' : 'Set New Password'}
          </div>
          <div style={{fontSize:'0.82rem', color:'var(--muted)', textAlign:'center', marginBottom:'1.4rem'}}>
            {success ? 'Your password has been updated.' : 'Enter your new password below.'}
          </div>

          {message && (
            <div style={{background:'rgba(94,234,212,0.1)', border:'1px solid rgba(94,234,212,0.3)', borderRadius:'10px', padding:'0.65rem 1rem', fontSize:'0.82rem', color:'var(--opal-teal)', marginBottom:'1rem'}}>
              {message}
            </div>
          )}

          {errors.general && (
            <div className="shake" style={{background:'rgba(239,68,68,0.1)', border:'1px solid rgba(239,68,68,0.3)', borderRadius:'10px', padding:'0.65rem 1rem', fontSize:'0.82rem', color:'var(--red)', marginBottom:'1rem'}}>
              {errors.general}
            </div>
          )}

          {success ? (
            <button type="button" onClick={() => router.push('/login')} style={{
              width:'100%', padding:'0.88rem', borderRadius:'12px', border:'none',
              cursor:'pointer', background:'var(--accent)',
              color:'#fff', fontFamily:'inherit', fontSize:'0.92rem', fontWeight:'700',
              boxShadow:'0 8px 22px rgba(99,102,241,0.35)',
            }}>
              Sign In
            </button>
          ) : (
            <form onSubmit={handleReset}>
              <div style={{display:'flex', flexDirection:'column', gap:'0.85rem'}}>
                <div>
                  <label style={{display:'block', fontSize:'0.76rem', fontWeight:'600', color:'var(--muted)', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>New Password</label>
                  <input type="password" placeholder="At least 12 characters" value={password}
                    onChange={e => setPassword(e.target.value)}
                    inputMode="text" autoComplete="new-password"
                    style={inp(errors.password)}/>
                  {errors.password && <div style={{fontSize:'0.73rem', color:'var(--red)', marginTop:'0.3rem'}}>{errors.password}</div>}
                  <div style={{marginTop:'0.5rem', display:'flex', flexDirection:'column', gap:'0.2rem'}}>
                    {[
                      { check: password.length >= 12, label: 'At least 12 characters' },
                      { check: /[A-Z]/.test(password), label: 'One uppercase letter (A-Z)' },
                      { check: /[a-z]/.test(password), label: 'One lowercase letter (a-z)' },
                      { check: /[0-9]/.test(password), label: 'One number (0-9)' },
                      { check: /[^A-Za-z0-9]/.test(password), label: 'One special character' },
                    ].map((item, i) => (
                      <div key={i} style={{display:'flex', alignItems:'center', gap:'0.4rem', fontSize:'0.73rem', color: item.check ? 'var(--opal-teal)' : 'var(--muted)'}}>
                        <span style={{fontSize:'0.65rem'}}>{item.check ? '✓' : '✗'}</span>
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{display:'block', fontSize:'0.76rem', fontWeight:'600', color:'var(--muted)', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>Confirm Password</label>
                  <input type="password" placeholder="Repeat your new password" value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    inputMode="text" autoComplete="new-password"
                    style={inp(errors.confirmPassword)}/>
                  {errors.confirmPassword && <div style={{fontSize:'0.73rem', color:'var(--red)', marginTop:'0.3rem'}}>{errors.confirmPassword}</div>}
                </div>

                <button type="submit" disabled={loading} style={{
                  width:'100%', padding:'0.88rem', borderRadius:'12px', border:'none',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  background:'var(--accent)',
                  color:'#fff', fontFamily:'inherit', fontSize:'0.92rem', fontWeight:'700',
                  marginTop:'0.2rem', opacity: loading ? 0.7 : 1,
                  boxShadow: loading ? 'none' : '0 8px 22px rgba(99,102,241,0.35)',
                  display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem',
                }}>
                  {loading ? (
                    <><span style={{display:'inline-block', width:'18px', height:'18px', borderRadius:'50%', border:'2px solid rgba(255,255,255,0.3)', borderTop:'2px solid #fff', animation:'spin 0.6s linear infinite'}}/> Resetting...</>
                  ) : 'Reset Password'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
