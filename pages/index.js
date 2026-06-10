import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../context/AppContext';
import { useToast } from '../components/Toast';
import { CourseSkeleton } from '../components/Skeleton';

import courses from '../data/courses';

export default function Home() {
  const { wishlist, toggleWishlist, enrolled, getCourseProgress } = useApp();
  const toast = useToast();
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('All');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const categories = ['All', ...new Set(courses.map(c => c.category))];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200);
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

  return (
    <div className="page-transition">

      {/* HERO */}
      <section style={{
        minHeight:'90vh', display:'flex', flexDirection:'column',
        justifyContent:'center', padding:'6rem 1.5rem 3rem',
        maxWidth:'1200px', margin:'0 auto',
      }}>
        <div style={{maxWidth:'880px'}}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'8px',
            marginBottom:'1.5rem',
          }}>
            <span style={{
              width:'32px', height:'32px', borderRadius:'8px',
              background:'var(--gold)', display:'flex',
              alignItems:'center', justifyContent:'center',
              fontFamily:'Georgia, serif', fontWeight:'700', fontSize:'1.1rem',
              color:'#000',
            }}>E</span>
            <span style={{
              fontSize:'0.8rem', fontWeight:'600', color:'var(--muted)',
              letterSpacing:'0.05em', textTransform:'uppercase',
            }}>Eduverse Academy</span>
          </div>

          <h1 style={{
            fontFamily:'Georgia, serif',
            fontSize:'clamp(2.8rem, 8vw, 5.5rem)',
            fontWeight:'700', lineHeight:'1.05',
            letterSpacing:'-0.03em', marginBottom:'1.5rem',
            color:'var(--text)',
          }}>
            Learn free.{' '}
            <span style={{color:'var(--gold)'}}>Actually free.</span>
          </h1>

          <p style={{
            fontSize:'clamp(1.05rem, 2vw, 1.25rem)',
            color:'var(--muted)', lineHeight:'1.7',
            maxWidth:'560px', marginBottom:'2.5rem',
            fontWeight:'400',
          }}>
            Real courses. Real certificates. A community that actually wants you to win. No tuition, no catch, no &ldquo;premium&rdquo; wall.
          </p>

          <div style={{display:'flex', gap:'1rem', flexWrap:'wrap'}}>
            <button
              onClick={() => {
                document.getElementById('searchInput')?.focus();
                document.getElementById('courses-section')?.scrollIntoView({ behavior:'smooth' });
              }}
              style={{
                fontSize:'0.95rem', fontWeight:'700',
                padding:'0.9rem 2.4rem', borderRadius:'12px',
                border:'none', cursor:'pointer',
                background:'var(--gold)', color:'#000',
                fontFamily:'inherit',
                transition:'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity='0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity='1'}
            >
              Start Learning Free
            </button>
            <button
              onClick={() => router.push('/enrolled')}
              style={{
                fontSize:'0.95rem', fontWeight:'600',
                padding:'0.9rem 2.2rem', borderRadius:'12px',
                border:'1px solid var(--border2)',
                cursor:'pointer', background:'transparent',
                color:'var(--text)', fontFamily:'inherit',
                transition:'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background='var(--surface2)'}
              onMouseLeave={e => e.currentTarget.style.background='transparent'}
            >
              My Learning
            </button>
          </div>
        </div>

        {/* STATS */}
        <div style={{
          display:'flex', gap:'3rem', marginTop:'4rem',
          flexWrap:'wrap',
        }}>
          {[
            { n:'20', l:'Courses' },
            { n:'100%', l:'Free. Always.' },
            { n:'9', l:'Categories' },
          ].map(s => (
            <div key={s.l}>
              <div style={{
                fontFamily:'Georgia, serif',
                fontSize:'2.2rem', fontWeight:'700',
                color:'var(--text)', lineHeight:'1',
                marginBottom:'0.2rem',
              }}>{s.n}</div>
              <div style={{
                fontSize:'0.78rem', color:'var(--muted2)',
                letterSpacing:'0.03em',
              }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* RESUME LEARNING */}
      {(() => {
        const inProgress = enrolled.filter(id => {
          const p = getCourseProgress(id, courses.find(c => c.id === id)?.lessons.length || 1);
          return p > 0 && p < 100;
        });
        if (inProgress.length === 0) return null;
        const resumeId = inProgress[0];
        const course = courses.find(c => c.id === resumeId);
        if (!course) return null;
        const prog = getCourseProgress(resumeId, course.lessons.length);
        return (
          <section style={{maxWidth:'1200px', margin:'0 auto', padding:'0 1.5rem 2rem'}}>
            <div style={{
              background:'var(--surface)', border:'1px solid var(--border)',
              borderRadius:'16px', padding:'1.2rem 1.5rem',
              display:'flex', alignItems:'center', justifyContent:'space-between',
              flexWrap:'wrap', gap:'1rem',
            }}>
              <div style={{display:'flex', alignItems:'center', gap:'1rem', flex:1, minWidth:'200px'}}>
                <div style={{
                  width:'48px', height:'48px', borderRadius:'10px', overflow:'hidden', flexShrink:0,
                  background:'var(--surface2)',
                }}>
                  <img src={course.img} alt="" loading="lazy" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                </div>
                <div>
                  <div style={{fontSize:'0.7rem', fontWeight:'600', textTransform:'uppercase', color:'var(--gold)', letterSpacing:'0.06em', marginBottom:'0.15rem'}}>Continue Learning</div>
                  <div style={{fontWeight:'700', fontSize:'0.9rem', lineHeight:'1.3'}}>{course.title}</div>
                  <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginTop:'0.3rem'}}>
                    <div style={{flex:1, maxWidth:'200px', height:'4px', background:'var(--surface3)', borderRadius:'100px', overflow:'hidden'}}>
                      <div style={{width:`${prog}%`, height:'100%', borderRadius:'100px', background:'var(--gold)', transition:'width 0.6s'}}/>
                    </div>
                    <span style={{fontSize:'0.72rem', color:'var(--muted)', fontWeight:'600'}}>{prog}%</span>
                  </div>
                </div>
              </div>
              <button onClick={() => router.push(`/courses/${resumeId}`)}
                style={{
                  fontSize:'0.85rem', fontWeight:'700', padding:'0.6rem 1.4rem',
                  borderRadius:'10px', border:'none', cursor:'pointer',
                  background:'var(--gold)', color:'#000',
                  whiteSpace:'nowrap', fontFamily:'inherit',
                }}
              >Continue</button>
            </div>
          </section>
        );
      })()}

      {/* SEARCH + FILTERS */}
      <section id="courses-section" style={{maxWidth:'1200px', margin:'0 auto', padding:'2rem 1.5rem 1.2rem'}}>
        <div style={{position:'relative', marginBottom:'1rem'}}>
          <svg style={{
            position:'absolute', left:'1.2rem', top:'50%',
            transform:'translateY(-50%)', color:'var(--muted2)',
            pointerEvents:'none',
          }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            id="searchInput"
            type="text"
            placeholder="Search courses by title, instructor, or keyword..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width:'100%', background:'var(--surface)',
              border:'1px solid var(--border)',
              borderRadius:'12px', padding:'0.95rem 1rem 0.95rem 3.2rem',
              fontSize:'0.95rem', color:'var(--text)', outline:'none',
              fontFamily:'inherit',
            }}
          />
        </div>

        <div style={{
          display:'flex', gap:'0.5rem',
          overflowX:'auto', paddingBottom:'0.3rem',
          scrollbarWidth:'none',
        }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCat(cat)} style={{
              fontSize:'0.76rem', fontWeight:'600',
              padding:'0.4rem 1rem', borderRadius:'100px',
              border: activeCat === cat ? 'none' : '1px solid var(--border)',
              background: activeCat === cat ? 'var(--gold)' : 'transparent',
              color: activeCat === cat ? '#000' : 'var(--muted)',
              cursor:'pointer', whiteSpace:'nowrap', flexShrink:0,
              fontFamily:'inherit',
              transition:'background 0.2s, color 0.2s',
            }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <div style={{
        fontSize:'0.8rem', color:'var(--muted2)',
        padding:'0 1.5rem', maxWidth:'1200px',
        margin:'0 auto 0.8rem',
      }}>
        {search || activeCat !== 'All'
          ? `${filtered.length} course${filtered.length !== 1 ? 's' : ''} found`
          : `${courses.length} courses`}
      </div>

      {/* COURSE GRID */}
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
        gap:'1.3rem', padding:'0 1.5rem 3rem',
        maxWidth:'1200px', margin:'0 auto',
      }}>
        {loading ? (
          Array.from({length:6}).map((_,i) => <CourseSkeleton key={i}/>)
        ) : filtered.length === 0 ? (
          <div style={{gridColumn:'1/-1', textAlign:'center', padding:'4rem 2rem', color:'var(--muted)'}}>
            <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.4rem', color:'var(--text)', marginBottom:'0.4rem'}}>No courses found</h3>
            <p style={{marginBottom:'1.2rem'}}>Try a different keyword or category</p>
            <button onClick={() => { setSearch(''); setActiveCat('All'); }} style={{
              fontSize:'0.85rem', fontWeight:'600', padding:'0.6rem 1.4rem',
              borderRadius:'10px', border:'none', cursor:'pointer',
              background:'var(--gold)', color:'#000',
              fontFamily:'inherit',
            }}>Reset Filters</button>
          </div>
        ) : filtered.map((c, i) => {
          const prog = enrolled.includes(c.id) ? getCourseProgress(c.id, c.lessons.length) : 0;
          return (
          <div
            key={c.id}
            onClick={() => router.push(`/courses/${c.id}`)}
            style={{
              borderRadius:'16px', overflow:'hidden', cursor:'pointer',
              background:'var(--surface)',
              border:'1px solid var(--border)',
              transition:'border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor='var(--muted2)'}
            onMouseLeave={e => e.currentTarget.style.borderColor='var(--border)'}
          >
            {/* THUMBNAIL */}
            <div style={{
              width:'100%', height:'180px',
              position:'relative', overflow:'hidden',
              background:'var(--surface2)',
            }}>
              <img
                src={c.img} alt={c.title} loading="lazy"
                style={{
                  width:'100%', height:'100%', objectFit:'cover',
                  display:'block', transition:'transform 0.5s',
                }}
                onMouseEnter={e => e.target.style.transform='scale(1.08)'}
                onMouseLeave={e => e.target.style.transform='scale(1)'}
              />
              <div style={{
                position:'absolute', inset:0,
                background:'linear-gradient(to top, rgba(6,8,15,0.7) 0%, rgba(6,8,15,0.1) 50%, transparent 100%)',
              }}/>
              {enrolled.includes(c.id) ? (
                <span style={{
                  position:'absolute', top:'10px', left:'10px',
                  fontSize:'0.65rem', fontWeight:'700', letterSpacing:'0.06em',
                  textTransform:'uppercase', padding:'0.25rem 0.7rem',
                  borderRadius:'100px', background:'rgba(240,192,64,0.2)',
                  color:'var(--gold)', border:'1px solid rgba(240,192,64,0.3)',
                }}>Enrolled</span>
              ) : (
                <span style={{
                  position:'absolute', top:'10px', left:'10px',
                  fontSize:'0.65rem', fontWeight:'700', letterSpacing:'0.06em',
                  textTransform:'uppercase', padding:'0.25rem 0.7rem',
                  borderRadius:'100px', background:'rgba(0,212,170,0.2)',
                  color:'var(--teal)', border:'1px solid rgba(0,212,170,0.3)',
                }}>Free</span>
              )}
              <div
                onClick={e => { e.stopPropagation(); toggleWishlist(c.id, toast); }}
                style={{
                  position:'absolute', top:'10px', right:'10px',
                  width:'34px', height:'34px', borderRadius:'50%',
                  background:'rgba(6,8,15,0.6)',
                  border:'1px solid rgba(255,255,255,0.1)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'1rem', cursor:'pointer', zIndex:3,
                  color: wishlist.includes(c.id) ? '#ff6b9d' : 'rgba(255,255,255,0.7)',
                  transition:'transform 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform='scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
              >
                {wishlist.includes(c.id) ? '♥' : '♡'}
              </div>
            </div>

            {/* BODY */}
            <div style={{padding:'1.1rem 1.2rem 1.2rem'}}>
              <div style={{
                display:'flex', alignItems:'center', gap:'0.4rem', flexWrap:'wrap',
                marginBottom:'0.3rem',
              }}>
                <span style={{fontSize:'0.7rem', fontWeight:'600', textTransform:'uppercase', letterSpacing:'0.06em', color:'var(--muted2)'}}>{c.category}</span>
                {c.level && (
                  <span style={{
                    fontSize:'0.6rem', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.04em',
                    padding:'0.12rem 0.45rem', borderRadius:'100px',
                    background: 'var(--surface2)',
                    color: 'var(--muted)',
                    border:'1px solid var(--border)',
                  }}>{c.level}</span>
                )}
              </div>
              <div style={{
                fontFamily:'Georgia, serif', fontSize:'1rem', fontWeight:'700',
                lineHeight:'1.35', marginBottom:'0.4rem',
                display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden',
              }}>{c.title}</div>
              <div style={{fontSize:'0.8rem', color:'var(--muted)', marginBottom:'0.7rem'}}>{c.instructor}</div>
              <div style={{
                display:'flex', alignItems:'center', justifyContent:'space-between',
                borderTop:'1px solid var(--border)', paddingTop:'0.7rem',
                flexWrap:'wrap', gap:'0.3rem',
              }}>
                <span style={{fontSize:'0.78rem', color:'var(--muted)'}}>{c.duration}</span>
                <span style={{fontWeight:'700', color:'var(--teal)', fontSize:'0.9rem'}}>Free</span>
              </div>
              {prog > 0 && (
                <div style={{marginTop:'0.7rem', display:'flex', alignItems:'center', gap:'0.5rem'}}>
                  <div style={{flex:1, height:'4px', background:'var(--surface3)', borderRadius:'100px', overflow:'hidden'}}>
                    <div style={{width:`${prog}%`, height:'100%', borderRadius:'100px', background:'var(--gold)', transition:'width 0.6s'}}/>
                  </div>
                  <span style={{fontSize:'0.7rem', color:'var(--muted)', fontWeight:'600'}}>{prog}%</span>
                </div>
              )}
            </div>
          </div>
          );
        })}
      </div>

    </div>
  );
}
