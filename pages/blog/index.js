import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import blogPosts from '../../data/blog';

// Blog listing page — shows all posts with category filter
export default function Blog() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [activeCat, setActiveCat] = useState('All');

  useEffect(() => { const t = setTimeout(() => setLoading(false), 400); return () => clearTimeout(t); }, []);

  const categories = ['All', ...new Set(blogPosts.map(p => p.category))];
  const filtered = activeCat === 'All' ? blogPosts : blogPosts.filter(p => p.category === activeCat);

  if (loading) return (
    <div className="page-container" style={{maxWidth:'1000px', margin:'0 auto', padding:'2rem 1.2rem 4rem'}}>
      <div style={{width:'200px', height:'28px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'0.5rem'}} className="shimmer-block"/>
      <div style={{width:'140px', height:'14px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'1.5rem'}} className="shimmer-block"/>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'1rem'}}>
        {Array.from({length:3}).map((_,i) => <div key={i} style={{height:'320px', background:'var(--surface2)', borderRadius:'16px'}} className="shimmer-block"/>)}
      </div>
    </div>
  );

  return (
    <div className="page-transition" style={{padding:'0 0 3rem'}}>
      <div style={{padding:'2rem 1.2rem 1rem', maxWidth:'1000px', margin:'0 auto'}}>
        <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.5rem, 4vw, 2.2rem)', fontWeight:'700', marginBottom:'0.3rem'}}>
          Eduverse <span className="shimmer-text">Blog</span>
        </h1>
        <p style={{color:'var(--muted)', fontSize:'0.88rem', marginBottom:'1.2rem', maxWidth:'500px'}}>Tips, insights, and stories from the Eduverse team to help you learn better.</p>

        <div style={{display:'flex', gap:'0.4rem', flexWrap:'wrap', marginBottom:'1.5rem', overflowX:'auto', scrollbarWidth:'none'}}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCat(cat)} style={{
              fontSize:'0.72rem', fontWeight:'600', padding:'0.35rem 0.9rem', borderRadius:'100px',
              border: activeCat === cat ? 'none' : '1px solid var(--border)',
              background: activeCat === cat ? 'linear-gradient(135deg,var(--blue),#3366dd)' : 'var(--surface)',
              color: activeCat === cat ? '#fff' : 'var(--muted)', cursor:'pointer', whiteSpace:'nowrap',
            }}>{cat}</button>
          ))}
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(min(300px, 100%), 1fr))', gap:'1.3rem'}}>
          {filtered.map((post, i) => (
            <div key={post.id} className="list-item" style={{
              borderRadius:'16px', overflow:'hidden', cursor:'pointer',
              background:'var(--card-bg)', border:'1px solid var(--border)',
              transition:'border-color 0.3s, box-shadow 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(240,192,64,0.25)'; e.currentTarget.style.boxShadow='0 12px 40px rgba(240,192,64,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.boxShadow='none'; }}
              onClick={() => router.push(`/blog/${post.id}`)}
            >
              <div style={{height:'180px', overflow:'hidden', background:'var(--surface2)', position:'relative'}}>
                <Image src={post.image} alt={post.title} fill style={{objectFit:'cover'}}/>
                <div style={{position:'absolute', top:'10px', left:'10px', fontSize:'0.6rem', fontWeight:'700', padding:'0.25rem 0.6rem', borderRadius:'100px', background:'rgba(6,8,15,0.7)', backdropFilter:'blur(10px)', color:'#fff', border:'1px solid rgba(255,255,255,0.1)'}}>{post.category}</div>
              </div>
              <div style={{padding:'1.2rem'}}>
                <div style={{display:'flex', alignItems:'center', gap:'0.4rem', marginBottom:'0.4rem'}}>
                  <Image src={post.authorAvatar} alt="" width={22} height={22} style={{borderRadius:'50%'}}/>
                  <span style={{fontSize:'0.72rem', color:'var(--muted)'}}>{post.author}</span>
                  <span style={{fontSize:'0.65rem', color:'var(--muted2)'}}>·</span>
                  <span style={{fontSize:'0.7rem', color:'var(--muted2)'}}>{post.readTime}</span>
                </div>
                <h3 style={{fontFamily:'Georgia, serif', fontSize:'1rem', fontWeight:'700', lineHeight:'1.35', marginBottom:'0.4rem', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden'}}>{post.title}</h3>
                <p style={{fontSize:'0.8rem', color:'var(--muted)', lineHeight:'1.5', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden'}}>{post.excerpt}</p>
                <div style={{display:'flex', gap:'0.3rem', flexWrap:'wrap', marginTop:'0.6rem'}}>
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} style={{fontSize:'0.6rem', fontWeight:'600', padding:'0.15rem 0.45rem', borderRadius:'100px', background:'var(--surface2)', color:'var(--muted)'}}>#{tag}</span>
                  ))}
                  <span style={{fontSize:'0.65rem', color:'var(--muted2)', alignSelf:'center'}}>{new Date(post.date).toLocaleDateString('en-US', { month:'short', day:'numeric' })}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
