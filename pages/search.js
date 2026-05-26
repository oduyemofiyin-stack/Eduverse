import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../context/AppContext';
import { useToast } from '../components/Toast';
import { CourseSkeleton } from '../components/Skeleton';
import courses from '../data/courses';

export default function Search() {
  const { wishlist, toggleWishlist, enrolled, getCourseProgress } = useApp();
  const toast = useToast();
  const router = useRouter();
  const { q } = router.query;

  const [search, setSearch] = useState(q || '');
  const [activeCat, setActiveCat] = useState('All');
  const [sortBy, setSortBy] = useState('relevance');
  const [duration, setDuration] = useState('All');
  const [minRating, setMinRating] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (q) setSearch(q);
  }, [q]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', ...new Set(courses.map(c => c.category))];
  const durations = ['All', 'Under 5 hrs', '5–10 hrs', '10–20 hrs', '20+ hrs'];

  const filtered = courses.filter(c => {
    const catMatch = activeCat === 'All' || c.category === activeCat;
    const q2 = search.toLowerCase();
    const searchMatch = !q2 ||
      c.title.toLowerCase().includes(q2) ||
      c.instructor.toLowerCase().includes(q2) ||
      c.category.toLowerCase().includes(q2) ||
      c.keywords.some(k => k.toLowerCase().includes(q2));
    const ratingMatch = c.rating >= minRating;
    const hrs = parseFloat(c.duration);
    const durMatch = duration === 'All' ||
      (duration === 'Under 5 hrs' && hrs < 5) ||
      (duration === '5–10 hrs' && hrs >= 5 && hrs <= 10) ||
      (duration === '10–20 hrs' && hrs > 10 && hrs <= 20) ||
      (duration === '20+ hrs' && hrs > 20);
    return catMatch && searchMatch && ratingMatch && durMatch;
  }).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'duration_asc') return parseFloat(a.duration) - parseFloat(b.duration);
    if (sortBy === 'duration_desc') return parseFloat(b.duration) - parseFloat(a.duration);
    return 0;
  });

  return (
    <div className="page-container" style={{maxWidth:'1240px', margin:'0 auto', padding:'2rem 1.2rem 4rem'}}>

      {/* HEADER */}
      <div style={{marginBottom:'1.5rem'}}>
        <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.6rem,4vw,2rem)', fontWeight:'700', marginBottom:'0.3rem'}}>
          🔍 Search Courses
        </h1>
        <p style={{color:'#7a80a0', fontSize:'0.88rem'}}>
          Find your perfect course from our library
        </p>
      </div>

      {/* SEARCH BAR */}
      <div style={{position:'relative', marginBottom:'1.5rem'}}>
        <span style={{position:'absolute', left:'1rem', top:'50%', transform:'translateY(-50%)', color:'#7a80a0', fontSize:'1.1rem'}}>⌕</span>
        <input
          type="text"
          placeholder="Search by title, instructor, or keyword…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          autoFocus
          style={{
            width:'100%', background:'#0d1117',
            border:'1px solid rgba(255,255,255,0.1)',
            borderRadius:'14px', padding:'1rem 1rem 1rem 3rem',
            fontSize:'1rem', color:'#eef0f8', outline:'none',
          }}
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            style={{
              position:'absolute', right:'1rem', top:'50%', transform:'translateY(-50%)',
              background:'none', border:'none', color:'#7a80a0', cursor:'pointer', fontSize:'1.1rem',
            }}
          >✕</button>
        )}
      </div>

      {/* FILTERS ROW */}
      <div style={{
        background:'#0d1117', border:'1px solid rgba(255,255,255,0.06)',
        borderRadius:'14px', padding:'1.2rem', marginBottom:'1.5rem',
      }}>
        <div className="filter-grid" style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(min(200px,100%), 1fr))', gap:'1rem'}}>

          {/* CATEGORY */}
          <div>
            <label style={{display:'block', fontSize:'0.74rem', fontWeight:'600', color:'#7a80a0', marginBottom:'0.4rem', textTransform:'uppercase', letterSpacing:'0.05em'}}>Category</label>
            <select
              value={activeCat}
              onChange={e => setActiveCat(e.target.value)}
              style={{
                width:'100%', background:'#161b26', border:'1px solid rgba(255,255,255,0.1)',
                borderRadius:'9px', padding:'0.55rem 0.8rem',
                fontSize:'0.85rem', color:'#eef0f8', outline:'none', cursor:'pointer',
              }}
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>

          {/* SORT BY */}
          <div>
            <label style={{display:'block', fontSize:'0.74rem', fontWeight:'600', color:'#7a80a0', marginBottom:'0.4rem', textTransform:'uppercase', letterSpacing:'0.05em'}}>Sort By</label>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              style={{
                width:'100%', background:'#161b26', border:'1px solid rgba(255,255,255,0.1)',
                borderRadius:'9px', padding:'0.55rem 0.8rem',
                fontSize:'0.85rem', color:'#eef0f8', outline:'none', cursor:'pointer',
              }}
            >
              <option value="relevance">Relevance</option>
              <option value="rating">Highest Rated</option>
              <option value="duration_asc">Shortest First</option>
              <option value="duration_desc">Longest First</option>
            </select>
          </div>

          {/* DURATION */}
          <div>
            <label style={{display:'block', fontSize:'0.74rem', fontWeight:'600', color:'#7a80a0', marginBottom:'0.4rem', textTransform:'uppercase', letterSpacing:'0.05em'}}>Duration</label>
            <select
              value={duration}
              onChange={e => setDuration(e.target.value)}
              style={{
                width:'100%', background:'#161b26', border:'1px solid rgba(255,255,255,0.1)',
                borderRadius:'9px', padding:'0.55rem 0.8rem',
                fontSize:'0.85rem', color:'#eef0f8', outline:'none', cursor:'pointer',
              }}
            >
              {durations.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>

          {/* MIN RATING */}
          <div>
            <label style={{display:'block', fontSize:'0.74rem', fontWeight:'600', color:'#7a80a0', marginBottom:'0.4rem', textTransform:'uppercase', letterSpacing:'0.05em'}}>Min Rating</label>
            <select
              value={minRating}
              onChange={e => setMinRating(parseFloat(e.target.value))}
              style={{
                width:'100%', background:'#161b26', border:'1px solid rgba(255,255,255,0.1)',
                borderRadius:'9px', padding:'0.55rem 0.8rem',
                fontSize:'0.85rem', color:'#eef0f8', outline:'none', cursor:'pointer',
              }}
            >
              <option value={0}>Any Rating</option>
              <option value={4}>4.0+</option>
              <option value={4.5}>4.5+</option>
              <option value={4.8}>4.8+</option>
            </select>
          </div>
        </div>

        {/* RESET FILTERS */}
        {(activeCat !== 'All' || sortBy !== 'relevance' || duration !== 'All' || minRating > 0) && (
          <button
            onClick={() => { setActiveCat('All'); setSortBy('relevance'); setDuration('All'); setMinRating(0); }}
            style={{
              marginTop:'0.8rem', fontSize:'0.78rem', color:'#ff6b9d',
              background:'none', border:'none', cursor:'pointer', textDecoration:'underline',
            }}
          >
            ✕ Reset all filters
          </button>
        )}
      </div>

      {/* RESULTS COUNT */}
      <div style={{fontSize:'0.82rem', color:'#7a80a0', marginBottom:'1rem'}}>
        {loading ? 'Searching...' : `${filtered.length} course${filtered.length !== 1 ? 's' : ''} found${search ? ` for "${search}"` : ''}`}
      </div>

      {/* RESULTS GRID */}
      <div className="course-card-grid" style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill, minmax(min(295px, 100%), 1fr))',
        gap:'1rem',
      }}>
        {loading ? (
          Array.from({length:6}).map((_,i) => <CourseSkeleton key={i}/>)
        ) : filtered.length === 0 ? (
          <div style={{gridColumn:'1/-1', textAlign:'center', padding:'4rem 1rem', color:'#7a80a0'}}>
            <div style={{fontSize:'3rem', marginBottom:'1rem'}}>🔍</div>
            <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.3rem', color:'#eef0f8', marginBottom:'0.4rem'}}>No courses found</h3>
            <p style={{marginBottom:'1rem'}}>Try different keywords or reset your filters</p>
            <button
              onClick={() => { setSearch(''); setActiveCat('All'); setSortBy('relevance'); setDuration('All'); setMinRating(0); }}
              style={{
                fontSize:'0.9rem', fontWeight:'600', padding:'0.75rem 1.5rem',
                borderRadius:'12px', border:'none', cursor:'pointer',
                background:'linear-gradient(135deg,#f0c040,#c8960a)', color:'#000',
              }}
            >Clear Search</button>
          </div>
        ) : filtered.map(c => (
          <div key={c.id}
            onClick={() => router.push(`/courses/${c.id}`)}
            style={{
              background:'#0d1117', border:'1px solid rgba(255,255,255,0.06)',
              borderRadius:'16px', overflow:'hidden', cursor:'pointer', transition:'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.borderColor='rgba(68,136,255,0.22)'; e.currentTarget.style.background='#161b26'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.06)'; e.currentTarget.style.background='#0d1117'; }}
          >
            <div style={{width:'100%', height:'175px', position:'relative', overflow:'hidden', background:'#161b26'}}>
              <img src={c.img} alt={c.title} style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
              <div style={{position:'absolute', inset:0, background:'linear-gradient(to top, rgba(6,8,15,0.65) 0%, transparent 55%)'}}/>
              {enrolled.includes(c.id) ? (
                <span style={{position:'absolute', top:'9px', left:'9px', fontSize:'0.67rem', fontWeight:'700', textTransform:'uppercase', padding:'0.22rem 0.65rem', borderRadius:'100px', background:'rgba(68,136,255,0.2)', color:'#4488ff', border:'1px solid rgba(68,136,255,0.3)'}}>✓ Enrolled</span>
              ) : (
                <span style={{position:'absolute', top:'9px', left:'9px', fontSize:'0.67rem', fontWeight:'700', textTransform:'uppercase', padding:'0.22rem 0.65rem', borderRadius:'100px', background:'rgba(0,212,170,0.18)', color:'#00d4aa', border:'1px solid rgba(0,212,170,0.28)'}}>Free</span>
              )}
              <div
                onClick={e => { e.stopPropagation(); toggleWishlist(c.id, toast); }}
                style={{
                  position:'absolute', top:'9px', right:'9px', width:'32px', height:'32px',
                  borderRadius:'50%', background:'rgba(6,8,15,0.72)', backdropFilter:'blur(8px)',
                  border:'1px solid rgba(255,255,255,0.13)', display:'flex', alignItems:'center',
                  justifyContent:'center', fontSize:'1rem', cursor:'pointer', zIndex:2,
                  color: wishlist.includes(c.id) ? '#ff6b9d' : '#eef0f8',
                }}
              >
                {wishlist.includes(c.id) ? '♥' : '♡'}
              </div>
            </div>
            <div style={{padding:'1rem'}}>
              <div style={{fontSize:'0.7rem', fontWeight:'600', textTransform:'uppercase', color:'#4488ff', marginBottom:'0.4rem'}}>{c.category}</div>
              <div style={{fontFamily:'Georgia, serif', fontSize:'0.98rem', fontWeight:'700', lineHeight:'1.35', marginBottom:'0.4rem', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden'}}>{c.title}</div>
              <div style={{fontSize:'0.78rem', color:'#7a80a0', marginBottom:'0.7rem'}}>by {c.instructor}</div>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', borderTop:'1px solid rgba(255,255,255,0.06)', paddingTop:'0.65rem', flexWrap:'wrap', gap:'0.3rem'}}>
                <span style={{display:'flex', alignItems:'center', gap:'0.25rem', fontSize:'0.78rem'}}>
                  <span style={{color:'#fbbf24', fontSize:'0.7rem'}}>★★★★★</span> {c.rating}
                </span>
                <span style={{fontSize:'0.76rem', color:'#7a80a0'}}>⏱ {c.duration}</span>
                <span style={{fontFamily:'Georgia, serif', fontSize:'0.92rem', fontWeight:'700', color:'#00d4aa'}}>Free</span>
              </div>
              {enrolled.includes(c.id) && (
                <div style={{marginTop:'0.7rem'}}>
                  <div style={{display:'flex', justifyContent:'space-between', fontSize:'0.72rem', color:'#7a80a0', marginBottom:'0.3rem'}}>
                    <span>Progress</span>
                    <span>{getCourseProgress(c.id, c.lessons.length)}%</span>
                  </div>
                  <div style={{width:'100%', height:'4px', background:'rgba(255,255,255,0.06)', borderRadius:'100px'}}>
                    <div style={{height:'100%', borderRadius:'100px', background:'linear-gradient(135deg,#4488ff,#00d4aa)', width:`${getCourseProgress(c.id, c.lessons.length)}%`, transition:'width 0.4s ease'}}/>
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