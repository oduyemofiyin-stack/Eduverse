import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import blogPosts from '../../data/blog';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);

  const post = blogPosts.find(p => p.id === parseInt(id));
  const related = blogPosts.filter(p => p.id !== post?.id && (p.category === post?.category || p.tags.some(t => post?.tags.includes(t)))).slice(0, 3);

  useEffect(() => { const t = setTimeout(() => setLoading(false), 300); return () => clearTimeout(t); }, []);

  if (!post && !loading) return (
    <div className="page-container" style={{textAlign:'center', padding:'4rem 1.2rem', color:'var(--muted)'}}>
      <h2 style={{fontFamily:'Georgia, serif', color:'var(--text)'}}>Post not found</h2>
      <button onClick={() => router.push('/blog')} style={{fontSize:'0.85rem', fontWeight:'600', padding:'0.6rem 1.4rem', borderRadius:'10px', border:'none', cursor:'pointer', background:'linear-gradient(135deg,var(--blue),#3366dd)', color:'#fff', marginTop:'1rem'}}>Back to Blog</button>
    </div>
  );

  if (loading || !post) return (
    <div className="page-container" style={{maxWidth:'800px', margin:'0 auto', padding:'2rem 1.2rem 4rem'}}>
      <div style={{width:'400px', height:'28px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'0.5rem'}} className="shimmer-block"/>
      <div style={{width:'250px', height:'14px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'1.5rem'}} className="shimmer-block"/>
      <div style={{height:'300px', background:'var(--surface2)', borderRadius:'16px', marginBottom:'1rem'}} className="shimmer-block"/>
      <div style={{height:'200px', background:'var(--surface2)', borderRadius:'12px'}} className="shimmer-block"/>
    </div>
  );

  return (
    <div className="page-transition" style={{padding:'0 0 3rem'}}>
      <article style={{padding:'2rem 1.2rem 1rem', maxWidth:'800px', margin:'0 auto'}}>
        <button onClick={() => router.push('/blog')} style={{background:'none', border:'none', color:'var(--muted)', cursor:'pointer', fontSize:'0.85rem', marginBottom:'1rem', display:'inline-flex', alignItems:'center', gap:'0.3rem'}}>← Back to Blog</button>

        <div style={{borderRadius:'20px', overflow:'hidden', border:'1px solid var(--border)', marginBottom:'1.5rem', position:'relative'}}>
          <Image src={post.image} alt={post.title} fill style={{objectFit:'cover', display:'block'}}/>
          <div style={{position:'absolute', bottom:'0', left:'0', right:'0', padding:'2rem 1.5rem 1.2rem', background:'linear-gradient(to top, rgba(6,8,15,0.9), transparent)'}}>
            <span style={{fontSize:'0.65rem', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.08em', padding:'0.25rem 0.7rem', borderRadius:'100px', background:'rgba(240,192,64,0.2)', color:'var(--gold)', border:'1px solid rgba(240,192,64,0.3)'}}>{post.category}</span>
          </div>
        </div>

        <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.4rem, 4vw, 2rem)', fontWeight:'700', lineHeight:'1.2', marginBottom:'0.6rem'}}>{post.title}</h1>

        <div style={{display:'flex', alignItems:'center', gap:'0.6rem', flexWrap:'wrap', marginBottom:'1.2rem'}}>
          <Image src={post.authorAvatar} alt="" width={32} height={32} style={{borderRadius:'50%'}}/>
          <div>
            <div style={{fontSize:'0.82rem', fontWeight:'600'}}>{post.author}</div>
            <div style={{fontSize:'0.72rem', color:'var(--muted)'}}>{new Date(post.date).toLocaleDateString('en-US', { month:'long', day:'numeric', year:'numeric' })} · {post.readTime}</div>
          </div>
        </div>

        <div style={{fontSize:'0.95rem', lineHeight:'1.9', color:'var(--text2)', whiteSpace:'pre-line'}}>
          {post.content}
        </div>

        <div style={{display:'flex', gap:'0.4rem', flexWrap:'wrap', marginTop:'1.5rem', paddingTop:'1rem', borderTop:'1px solid var(--border)'}}>
          {post.tags.map(tag => (
            <span key={tag} style={{fontSize:'0.7rem', fontWeight:'600', padding:'0.25rem 0.7rem', borderRadius:'100px', background:'var(--surface2)', color:'var(--muted)', border:'1px solid var(--border)'}}>#{tag}</span>
          ))}
        </div>

        {related.length > 0 && (
          <div style={{marginTop:'2.5rem'}}>
            <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.1rem', fontWeight:'700', marginBottom:'1rem'}}>Related Articles</h2>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(min(220px, 100%), 1fr))', gap:'1rem'}}>
              {related.map(r => (
                <div key={r.id} className="list-item" style={{borderRadius:'12px', overflow:'hidden', border:'1px solid var(--border)', cursor:'pointer', background:'var(--card-bg)'}}
                  onClick={() => router.push(`/blog/${r.id}`)}
                >
                  <div style={{height:'120px', overflow:'hidden', background:'var(--surface2)'}}>
                    <Image src={r.image} alt={r.title} fill style={{objectFit:'cover'}}/>
                  </div>
                  <div style={{padding:'0.8rem'}}>
                    <div style={{fontWeight:'700', fontSize:'0.8rem', lineHeight:'1.3', marginBottom:'0.2rem', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden'}}>{r.title}</div>
                    <div style={{fontSize:'0.7rem', color:'var(--muted)'}}>{r.readTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
