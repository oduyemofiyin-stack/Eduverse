import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../context/AppContext';
import { useToast } from '../components/Toast';
import { CourseSkeleton } from '../components/Skeleton';
import courses from '../data/courses';

export default function Home() {
  const { wishlist, toggleWishlist, enrolled, getCourseProgress, theme } = useApp();
  const toast = useToast();
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('All');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const categories = ['All', ...new Set(courses.map(c => c.category))];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filtered = courses.filter(c => {
    const catMatch = activeCat === 'All' || c.category === activeCat;
    const q = search.toLowerCase();
    const searchMatch = !q ||
      c.title.toLowerCase().includes(q) ||
      c.instructor.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.keywords.some(k => k.toLowerCase().includes(q));
    return catMatch && searchMatch;
  });

  const isLight = theme === 'light';

  return (
    <div>
      {/* HERO */}
      <div style={{padding:'3rem 1.2rem 1.5rem', maxWidth:'860px', margin:'0 auto', textAlign:'center'}}>
        <h1 style={{
          fontFamily:'Georgia, serif',
          fontSize:'clamp(1.9rem, 6vw, 4.2rem)',
          fontWeight:'700', lineHeight:'1.1',
          letterSpacing:'-0.02em', marginBottom:'1rem',
          color:'var(--text)',
        }}>
          Learn Without{' '}
          <span style={{
            background:'linear-gradient(135deg,#f0c040,#4488ff 50%,#00d4aa)',
            WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
          }}>
            Limits.
          </span>
        </h1>
        <p style={{
          fontSize:'clamp(0.9rem, 2.5vw, 1.05rem)',
          color:'var(--muted)', lineHeight:'1.75',
          maxWidth:'520px', margin:'0 auto 1.8rem',
        }}>
          World-class courses, real video lessons, reading materials, and free certificates — completely free, forever.
        </p>
        <div style={{display:'flex', gap:'0.8rem', justifyContent:'center', flexWrap:'wrap'}}>
          <button onClick={() => document.getElementById('searchInput').focus()} style={{
            fontSize:'0.9rem', fontWeight:'600',
            padding:'0.75rem 1.5rem',
            borderRadius:'12px', border:'none', cursor:'pointer',
            background:'linear-gradient(135deg,#f0c040,#c8960a)',
            color:'#000', boxShadow:'0 8px 26px rgba(240,192,64,0.32)',
          }}>
            Explore Courses
          </button>
          <button onClick={() => router.push('/enrolled')} style={{
            fontSize:'0.9rem', fontWeight:'600',
            padding:'0.75rem 1.5rem',
            borderRadius:'12px', border:'1px solid var(--border2)',
            cursor:'pointer', background:'transparent', color:'var(--text)',
          }}>
            My Learning
          </button>
        </div>
      </div>

      {/* STATS */}
      <div style={{
        display:'grid', gridTemplateColumns:'repeat(2, 1fr)',
        gap:'1rem', padding:'1rem 1.2rem 2rem',
        maxWidth:'500px', margin:'0 auto',
      }}>
        {[
          {n:'12', l:'Expert Courses'},
          {n:'100%', l:'Free Forever'},
          {n:'50K+', l:'Learners'},
          {n:'7', l:'Categories'},
        ].map(s => (
          <div key={s.l} style={{
            textAlign:'center',
            background:'var(--surface)',
            border:'1px solid var(--border)',
            borderRadius:'12px', padding:'1rem',
          }}>
            <div style={{fontFamily:'Georgia, serif', fontSize:'1.8rem', fontWeight:'700', color:'var(--text)'}}>{s.n}</div>
            <div style={{fontSize:'0.75rem', color:'var(--muted)', marginTop:'2px'}}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* SEARCH & FILTERS */}
      <div style={{maxWidth:'1240px', margin:'0 auto', padding:'0 1.2rem 1.2rem'}}>
        <div style={{position:'relative', marginBottom:'0.9rem'}}>
          <span style={{position:'absolute', left:'1rem', top:'50%', transform:'translateY(-50%)', color:'var(--muted)'}}>⌕</span>
          <input
            id="searchInput"
            type="text"
            placeholder="Search courses…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width:'100%', background:'var(--surface)',
              border:'1px solid var(--border)',
              borderRadius:'13px', padding:'0.85rem 1rem 0.85rem 2.7rem',
              fontSize:'0.93rem', color:'var(--text)', outline:'none',
              transition:'border 0.2s',
            }}
          />
        </div>

        {/* FILTERS */}
        <div style={{
          display:'flex', gap:'0.45rem',
          overflowX:'auto', paddingBottom:'0.3rem',
          scrollbarWidth:'none',
        }}>
          <span style={{fontSize:'0.76rem', color:'var(--muted)', marginRight:'0.2rem', whiteSpace:'nowrap', alignSelf:'center'}}>Filter:</span>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCat(cat)} style={{
              fontSize:'0.76rem', fontWeight:'500',
              padding:'0.35rem 0.85rem', borderRadius:'100px',
              border: activeCat === cat ? 'none' : '1px solid var(--border)',
              background: activeCat === cat ? '#4488ff' : 'transparent',
              color: activeCat === cat ? '#fff' : 'var(--muted)',
              cursor:'pointer', whiteSpace:'nowrap', flexShrink:0,
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* RESULTS INFO */}
      <div style={{fontSize:'0.8rem', color:'var(--muted)', padding:'0 1.2rem', maxWidth:'1240px', margin:'0 auto 0.6rem'}}>
        {search || activeCat !== 'All'
          ? `${filtered.length} course${filtered.length !== 1 ? 's' : ''} found`
          : `${courses.length} courses available`}
      </div>

      {/* COURSE GRID */}
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill, minmax(min(295px, 100%), 1fr))',
        gap:'1rem', padding:'0 1.2rem 4rem',
        maxWidth:'1240px', margin:'0 auto',
      }}>
        {loading ? (
          Array.from({length:6}).map((_,i) => <CourseSkeleton key={i}/>)
        ) : filtered.length === 0 ? (
          <div style={{gridColumn:'1/-1', textAlign:'center', padding:'4rem', color:'var(--muted)'}}>
            <div style={{fontSize:'3rem', marginBottom:'1rem'}}>🔍</div>
            <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.3rem', color:'var(--text)', marginBottom:'0.4rem'}}>No courses found</h3>
            <p>Try a different keyword or category</p>
          </div>
        ) : filtered.map((c, i) => (
          <div key={c.id}
            onClick={() => router.push(`/courses/${c.id}`)}
            style={{
              background:'var(--card-bg)',
              border:'1px solid var(--border)',
              borderRadius:'16px', overflow:'hidden', cursor:'pointer',
              transition:'all 0.3s',
              boxShadow: isLight ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'rgba(68,136,255,0.4)';
              e.currentTarget.style.background = 'var(--card-hover)';
              e.currentTarget.style.boxShadow = isLight ? '0 8px 30px rgba(0,0,0,0.12)' : '0 22px 55px rgba(0,0,0,0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.background = 'var(--card-bg)';
              e.currentTarget.style.boxShadow = isLight ? '0 2px 12px rgba(0,0,0,0.06)' : 'none';
            }}
          >
            {/* THUMBNAIL */}
            <div style={{width:'100%', height:'175px', position:'relative', overflow:'hidden', background:'var(--surface2)'}}>
              <img src={c.img} alt={c.title} style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
              <div style={{position:'absolute', inset:0, background:'linear-gradient(to top, rgba(6,8,15,0.65) 0%, transparent 55%)'}}/>
              {enrolled.includes(c.id) ? (
                <span style={{
                  position:'absolute', top:'9px', left:'9px',
                  fontSize:'0.67rem', fontWeight:'700', letterSpacing:'0.08em', textTransform:'uppercase',
                  padding:'0.22rem 0.65rem', borderRadius:'100px',
                  background:'rgba(68,136,255,0.2)', color:'#4488ff',
                  border:'1px solid rgba(68,136,255,0.3)',
                }}>✓ Enrolled</span>
              ) : (
                <span style={{
                  position:'absolute', top:'9px', left:'9px',
                  fontSize:'0.67rem', fontWeight:'700', letterSpacing:'0.08em', textTransform:'uppercase',
                  padding:'0.22rem 0.65rem', borderRadius:'100px',
                  background:'rgba(0,212,170,0.18)', color:'#00d4aa',
                  border:'1px solid rgba(0,212,170,0.28)',
                }}>Free</span>
              )}
              <div
                onClick={e => { e.stopPropagation(); toggleWishlist(c.id, toast); }}
                style={{
                  position:'absolute', top:'9px', right:'9px',
                  width:'32px', height:'32px', borderRadius:'50%',
                  background:'rgba(6,8,15,0.72)', backdropFilter:'blur(8px)',
                  border:'1px solid rgba(255,255,255,0.13)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'1rem', cursor:'pointer', zIndex:2,
                  color: wishlist.includes(c.id) ? '#ff6b9d' : '#eef0f8',
                }}
              >
                {wishlist.includes(c.id) ? '♥' : '♡'}
              </div>
            </div>

            {/* CARD BODY */}
            <div style={{padding:'1rem'}}>
              <div style={{fontSize:'0.7rem', fontWeight:'600', letterSpacing:'0.07em', textTransform:'uppercase', color:'#4488ff', marginBottom:'0.4rem'}}>{c.category}</div>
              <div style={{
                fontFamily:'Georgia, serif', fontSize:'0.98rem', fontWeight:'700',
                lineHeight:'1.35', marginBottom:'0.4rem', color:'var(--text)',
                display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden',
              }}>{c.title}</div>
              <div style={{fontSize:'0.78rem', color:'var(--muted)', marginBottom:'0.7rem'}}>by {c.instructor}</div>
              <div style={{
                display:'flex', alignItems:'center', justifyContent:'space-between',
                borderTop:'1px solid var(--border)', paddingTop:'0.65rem',
                flexWrap:'wrap', gap:'0.3rem',
              }}>
                <span style={{display:'flex', alignItems:'center', gap:'0.25rem', fontSize:'0.78rem', color:'var(--text)'}}>
                  <span style={{color:'#fbbf24', fontSize:'0.7rem'}}>★★★★★</span> {c.rating}
                </span>
                <span style={{fontSize:'0.76rem', color:'var(--muted)'}}>⏱ {c.duration}</span>
                <span style={{fontFamily:'Georgia, serif', fontSize:'0.92rem', fontWeight:'700', color:'#00d4aa'}}>Free</span>
              </div>

              {/* PROGRESS BAR */}
              {enrolled.includes(c.id) && (
                <div style={{marginTop:'0.7rem'}}>
                  <div style={{display:'flex', justifyContent:'space-between', fontSize:'0.72rem', color:'var(--muted)', marginBottom:'0.3rem'}}>
                    <span>Progress</span>
                    <span>{getCourseProgress(c.id, c.lessons.length)}%</span>
                  </div>
                  <div style={{width:'100%', height:'4px', background:'var(--surface3)', borderRadius:'100px'}}>
                    <div style={{
                      height:'100%', borderRadius:'100px',
                      background:'linear-gradient(135deg,#4488ff,#00d4aa)',
                      width:`${getCourseProgress(c.id, c.lessons.length)}%`,
                      transition:'width 0.4s ease',
                    }}/>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}