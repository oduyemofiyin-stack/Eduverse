import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();

  const linkStyle = {
    fontFamily:'inherit', fontSize:'0.82rem', color:'var(--muted)',
    background:'none', border:'none', cursor:'pointer', padding:'0.25rem 0',
    transition:'color 0.2s, transform 0.2s', textAlign:'left', display:'block',
  };

  return (
    <footer style={{
      borderTop:'1px solid var(--border)',
      padding:'3rem 1.2rem 1.5rem', position:'relative', zIndex:1,
    }}>
      <div style={{maxWidth:'1240px', margin:'0 auto'}}>
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))',
          gap:'2rem', marginBottom:'2.5rem',
        }}>
          {/* BRAND */}
          <div style={{minWidth:'220px'}}>
            <div style={{
              fontFamily:'Georgia, serif', fontSize:'1.3rem',
              background:'linear-gradient(135deg,#f0c040,#4488ff 55%,#00d4aa)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
              fontWeight:'700', marginBottom:'0.7rem',
            }}>
              Eduverse
            </div>
            <p style={{fontSize:'0.82rem', color:'var(--muted)', lineHeight:'1.7', marginBottom:'1rem'}}>
              World-class courses, real video lessons, reading materials, and free certificates — completely free, forever.
            </p>
            <div style={{display:'flex', gap:'0.6rem'}}>
              {[
                {ico:'𝕏', url:'https://twitter.com', label:'Twitter'},
                {ico:'in', url:'https://linkedin.com', label:'LinkedIn'},
                {ico:'▶', url:'https://youtube.com', label:'YouTube'},
                {ico:'◆', url:'https://t.me', label:'Telegram'},
              ].map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    width:'34px', height:'34px', borderRadius:'50%',
                    background:'var(--surface2)', border:'1px solid var(--border2)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:'0.8rem', color:'var(--muted)',
                    transition:'all 0.25s', cursor:'pointer', textDecoration:'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background='var(--blue)';
                    e.currentTarget.style.color='#fff';
                    e.currentTarget.style.borderColor='var(--blue)';
                    e.currentTarget.style.transform='translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background='var(--surface2)';
                    e.currentTarget.style.color='var(--muted)';
                    e.currentTarget.style.borderColor='var(--border2)';
                    e.currentTarget.style.transform='translateY(0)';
                  }}
                >{s.ico}</a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 style={{fontSize:'0.78rem', fontWeight:'700', color:'var(--text)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:'0.8rem'}}>Learn</h4>
            {['Courses', 'Search', 'Wishlist', 'My Learning'].map(link => (
              <button key={link} onClick={() => router.push(`/${link.toLowerCase().replace(' ','')}`)}
                style={linkStyle}
                onMouseEnter={e => { e.currentTarget.style.color='var(--text)'; e.currentTarget.style.transform='translateX(3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.color='var(--muted)'; e.currentTarget.style.transform='translateX(0)'; }}
              >{link}</button>
            ))}
          </div>

          {/* COMPANY */}
          <div>
            <h4 style={{fontSize:'0.78rem', fontWeight:'700', color:'var(--text)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:'0.8rem'}}>Company</h4>
            {['About', 'Contact', 'Privacy Policy', 'Terms of Use'].map(link => {
              const path = link === 'Privacy Policy' ? '/privacy' : link === 'Terms of Use' ? '/terms' : `/${link.toLowerCase()}`;
              return (
                <button key={link} onClick={() => router.push(path)}
                  style={linkStyle}
                  onMouseEnter={e => { e.currentTarget.style.color='var(--text)'; e.currentTarget.style.transform='translateX(3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color='var(--muted)'; e.currentTarget.style.transform='translateX(0)'; }}
                >{link}</button>
              );
            })}
          </div>

          {/* SUPPORT */}
          <div>
            <h4 style={{fontSize:'0.78rem', fontWeight:'700', color:'var(--text)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:'0.8rem'}}>Support</h4>
            <p style={{fontSize:'0.82rem', color:'var(--muted)', lineHeight:'1.8'}}>
              <span style={{color:'var(--text)'}}>Email:</span><br/>
              <a href="mailto:Oduyemofiyin@gmail.com" style={{color:'var(--blue)', textDecoration:'none'}}>Oduyemofiyin@gmail.com</a><br/>
              <span style={{color:'var(--text)'}}>Phone:</span><br/>
              +234 916 257 8348<br/>
              +234 818 998 7910<br/>
              <span style={{color:'var(--text)'}}>Location:</span><br/>
              Lagos, Nigeria
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div style={{
          borderTop:'1px solid var(--border)', paddingTop:'1.2rem',
          display:'flex', alignItems:'center', justifyContent:'space-between',
          flexWrap:'wrap', gap:'0.8rem',
        }}>
          <p style={{fontSize:'0.76rem', color:'var(--muted)'}}>
            © 2026 <span style={{color:'var(--gold)'}}>Eduverse Academy Ltd</span> · Lagos, Nigeria · All courses free forever
          </p>
          <p style={{
            fontSize:'0.76rem', color:'var(--muted)',
            background:'var(--surface2)', padding:'0.2rem 0.8rem',
            borderRadius:'100px', fontStyle:'italic',
          }}>
            Where Curiosity Meets Knowledge
          </p>
        </div>
      </div>
    </footer>
  );
}