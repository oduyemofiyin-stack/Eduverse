import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();
  return (
    <footer style={{
      borderTop:'1px solid var(--border)',
      padding:'2rem 1.2rem', position:'relative', zIndex:1,
    }}>
      <div style={{maxWidth:'1240px', margin:'0 auto'}}>
        {/* TOP ROW */}
        <div style={{
          display:'flex', alignItems:'center', justifyContent:'space-between',
          flexWrap:'wrap', gap:'1rem', marginBottom:'1.2rem',
        }}>
          {/* LOGO */}
          <div style={{
            fontFamily:'Georgia, serif', fontSize:'1.2rem',
            background:'linear-gradient(135deg,#f0c040,#4488ff 55%,#00d4aa)',
            WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
            fontWeight:'700',
          }}>
            Eduverse
          </div>

          {/* LINKS */}
          <div style={{display:'flex', gap:'0.5rem', flexWrap:'wrap'}}>
            {[
              {label:'Courses', path:'/'},
              {label:'About', path:'/about'},
              {label:'Contact', path:'/contact'},
              {label:'Terms of Use', path:'/terms'},
              {label:'Privacy Policy', path:'/privacy'},
            ].map(link => (
              <button key={link.path} onClick={() => router.push(link.path)} style={{
                fontFamily:'inherit', fontSize:'0.78rem', color:'var(--muted)',
                background:'none', border:'none', cursor:'pointer', padding:'0.2rem 0.4rem',
                borderRadius:'6px', transition:'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color='var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color='var(--muted)'}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div style={{borderTop:'1px solid var(--border)', paddingTop:'1rem', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'0.5rem'}}>
          <p style={{fontSize:'0.76rem', color:'var(--muted)'}}>
            © 2026 <span style={{color:'#f0c040'}}>Eduverse Academy Ltd</span> · Lagos, Nigeria · All courses free forever
          </p>
          <p style={{fontSize:'0.76rem', color:'var(--muted)'}}>
            <em>Where Curiosity Meets Knowledge</em>
          </p>
        </div>
      </div>
    </footer>
  );
}