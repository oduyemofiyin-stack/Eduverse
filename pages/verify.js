import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function Verify() {
  const { certificates } = useApp();
  const [searchCode, setSearchCode] = useState('');
  const [result, setResult] = useState(null);

  function handleVerify() {
    const code = searchCode.trim().toUpperCase();
    if (!code) { setResult(null); return; }
    const cert = certificates.find(c => c.code === code);
    setResult(cert || 'not_found');
  }

  return (
    <div className="page-container" style={{maxWidth:'640px', margin:'0 auto', padding:'3rem 1.2rem 4rem'}}>
      <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.5rem,5vw,2rem)', fontWeight:'700', textAlign:'center', marginBottom:'0.4rem'}}>
        Verify a Certificate
      </h1>
      <p style={{textAlign:'center', color:'var(--muted)', fontSize:'0.9rem', marginBottom:'2rem'}}>
        Enter the certificate code to verify its authenticity
      </p>

      <div style={{
        background:'var(--surface)', border:'1px solid var(--border)',
        borderRadius:'16px', padding:'1.5rem',
      }}>
        <div style={{display:'flex', gap:'0.6rem', marginBottom:'1rem'}}>
          <input
            type="text"
            placeholder="e.g. EDU-5-A1B2C3D4"
            value={searchCode}
            onChange={e => setSearchCode(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleVerify()}
            style={{
              flex:1, padding:'0.8rem 1rem', borderRadius:'10px', border:'1px solid var(--border2)',
              background:'var(--input-bg)', color:'var(--text)', fontSize:'0.88rem',
              fontFamily:'monospace', outline:'none', letterSpacing:'0.05em',
            }}
          />
          <button onClick={handleVerify} style={{
            padding:'0.8rem 1.5rem', borderRadius:'10px', border:'none',
            background:'linear-gradient(135deg,var(--blue),#3366dd)', color:'#fff',
            fontWeight:'600', fontSize:'0.85rem', cursor:'pointer', whiteSpace:'nowrap',
          }}>Verify</button>
        </div>

        {result === 'not_found' && (
          <div style={{
            background:'rgba(255,107,157,0.1)', border:'1px solid rgba(255,107,157,0.3)',
            borderRadius:'10px', padding:'1rem', textAlign:'center',
          }}>
            <div style={{fontSize:'2rem', marginBottom:'0.3rem'}}>❌</div>
            <div style={{fontWeight:'600', color:'var(--pink)'}}>Certificate not found</div>
            <div style={{fontSize:'0.82rem', color:'var(--muted)', marginTop:'0.3rem'}}>
              The code you entered does not match any certificate in our records. Please check and try again.
            </div>
          </div>
        )}

        {result && result !== 'not_found' && (
          <div style={{
            background:'rgba(0,212,170,0.08)', border:'1px solid rgba(0,212,170,0.25)',
            borderRadius:'12px', padding:'1.3rem', textAlign:'center',
          }}>
            <div style={{fontSize:'2.5rem', marginBottom:'0.3rem'}}>✅</div>
            <div style={{fontWeight:'700', color:'var(--teal)', fontSize:'1.1rem', marginBottom:'0.3rem'}}>Certificate Verified</div>
            <div style={{fontSize:'0.82rem', color:'var(--muted)', marginBottom:'1rem'}}>This certificate is authentic and issued by Eduverse.</div>
            <div style={{
              background:'var(--surface2)', borderRadius:'10px', padding:'0.8rem 1rem',
              display:'inline-block', textAlign:'left',
            }}>
              <div style={{fontSize:'0.78rem', color:'var(--muted)', marginBottom:'0.2rem'}}>Recipient</div>
              <div style={{fontWeight:'600', marginBottom:'0.5rem'}}>{result.userName}</div>
              <div style={{fontSize:'0.78rem', color:'var(--muted)', marginBottom:'0.2rem'}}>Course</div>
              <div style={{fontWeight:'600', marginBottom:'0.5rem'}}>{result.courseName}</div>
              <div style={{fontSize:'0.78rem', color:'var(--muted)', marginBottom:'0.2rem'}}>Completed</div>
              <div style={{fontWeight:'600', marginBottom:'0.5rem'}}>{new Date(result.completionDate).toLocaleDateString(undefined, { year:'numeric', month:'long', day:'numeric' })}</div>
              <div style={{fontSize:'0.78rem', color:'var(--muted)', marginBottom:'0.2rem'}}>Code</div>
              <div style={{fontFamily:'monospace', color:'var(--gold)', fontWeight:'600', letterSpacing:'0.1em'}}>{result.code}</div>
            </div>
          </div>
        )}
      </div>

      {/* SELF CERTS */}
      <div style={{marginTop:'2rem'}}>
        <h3 style={{fontSize:'0.82rem', fontWeight:'700', marginBottom:'0.8rem'}}>Your Certificates</h3>
        {certificates.length === 0 ? (
          <div style={{textAlign:'center', padding:'2rem', color:'var(--muted)', background:'var(--surface)', borderRadius:'12px', border:'1px solid var(--border)'}}>
            Complete a course to earn a verified certificate.
          </div>
        ) : (
          <div style={{display:'flex', flexDirection:'column', gap:'0.6rem'}}>
            {certificates.map(c => (
              <div key={c.code} style={{
                background:'var(--surface)', border:'1px solid var(--border)',
                borderRadius:'12px', padding:'1rem',
                display:'flex', justifyContent:'space-between', alignItems:'center',
                flexWrap:'wrap', gap:'0.5rem',
              }}>
                <div>
                  <div style={{fontWeight:'600', fontSize:'0.88rem'}}>{c.courseName}</div>
                  <div style={{fontFamily:'monospace', fontSize:'0.78rem', color:'var(--muted)', marginTop:'0.2rem'}}>{c.code}</div>
                </div>
                <div style={{fontSize:'0.72rem', color:'var(--muted)', textAlign:'right'}}>
                  <div>{new Date(c.completionDate).toLocaleDateString()}</div>
                  <div style={{color:'var(--teal)', fontWeight:'600', marginTop:'0.2rem'}}>✅ Verified</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}