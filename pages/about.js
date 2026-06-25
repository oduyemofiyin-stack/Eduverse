// About page — mission, vision, team info
export default function About() {
  return (
    <div style={{padding:'0 0 3rem'}}>

      {/* HERO */}
      <div style={{padding:'3rem 1.2rem 2rem', maxWidth:'900px', margin:'0 auto', textAlign:'center'}}>
        <h1 style={{
          fontFamily:'Georgia, serif',
          fontSize:'clamp(1.8rem, 5vw, 3.2rem)',
          fontWeight:'700', lineHeight:'1.2', marginBottom:'1rem',
        }}>
          Education Should Be{' '}
          <span style={{background:'linear-gradient(135deg,#f0c040,#4488ff 50%,#00d4aa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>
            Free for Everyone
          </span>
        </h1>
        <p style={{fontSize:'clamp(0.88rem, 2.5vw, 1rem)', color:'var(--muted)', lineHeight:'1.8', maxWidth:'580px', margin:'0 auto'}}>
          Eduverse was built on a simple belief  where you were born should never determine what you can learn. We are on a mission to democratize education, globally.
        </p>
      </div>

      {/* MISSION */}
      <div style={{padding:'0 1.2rem'}}>
        <div style={{
          background:'var(--surface)', border:'1px solid var(--border)',
          borderRadius:'20px', padding:'2rem', textAlign:'center',
          maxWidth:'860px', margin:'0 auto 2rem',
        }}>
          <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.4rem', fontWeight:'700', marginBottom:'0.7rem', color:'#f0c040'}}>Our Mission</h2>
          <p style={{fontSize:'0.93rem', color:'var(--muted)', lineHeight:'1.8', maxWidth:'560px', margin:'0 auto'}}>
            To make world-class education accessible to everyone, everywhere for free. We believe knowledge is a fundamental right, not a privilege.
          </p>
        </div>
      </div>

      {/* VALUES */}
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill, minmax(min(230px, 100%), 1fr))',
        gap:'1rem',
        maxWidth:'900px', margin:'0 auto 2.5rem',
        padding:'0 1.2rem',
      }}>
        {[
          {ico:null, title:'Accessibility', body:'Every course on Eduverse is completely free. No paywalls, no hidden fees, no subscriptions.', color:'#4488ff'},
          {ico:null, title:'Excellence', body:'We curate only the best content from world-class instructors and trusted educational sources.', color:'#f0c040'},
          {ico:null, title:'Passion', body:'Learning should be exciting. Every experience is designed to ignite curiosity and keep you motivated.', color:'#ff6b9d'},
          {ico:null, title:'Community', body:'We are building a global community of learners who inspire, support, and grow together.', color:'#00d4aa'},
        ].map(v => (
          <div key={v.title} style={{
            background:'var(--surface)',
            border:'1px solid var(--border)',
            borderRadius:'16px', padding:'1.4rem',
            transition:'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='var(--border2)'; e.currentTarget.style.transform='translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateY(0)'; }}
          >

            <h3 style={{fontFamily:'Georgia, serif', fontSize:'0.98rem', fontWeight:'700', marginBottom:'0.35rem'}}>{v.title}</h3>
            <p style={{fontSize:'0.82rem', color:'var(--muted)', lineHeight:'1.6'}}>{v.body}</p>
          </div>
        ))}
      </div>

      {/* FOUNDER */}
      <div style={{maxWidth:'680px', margin:'0 auto', padding:'0 1.2rem', textAlign:'center'}}>
        <div style={{
          width:'80px', height:'80px', borderRadius:'50%',
          background:'linear-gradient(135deg,#4488ff,#00d4aa)',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontFamily:'Georgia, serif', fontSize:'2rem', fontWeight:'700',
          color:'#fff', margin:'0 auto 0.9rem',
        }}>OE</div>
        <div style={{fontFamily:'Georgia, serif', fontSize:'1.3rem', fontWeight:'700', marginBottom:'0.2rem'}}>Oduye Emmanuel</div>
        <div style={{fontSize:'0.78rem', color:'#4488ff', fontWeight:'600', letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:'0.8rem'}}>Founder & CEO, Eduverse</div>
        <p style={{fontSize:'0.87rem', color:'var(--muted)', lineHeight:'1.75'}}>
          Oduye Emmanuel founded Eduverse with a vision to eliminate educational inequality across Africa and the world. Driven by the belief that every curious mind deserves access to quality education, he built Eduverse to be the most accessible, high-quality free learning platform on the internet.
        </p>
        <div style={{display:'flex', justifyContent:'center', gap:'0.8rem', marginTop:'1.2rem'}}>
          {[
            {svg:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>', url:'https://www.youtube.com/@ODUYEMOFIYIN-ql9yr', label:'YouTube'},
            {svg:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>', url:'https://www.linkedin.com/in/oduye-mofiyin-5ab370384', label:'LinkedIn'},
            {svg:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>', url:'https://x.com/Oduyemofiyin', label:'X'},
            {svg:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>', url:'https://t.me/Oduye', label:'Telegram'},
          ].map(s => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" title={s.label}
              style={{
                width:'40px', height:'40px', borderRadius:'50%',
                background:'var(--surface)', border:'1px solid rgba(255,255,255,0.08)',
                display:'flex', alignItems:'center', justifyContent:'center',
                color:'var(--muted)', textDecoration:'none', transition:'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='#4488ff'; e.currentTarget.style.color='#fff'; e.currentTarget.style.transform='translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='var(--surface)'; e.currentTarget.style.color='var(--muted)'; e.currentTarget.style.transform='translateY(0)'; }}
              dangerouslySetInnerHTML={{__html: s.svg}} />
          ))}
        </div>
      </div>

    </div>
  );
}