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
        <div className="footer-grid" style={{
          display:'grid', gap:'2rem', marginBottom:'2.5rem',
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
            <p style={{fontSize:'0.82rem', color:'var(--muted)', lineHeight:'1.7', marginBottom:'1rem', maxWidth:'320px'}}>
              World-class courses, real video lessons, reading materials, and free certificates — completely free, forever.
            </p>
            <div style={{display:'flex', gap:'0.6rem'}}>
              {[
                {svg:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>', url:'https://www.youtube.com/@ODUYEMOFIYIN-ql9yr', label:'YouTube'},
                {svg:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>', url:'https://www.linkedin.com/in/oduye-mofiyin-5ab370384', label:'LinkedIn'},
                {svg:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>', url:'https://x.com/Oduyemofiyin', label:'X'},
                {svg:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>', url:'https://t.me/Oduye', label:'Telegram'},
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
                  dangerouslySetInnerHTML={{__html: s.svg}} />
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 style={{fontSize:'0.78rem', fontWeight:'700', color:'var(--text)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:'0.8rem'}}>Learn</h4>
            {['Courses', 'Paths', 'Search', 'Wishlist', 'My Learning'].map(link => (
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
            {['About', 'Contact', 'Instructors', 'Blog', 'Privacy Policy', 'Terms of Use'].map(link => {
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