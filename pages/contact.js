export default function Contact() {
  return (
    <div style={{maxWidth:'860px', margin:'0 auto', padding:'3rem 1.2rem 4rem'}}>
      <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.8rem,5vw,2.2rem)', fontWeight:'700', textAlign:'center', marginBottom:'0.4rem'}}>
        Get In Touch
      </h1>
      <p style={{textAlign:'center', color:'#7a80a0', marginBottom:'2.5rem', fontSize:'0.9rem'}}>
        Have questions, partnerships, or just want to say hello? We would love to hear from you.
      </p>

      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill, minmax(min(260px, 100%), 1fr))',
        gap:'1rem',
      }}>
        {[
          {
            ico:'📧', title:'Email Us',
            content:(
              <a href="mailto:Oduyemofiyin@gmail.com" style={{fontSize:'0.85rem', color:'#7a80a0', textDecoration:'none', display:'block', lineHeight:'1.7', wordBreak:'break-all'}}>
                Oduyemofiyin@gmail.com
              </a>
            )
          },
          {
            ico:'📞', title:'Call Us',
            content:(
              <>
                <a href="tel:+2349162578348" style={{fontSize:'0.85rem', color:'#7a80a0', textDecoration:'none', display:'block', lineHeight:'1.7'}}>+234 916 257 8348</a>
                <a href="tel:+2348189987910" style={{fontSize:'0.85rem', color:'#7a80a0', textDecoration:'none', display:'block', lineHeight:'1.7'}}>+234 818 998 7910</a>
              </>
            )
          },
          {
            ico:'📍', title:'Our Address',
            content:(
              <p style={{fontSize:'0.85rem', color:'#7a80a0', lineHeight:'1.7'}}>
                10, Osoro Street, Papa Ajao<br/>Mushin, Lagos, Nigeria
              </p>
            )
          },
          {
            ico:'🌐', title:'Follow Us',
            content:(
              <div style={{display:'flex', flexDirection:'column', gap:'0.4rem'}}>
                <a href="https://www.linkedin.com/in/oduye-mofiyin-5ab370384" target="_blank" rel="noreferrer"
                  style={{fontSize:'0.84rem', color:'#7a80a0', textDecoration:'none', display:'flex', alignItems:'center', gap:'0.5rem'}}>
                  🔷 LinkedIn
                </a>
                <a href="https://x.com/Oduyemofiyin" target="_blank" rel="noreferrer"
                  style={{fontSize:'0.84rem', color:'#7a80a0', textDecoration:'none', display:'flex', alignItems:'center', gap:'0.5rem'}}>
                  🐦 Twitter / X
                </a>
                <a href="https://t.me/Oduye" target="_blank" rel="noreferrer"
                  style={{fontSize:'0.84rem', color:'#7a80a0', textDecoration:'none', display:'flex', alignItems:'center', gap:'0.5rem'}}>
                  ✈️ Telegram
                </a>
              </div>
            )
          },
        ].map(card => (
          <div key={card.title}
            style={{
              background:'#0d1117',
              border:'1px solid rgba(255,255,255,0.06)',
              borderRadius:'18px', padding:'1.5rem',
              transition:'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.13)'; e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.06)'; e.currentTarget.style.transform='translateY(0)'; }}
          >
            <span style={{fontSize:'1.8rem', marginBottom:'0.7rem', display:'block'}}>{card.ico}</span>
            <h3 style={{fontFamily:'Georgia, serif', fontSize:'0.98rem', fontWeight:'700', marginBottom:'0.55rem'}}>{card.title}</h3>
            {card.content}
          </div>
        ))}
      </div>
    </div>
  );
}