import { useRouter } from 'next/router';
import courses from '../data/courses';

export default function CourseRecommendations({ currentCourseId }) {
  const router = useRouter();
  const course = courses.find(c => c.id === parseInt(currentCourseId));
  if (!course) return null;

  let selected = [];
  let usedIds = new Set();

  const sameCat = courses.filter(c => c.id !== course.id && c.category === course.category);
  sameCat.slice(0, 3).forEach(c => { selected.push(c); usedIds.add(c.id); });

  if (selected.length < 3) {
    const need = 3 - selected.length;
    const byKeyword = courses
      .filter(c => c.id !== course.id && !usedIds.has(c.id) && c.keywords.some(k => course.keywords.includes(k)))
      .slice(0, need);
    byKeyword.forEach(c => { selected.push(c); usedIds.add(c.id); });
  }

  if (selected.length < 3) {
    const need = 3 - selected.length;
    const fill = courses
      .filter(c => c.id !== course.id && !usedIds.has(c.id))
      .sort((a, b) => b.rating - a.rating)
      .slice(0, need);
    selected = [...selected, ...fill];
  }

  if (selected.length === 0) return null;

  return (
    <div style={{padding:'2rem 1.2rem 3rem', maxWidth:'1100px', margin:'0 auto'}}>
      <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.2rem', fontWeight:'700', marginBottom:'1rem'}}>
        Recommended Courses
      </h2>
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill, minmax(min(260px, 100%), 1fr))',
        gap:'1rem',
      }}>
        {selected.map(c => (
          <div key={c.id}
            onClick={() => router.push(`/courses/${c.id}`)}
            style={{
              background:'#0d1117', border:'1px solid rgba(255,255,255,0.06)',
              borderRadius:'14px', overflow:'hidden', cursor:'pointer',
              transition:'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(68,136,255,0.22)'; e.currentTarget.style.transform='translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.06)'; e.currentTarget.style.transform='translateY(0)'; }}
          >
            <img src={c.img} alt={c.title} style={{width:'100%', height:'140px', objectFit:'cover', display:'block'}}/>
            <div style={{padding:'0.9rem'}}>
              <div style={{fontSize:'0.68rem', fontWeight:'600', textTransform:'uppercase', color:'#4488ff', marginBottom:'0.3rem'}}>{c.category}</div>
              <div style={{fontFamily:'Georgia, serif', fontSize:'0.92rem', fontWeight:'700', lineHeight:'1.3', marginBottom:'0.3rem', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden'}}>{c.title}</div>
              <div style={{fontSize:'0.76rem', color:'#7a80a0', marginBottom:'0.5rem'}}>by {c.instructor}</div>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <span style={{fontSize:'0.76rem'}}>{c.rating}</span>
                <span style={{fontSize:'0.76rem', color:'#00d4aa', fontWeight:'700'}}>Free</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
