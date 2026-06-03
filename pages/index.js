import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useApp } from '../context/AppContext';
import { useToast } from '../components/Toast';
import { CourseSkeleton } from '../components/Skeleton';
import { initScrollReveal, initCardTilt, initParallax, initMagneticButtons, initCustomCursor } from '../lib/animations';

import courses from '../data/courses';

const HeroScene = dynamic(() => import('../components/HeroScene'), { ssr: false });

function AnimatedNumber({ value, color }) {
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef(null);
  const revealed = useRef(false);
  const suffix = value.replace(/[\d]/g, '');
  const target = parseInt(value) || 0;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !revealed.current) {
        revealed.current = true;
        let start = 0;
        const duration = 1500;
        const step = Math.max(1, Math.floor(target / (duration / 16)));
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { start = target; clearInterval(timer); }
          setDisplayed(start);
        }, 16);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, target]);

  return (
    <span ref={ref} style={{ color, textShadow: `0 0 20px ${color}66` }}>
      {displayed}{suffix}
    </span>
  );
}

export default function Home() {
  const { wishlist, toggleWishlist, enrolled, getCourseProgress, theme } = useApp();
  const toast = useToast();
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('All');
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const heroRef = useRef(null);
  const isLight = theme === 'light';
  const [typewriter, setTypewriter] = useState('');
  const typewriterRef = useRef(null);

  const categories = ['All', ...new Set(courses.map(c => c.category))];

  useEffect(() => {
    // FIXME: this loading timer feels hacky but it works
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      initScrollReveal();
      initCardTilt();
      const parallaxCleanup = initParallax();
      initMagneticButtons();
      initCustomCursor();
      console.log('animations initialized yay');
      return () => {
        if (typeof parallaxCleanup === 'function') parallaxCleanup();
      };
    }
  }, [loading]);

  // Typewriter effect (kinda janky but whatever)
  useEffect(() => {
    const phrases = ['your pace.', 'zero cost.', 'anywhere.', 'your potential.'];
    let pi = 0, ci = 0;
    typewriterRef.current = setInterval(() => {
      const phrase = phrases[pi];
      if (ci <= phrase.length) {
        setTypewriter(phrase.slice(0, ci));
        ci++;
      } else {
        clearInterval(typewriterRef.current);
        setTimeout(() => {
          ci = 0;
          pi = (pi + 1) % phrases.length;
          typewriterRef.current = setInterval(() => {
            const p = phrases[pi];
            if (ci <= p.length) {
              setTypewriter(p.slice(0, ci));
              ci++;
            } else {
              clearInterval(typewriterRef.current);
            }
          }, 60);
        }, 2000);
      }
    }, 60);
    return () => clearInterval(typewriterRef.current);
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

      {/* HERO — Full-screen universe splash */}
      <div ref={heroRef} style={{
        position:'relative', overflow:'hidden',
        textAlign:'center',
        height:'100vh', minHeight:'600px',
        display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center',
      }}>
        <HeroScene />

        {/* HERO CONTENT */}
        <div style={{position:'relative', zIndex:1, maxWidth:'900px', margin:'0 auto', padding:'2rem 1.2rem'}} data-parallax-text>
          {/* BRAND BADGE */}
          <div className="reveal delay-1" style={{
            display:'inline-flex', alignItems:'center', gap:'6px',
            background:'rgba(68,136,255,0.1)', border:'1px solid rgba(68,136,255,0.2)',
            borderRadius:'100px', padding:'0.35rem 1rem 0.35rem 0.8rem',
            marginBottom:'1.5rem', fontSize:'0.7rem', fontWeight:'600',
            color:'#4488ff', textTransform:'uppercase', letterSpacing:'0.12em',
          }}>
          </div>

          <h1 className="reveal delay-2" style={{
            fontFamily:'Georgia, serif',
            fontSize:'clamp(2.8rem, 9vw, 6rem)',
            fontWeight:'700', lineHeight:'1.02',
            letterSpacing:'-0.03em', marginBottom:'0.8rem',
            color:'var(--text)',
          }}>
            Learn Without{' '}
            <span className="shimmer-text">Limits.</span>
          </h1>

          <div className="reveal delay-3" style={{
            fontSize:'clamp(1.1rem, 2.5vw, 1.3rem)',
            color:'var(--muted)', lineHeight:'1.8',
            marginBottom:'0.4rem', fontWeight:'400',
            minHeight:'2.2rem',
          }}>
            At{' '}
            <span style={{
              fontFamily:'Georgia, serif', fontStyle:'italic',
              background:'linear-gradient(135deg,var(--gold),var(--blue))',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
            }}>your</span>{' '}
            pace. At{' '}
            <span style={{
              fontFamily:'Georgia, serif', fontStyle:'italic',
              background:'linear-gradient(135deg,var(--gold),var(--blue))',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
            }}>zero</span>{' '}
            cost.
          </div>

          <p className="reveal delay-3" style={{
            fontSize:'clamp(0.9rem, 2vw, 1.05rem)',
            color:'var(--muted)', lineHeight:'1.85',
            maxWidth:'580px', margin:'0.5rem auto 2.2rem',
            fontWeight:'400',
          }}>
            World-class courses with real video lessons, reading materials, quizzes, and free certificates which is completely free forever.
          </p>

          <div className="reveal delay-4" style={{
            display:'flex', gap:'1rem',
            justifyContent:'center', flexWrap:'wrap',
          }}>
            <button
              className="magnetic glow-border"
              onClick={() => {
                document.getElementById('searchInput')?.focus();
                heroRef.current?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                fontSize:'0.95rem', fontWeight:'700',
                padding:'0.9rem 2.4rem', borderRadius:'14px',
                border:'none', cursor:'none',
                background:'linear-gradient(135deg,#f0c040,#c8960a)',
                color:'#000',
                boxShadow:'0 8px 30px rgba(240,192,64,0.4), 0 0 0 0 rgba(240,192,64,0)',
                transition:'all 0.3s',
                letterSpacing:'0.02em',
              }}>
              Explore Courses
            </button>
            <button
              className="magnetic"
              onClick={() => router.push('/enrolled')}
              style={{
                fontSize:'0.95rem', fontWeight:'600',
                padding:'0.9rem 2.2rem', borderRadius:'14px',
                border:'1px solid var(--border2)',
                cursor:'none', background:'var(--surface)',
                color:'var(--text)', transition:'all 0.3s',
                backdropFilter:'blur(10px)',
              }}>
              My Learning
            </button>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div style={{
          position:'absolute', bottom:'1.5rem', left:'50%',
          transform:'translateX(-50%)', color:'var(--muted2)',
          fontSize:'0.7rem', display:'flex', flexDirection:'column',
          alignItems:'center', gap:'0.2rem', zIndex:1,
          animation:'bob 2s ease-in-out infinite',
        }}>
          <span style={{fontSize:'0.65rem', letterSpacing:'0.08em', textTransform:'uppercase', opacity:0.6}}>Scroll</span>
          <span className="scroll-indicator" style={{fontSize:'1rem'}}>↓</span>
        </div>
      </div>

      {/* STATS */}
      <div className="hero-stats" style={{
        display:'grid', gridTemplateColumns:'repeat(3, 1fr)',
        gap:'1rem', padding:'0 1.2rem 3rem',
        maxWidth:'520px', margin:'0 auto',
      }}>
        {[
          {n:'20', l:'Expert Courses', color:'#4488ff'},
          {n:'100%', l:'Free', color:'#f0c040'},
          {n:'9', l:'Categories', color:'#ff6b9d'},
        ].map((s, i) => (
          <div key={s.l}
            className={`reveal-scale delay-${i+1} glass`}
            style={{
              textAlign:'center',
              borderRadius:'16px', padding:'1.3rem',
              transition:'transform 0.3s, box-shadow 0.3s',
              cursor:'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform='translateY(-8px)';
              e.currentTarget.style.boxShadow=`0 20px 50px ${s.color}22`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform='translateY(0)';
              e.currentTarget.style.boxShadow='none';
            }}
          >
            <div style={{
              fontFamily:'Georgia, serif', fontSize:'2.4rem',
              fontWeight:'700', color:s.color,
              textShadow:`0 0 20px ${s.color}44`,
              lineHeight:'1',
            }}>
              <AnimatedNumber value={s.n} color={s.color} />
            </div>
            <div style={{
              fontSize:'0.72rem', color:'var(--muted)', marginTop:'6px',
              letterSpacing:'0.06em', textTransform:'uppercase',
              fontWeight:'500',
            }}>{s.l}</div>
          </div>
        ))}
      </div>

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
          <div className="reveal" style={{maxWidth:'1240px', margin:'0 auto', padding:'0 1.2rem 1.5rem'}}>
            <div className="glass" style={{
              borderRadius:'16px', padding:'1.2rem 1.5rem',
              border:'1px solid var(--border)',
              display:'flex', alignItems:'center', justifyContent:'space-between',
              flexWrap:'wrap', gap:'1rem',
            }}>
              <div style={{display:'flex', alignItems:'center', gap:'1rem', flex:1, minWidth:'200px'}}>
                <div style={{
                  width:'48px', height:'48px', borderRadius:'12px', overflow:'hidden', flexShrink:0,
                  background:'var(--surface2)',
                }}>
                  <img src={course.img} alt="" loading="lazy" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                </div>
                <div>
                  <div style={{fontSize:'0.72rem', fontWeight:'600', textTransform:'uppercase', color:'var(--blue)', letterSpacing:'0.06em', marginBottom:'0.15rem'}}>Continue Learning</div>
                  <div style={{fontWeight:'700', fontSize:'0.9rem', lineHeight:'1.3'}}>{course.title}</div>
                  <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginTop:'0.3rem'}}>
                    <div style={{flex:1, maxWidth:'200px', height:'4px', background:'var(--surface3)', borderRadius:'100px', overflow:'hidden'}}>
                      <div style={{width:`${prog}%`, height:'100%', borderRadius:'100px', background:'linear-gradient(90deg,var(--blue),var(--teal))', transition:'width 0.6s'}}/>
                    </div>
                    <span style={{fontSize:'0.72rem', color:'var(--muted)', fontWeight:'600'}}>{prog}%</span>
                  </div>
                </div>
              </div>
              <button onClick={() => router.push(`/courses/${resumeId}`)}
                style={{
                  fontSize:'0.85rem', fontWeight:'700', padding:'0.6rem 1.4rem',
                  borderRadius:'10px', border:'none', cursor:'pointer',
                  background:'linear-gradient(135deg,var(--blue),#3366dd)', color:'#fff',
                  whiteSpace:'nowrap', transition:'transform 0.2s',
                  fontFamily:'inherit',
                }}
                onMouseEnter={e => e.currentTarget.style.transform='scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
              >Continue</button>
            </div>
          </div>
        );
      })()}

      {/* SEARCH */}
      <div className="reveal" style={{maxWidth:'1240px', margin:'0 auto', padding:'0 1.2rem 1.2rem'}}>
        <div style={{position:'relative', marginBottom:'0.9rem'}}>
          <svg style={{
            position:'absolute', left:'1.2rem', top:'50%',
            transform:'translateY(-50%)', color:'var(--muted)',
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
              borderRadius:'14px', padding:'0.95rem 1rem 0.95rem 3.2rem',
              fontSize:'0.95rem', color:'var(--text)', outline:'none',
              transition:'border 0.2s, box-shadow 0.2s',
              backdropFilter:'blur(10px)',
            }}
            onFocus={e => {
              e.target.style.borderColor='rgba(68,136,255,0.5)';
              e.target.style.boxShadow='0 0 0 3px rgba(68,136,255,0.1), 0 8px 30px rgba(0,0,0,0.1)';
            }}
            onBlur={e => {
              e.target.style.borderColor='var(--border)';
              e.target.style.boxShadow='none';
            }}
          />
        </div>

        {/* FILTERS */}
        <div style={{
          display:'flex', gap:'0.5rem',
          overflowX:'auto', paddingBottom:'0.3rem',
          scrollbarWidth:'none',
        }}>
          <span style={{
            fontSize:'0.76rem', color:'var(--muted)',
            marginRight:'0.2rem', whiteSpace:'nowrap',
            alignSelf:'center', letterSpacing:'0.05em',
            textTransform:'uppercase', fontWeight:'500',
          }}>Filter:</span>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCat(cat)} style={{
              fontSize:'0.76rem', fontWeight:'600',
              padding:'0.4rem 1rem', borderRadius:'100px',
              border: activeCat === cat ? 'none' : '1px solid var(--border)',
              background: activeCat === cat
                ? 'linear-gradient(135deg,#4488ff,#3366dd)'
                : 'var(--surface)',
              color: activeCat === cat ? '#fff' : 'var(--muted)',
              cursor:'none', whiteSpace:'nowrap', flexShrink:0,
              transition:'all 0.25s',
              boxShadow: activeCat === cat ? '0 4px 16px rgba(68,136,255,0.35)' : 'none',
              backdropFilter:'blur(8px)',
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* RESULTS INFO */}
      <div style={{
        fontSize:'0.8rem', color:'var(--muted)',
        padding:'0 1.2rem', maxWidth:'1240px',
        margin:'0 auto 0.8rem',
        letterSpacing:'0.03em',
      }}>
        {search || activeCat !== 'All'
          ? `${filtered.length} course${filtered.length !== 1 ? 's' : ''} found`
          : `${courses.length} courses available`}
      </div>

      {/* COURSE GRID — desktop */}
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
        gap:'1.3rem', padding:'0 1.2rem 2rem',
        maxWidth:'1240px', margin:'0 auto',
      }} className="course-grid-desktop">
        {loading ? (
          Array.from({length:6}).map((_,i) => <CourseSkeleton key={i}/>)
        ) : filtered.length === 0 ? (
          <div style={{gridColumn:'1/-1', textAlign:'center', padding:'4rem 2rem', color:'var(--muted)'}}>
            <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.4rem', color:'var(--text)', marginBottom:'0.4rem'}}>No courses found</h3>
            <p style={{marginBottom:'1.2rem'}}>Try a different keyword or category</p>
            <button onClick={() => { setSearch(''); setActiveCat('All'); }} style={{
              fontSize:'0.85rem', fontWeight:'600', padding:'0.6rem 1.4rem',
              borderRadius:'10px', border:'none', cursor:'pointer',
              background:'linear-gradient(135deg,var(--blue),#3366dd)', color:'#fff',
            }}>Reset Filters</button>
          </div>
        ) : filtered.map((c, i) => {
          const prog = enrolled.includes(c.id) ? getCourseProgress(c.id, c.lessons.length) : 0;
          return (
          <div
            key={c.id}
            className="tilt-card reveal list-item"
            style={{
              borderRadius:'18px', overflow:'hidden',
              cursor:'none', position:'relative',
            }}
            onClick={() => router.push(`/courses/${c.id}`)}
          >
            <div data-tilt-inner style={{
              position:'absolute', inset:0, borderRadius:'18px',
              pointerEvents:'none', zIndex:2, transition:'background 0.1s',
            }}/>

            <div style={{
              background:'var(--card-bg)',
              border:'1px solid var(--border)',
              borderRadius:'18px', overflow:'hidden',
              transition:'border-color 0.3s, box-shadow 0.3s',
              boxShadow: isLight ? '0 4px 20px rgba(0,0,0,0.06)' : '0 4px 20px rgba(0,0,0,0.2)',
              height:'100%', position:'relative',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor='rgba(68,136,255,0.25)';
                e.currentTarget.style.boxShadow='0 12px 40px rgba(68,136,255,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor='var(--border)';
                e.currentTarget.style.boxShadow= isLight ? '0 4px 20px rgba(0,0,0,0.06)' : '0 4px 20px rgba(0,0,0,0.2)';
              }}
            >
              {/* THUMBNAIL */}
              <div className="blur-load loaded" style={{
                width:'100%', height:'180px',
                position:'relative', overflow:'hidden',
                background:'var(--surface2)',
              }}>
                <img
                  src={c.img} alt={c.title} loading="lazy"
                  style={{
                    width:'100%', height:'100%', objectFit:'cover',
                    display:'block', transition:'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={e => e.target.style.transform='scale(1.12)'}
                  onMouseLeave={e => e.target.style.transform='scale(1)'}
                />
                <div style={{
                  position:'absolute', inset:0,
                  background:'linear-gradient(to top, rgba(6,8,15,0.8) 0%, rgba(6,8,15,0.15) 45%, transparent 100%)',
                }}/>
                {/* BADGE */}
                {enrolled.includes(c.id) ? (
                  <span style={{
                    position:'absolute', top:'10px', left:'10px',
                    fontSize:'0.65rem', fontWeight:'700', letterSpacing:'0.08em',
                    textTransform:'uppercase', padding:'0.25rem 0.7rem',
                    borderRadius:'100px', background:'rgba(68,136,255,0.25)',
                    color:'#4488ff', border:'1px solid rgba(68,136,255,0.4)',
                    backdropFilter:'blur(10px)',
                  }} className="badge-pulse">Enrolled</span>
                ) : (
                  <span style={{
                    position:'absolute', top:'10px', left:'10px',
                    fontSize:'0.65rem', fontWeight:'700', letterSpacing:'0.08em',
                    textTransform:'uppercase', padding:'0.25rem 0.7rem',
                    borderRadius:'100px', background:'rgba(0,212,170,0.2)',
                    color:'#00d4aa', border:'1px solid rgba(0,212,170,0.35)',
                    backdropFilter:'blur(10px)',
                  }}>Free</span>
                )}
                {/* WISHLIST HEART */}
                <div
                  onClick={e => { e.stopPropagation(); toggleWishlist(c.id, toast); }}
                  style={{
                    position:'absolute', top:'10px', right:'10px',
                    width:'34px', height:'34px', borderRadius:'50%',
                    background:'rgba(6,8,15,0.55)', backdropFilter:'blur(12px)',
                    border:'1px solid rgba(255,255,255,0.15)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:'1rem', cursor:'none', zIndex:3,
                    color: wishlist.includes(c.id) ? '#ff6b9d' : 'rgba(255,255,255,0.8)',
                    transition:'all 0.25s',
                  }}

                  onMouseEnter={e => { e.currentTarget.style.transform='scale(1.15)'; e.currentTarget.style.background='rgba(6,8,15,0.7)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.background='rgba(6,8,15,0.55)'; }}
                >
                  {wishlist.includes(c.id) ? '♥' : '♡'}
                </div>
              </div>

              {/* BODY */}
              <div style={{padding:'1.1rem 1.2rem 1.2rem'}}>
                <div style={{
                  display:'flex', alignItems:'center', gap:'0.4rem', flexWrap:'wrap',
                  marginBottom:'0.35rem',
                }}>
                  <span style={{fontSize:'0.7rem', fontWeight:'600', textTransform:'uppercase', letterSpacing:'0.07em', color:'var(--blue)'}}>{c.category}</span>
                  {c.level && (
                    <span style={{
                      fontSize:'0.6rem', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.05em',
                      padding:'0.12rem 0.45rem', borderRadius:'100px',
                      background: c.level === 'beginner' ? 'rgba(0,212,170,0.15)' : c.level === 'intermediate' ? 'rgba(240,192,64,0.15)' : 'rgba(255,107,157,0.15)',
                      color: c.level === 'beginner' ? '#00d4aa' : c.level === 'intermediate' ? '#f0c040' : '#ff6b9d',
                      border: c.level === 'beginner' ? '1px solid rgba(0,212,170,0.25)' : c.level === 'intermediate' ? '1px solid rgba(240,192,64,0.25)' : '1px solid rgba(255,107,157,0.25)',
                    }}>{c.level}</span>
                  )}
                </div>
                <div style={{
                  fontFamily:'Georgia, serif', fontSize:'1rem', fontWeight:'700',
                  lineHeight:'1.35', marginBottom:'0.4rem',
                  display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden',
                }}>{c.title}</div>
                <div style={{fontSize:'0.8rem', color:'var(--muted)', marginBottom:'0.7rem'}}>by {c.instructor}</div>
                <div style={{
                  display:'flex', alignItems:'center', justifyContent:'space-between',
                  borderTop:'1px solid var(--border)', paddingTop:'0.7rem',
                  flexWrap:'wrap', gap:'0.3rem',
                }}>
                  <span style={{fontSize:'0.78rem', color:'var(--gold)'}}><span style={{color:'var(--muted)'}}>{c.rating}</span></span>
                  <span style={{fontSize:'0.76rem', color:'var(--muted)'}}>{c.duration}</span>
                  <span style={{fontFamily:'Georgia, serif', fontWeight:'700', color:'var(--teal)', fontSize:'0.92rem'}}>Free</span>
                </div>
                {prog > 0 && (
                  <div style={{marginTop:'0.7rem', display:'flex', alignItems:'center', gap:'0.5rem'}}>
                    <div style={{flex:1, height:'4px', background:'var(--surface3)', borderRadius:'100px', overflow:'hidden'}}>
                      <div style={{width:`${prog}%`, height:'100%', borderRadius:'100px', background:'linear-gradient(90deg,var(--blue),var(--teal))', transition:'width 0.6s'}}/>
                    </div>
                    <span style={{fontSize:'0.7rem', color:'var(--muted)', fontWeight:'600'}}>{prog}%</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          );
        })}
      </div>

      {/* COURSE CAROUSEL — mobile */}
      <div style={{padding:'0 0 3rem'}} className="carousel-section-mobile">
        <div style={{padding:'0 1.2rem', marginBottom:'0.8rem'}}>
          <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.1rem', fontWeight:'700'}}>
            {search || activeCat !== 'All' ? 'Search Results' : 'Browse Courses'}
          </h2>
        </div>
        <div className="carousel">
          {filtered.length === 0 ? (
            <div style={{padding:'2rem 1.2rem', color:'var(--muted)', fontSize:'0.88rem', width:'100%', textAlign:'center'}}>No courses found</div>
          ) : filtered.map((c, i) => {
            const prog = enrolled.includes(c.id) ? getCourseProgress(c.id, c.lessons.length) : 0;
            return (
              <div key={c.id} onClick={() => router.push(`/courses/${c.id}`)}
                className="list-item"
                style={{background:'var(--card-bg)', borderRadius:'16px', overflow:'hidden', border:'1px solid var(--border)', cursor:'pointer'}}
              >
                <div style={{width:'100%', height:'150px', overflow:'hidden', position:'relative', background:'var(--surface2)'}}>
                  <img src={c.img} alt={c.title} loading="lazy" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                  <span style={{position:'absolute', top:'8px', left:'8px', fontSize:'0.6rem', fontWeight:'700', padding:'0.2rem 0.6rem', borderRadius:'100px', background:'rgba(0,212,170,0.2)', color:'#00d4aa', border:'1px solid rgba(0,212,170,0.35)'}}>Free</span>
                </div>
                <div style={{padding:'0.8rem'}}>
                  <div style={{display:'flex', alignItems:'center', gap:'0.3rem', flexWrap:'wrap', marginBottom:'0.2rem'}}>
                    <span style={{fontSize:'0.65rem', fontWeight:'600', textTransform:'uppercase', color:'var(--blue)'}}>{c.category}</span>
                    {c.level && (
                      <span style={{
                        fontSize:'0.55rem', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.04em',
                        padding:'0.1rem 0.4rem', borderRadius:'100px',
                        background: c.level === 'beginner' ? 'rgba(0,212,170,0.15)' : c.level === 'intermediate' ? 'rgba(240,192,64,0.15)' : 'rgba(255,107,157,0.15)',
                        color: c.level === 'beginner' ? '#00d4aa' : c.level === 'intermediate' ? '#f0c040' : '#ff6b9d',
                        border: c.level === 'beginner' ? '1px solid rgba(0,212,170,0.25)' : c.level === 'intermediate' ? '1px solid rgba(240,192,64,0.25)' : '1px solid rgba(255,107,157,0.25)',
                      }}>{c.level}</span>
                    )}
                  </div>
                  <div style={{fontWeight:'700', fontSize:'0.9rem', lineHeight:'1.3', marginBottom:'0.2rem', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden'}}>{c.title}</div>
                  <div style={{fontSize:'0.75rem', color:'var(--muted)'}}>{c.duration}</div>
                  {prog > 0 && (
                    <div style={{marginTop:'0.5rem', height:'3px', background:'var(--surface3)', borderRadius:'100px', overflow:'hidden'}}>
                      <div style={{width:`${prog}%`, height:'100%', borderRadius:'100px', background:'linear-gradient(90deg,var(--blue),var(--teal))'}}/>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}