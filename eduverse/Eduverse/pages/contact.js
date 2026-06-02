// Contact page with form (uses emailjs)
export default function Contact() {
  return (
    <div className="page-container" style={{maxWidth:'860px', margin:'0 auto', padding:'3rem 1.2rem 4rem'}}>
      <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.8rem,5vw,2.2rem)', fontWeight:'700', textAlign:'center', marginBottom:'0.4rem'}}>
        Get In Touch
      </h1>
      <p style={{textAlign:'center', color:'var(--muted)', marginBottom:'2.5rem', fontSize:'0.9rem'}}>
        Have questions, partnerships, or just want to say hello? We would love to hear from you.
      </p>

      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill, minmax(min(260px, 100%), 1fr))',
        gap:'1rem',
      }}>
        {[
          {
            title:'Email Us',
            content:(
              <a href="mailto:Oduyemofiyin@gmail.com" style={{fontSize:'0.85rem', color:'var(--muted)', textDecoration:'none', display:'block', lineHeight:'1.7', wordBreak:'break-all'}}>
                Oduyemofiyin@gmail.com
              </a>
            )
          },
          {
            title:'Call Us',
            content:(
              <>
                <a href="tel:+2349162578348" style={{fontSize:'0.85rem', color:'var(--muted)', textDecoration:'none', display:'block', lineHeight:'1.7'}}>+234 916 257 8348</a>
                <a href="tel:+2348189987910" style={{fontSize:'0.85rem', color:'var(--muted)', textDecoration:'none', display:'block', lineHeight:'1.7'}}>+234 818 998 7910</a>
              </>
            )
          },
          {
            title:'Our Address',
            content:(
              <p style={{fontSize:'0.85rem', color:'var(--muted)', lineHeight:'1.7'}}>
                10, Osoro Street, Papa Ajao<br/>Mushin, Lagos, Nigeria
              </p>
            )
          },
          {
            title:'Follow Us',
            content:(
              <div style={{display:'flex', flexDirection:'column', gap:'0.4rem'}}>
                <a href="https://www.linkedin.com/in/oduye-mofiyin-5ab370384" target="_blank" rel="noreferrer"
                  style={{fontSize:'0.84rem', color:'var(--muted)', textDecoration:'none', display:'flex', alignItems:'center', gap:'0.5rem', transition:'color 0.2s'}}
                  onMouseEnter={e => e.currentTarget.style.color='var(--text)'}
                  onMouseLeave={e => e.currentTarget.style.color='var(--muted)'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
                <a href="https://x.com/Oduyemofiyin" target="_blank" rel="noreferrer"
                  style={{fontSize:'0.84rem', color:'var(--muted)', textDecoration:'none', display:'flex', alignItems:'center', gap:'0.5rem', transition:'color 0.2s'}}
                  onMouseEnter={e => e.currentTarget.style.color='var(--text)'}
                  onMouseLeave={e => e.currentTarget.style.color='var(--muted)'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  Twitter / X
                </a>
                <a href="https://www.youtube.com/@ODUYEMOFIYIN-ql9yr" target="_blank" rel="noreferrer"
                  style={{fontSize:'0.84rem', color:'var(--muted)', textDecoration:'none', display:'flex', alignItems:'center', gap:'0.5rem', transition:'color 0.2s'}}
                  onMouseEnter={e => e.currentTarget.style.color='var(--text)'}
                  onMouseLeave={e => e.currentTarget.style.color='var(--muted)'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  YouTube
                </a>
                <a href="https://t.me/Oduye" target="_blank" rel="noreferrer"
                  style={{fontSize:'0.84rem', color:'var(--muted)', textDecoration:'none', display:'flex', alignItems:'center', gap:'0.5rem', transition:'color 0.2s'}}
                  onMouseEnter={e => e.currentTarget.style.color='var(--text)'}
                  onMouseLeave={e => e.currentTarget.style.color='var(--muted)'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  Telegram
                </a>
              </div>
            )
          },
        ].map(card => (
          <div key={card.title}
            style={{
              background:'var(--surface)',
              border:'1px solid var(--border)',
              borderRadius:'18px', padding:'1.5rem',
              transition:'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='var(--border2)'; e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateY(0)'; }}
          >
            <h3 style={{fontFamily:'Georgia, serif', fontSize:'0.98rem', fontWeight:'700', marginBottom:'0.55rem'}}>{card.title}</h3>
            {card.content}
          </div>
        ))}
      </div>
    </div>
  );
}