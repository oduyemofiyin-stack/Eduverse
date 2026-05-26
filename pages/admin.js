import { useState } from 'react';
import { useRouter } from 'next/router';
import courses from '../data/courses';

const ADMIN_USER = process.env.NEXT_PUBLIC_ADMIN_USER || 'EMMANUEL';
const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASS || 'Emmanuel@007';

export default function Admin() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [courseList, setCourseList] = useState(courses);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title:'', instructor:'', category:'', duration:'', description:'', img:'', rating:4.5,
  });

  function handleLogin() {
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  }

  function startEdit(course) {
    setEditingId(course.id);
    setEditForm({
      title: course.title,
      instructor: course.instructor,
      category: course.category,
      duration: course.duration,
      description: course.description,
      img: course.img,
      rating: course.rating,
    });
  }

  function saveEdit(id) {
    setCourseList(prev => prev.map(c => c.id === id ? { ...c, ...editForm } : c));
    setEditingId(null);
  }

  function deleteCourse(id) {
    if (window.confirm('Are you sure you want to delete this course?')) {
      setCourseList(prev => prev.filter(c => c.id !== id));
    }
  }

  function addCourse() {
    if (!newCourse.title || !newCourse.instructor) { setError('Title and instructor are required'); return; }
    const id = Math.max(...courseList.map(c => c.id)) + 1;
    setCourseList(prev => [...prev, { ...newCourse, id, keywords:[], lessons:[], reading:[], quiz:[] }]);
    setNewCourse({ title:'', instructor:'', category:'', duration:'', description:'', img:'', rating:4.5 });
    setShowAddForm(false);
    setError('');
  }

  const inp = {
    background:'#161b26', border:'1px solid rgba(255,255,255,0.13)',
    borderRadius:'9px', padding:'0.6rem 0.8rem',
    fontSize:'0.85rem', color:'#eef0f8', outline:'none',
    fontFamily:'inherit', width:'100%',
  };

  // LOGIN PAGE
  if (!loggedIn) {
    return (
      <div style={{minHeight:'100vh', background:'#06080f', display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem',
        backgroundImage:'radial-gradient(ellipse 70% 50% at 15% 0%, rgba(68,136,255,0.1) 0%, transparent 60%)'}}>
        <div style={{background:'#0d1117', border:'1px solid rgba(255,255,255,0.13)', borderRadius:'20px', padding:'2.5rem', width:'100%', maxWidth:'400px'}}>
          <div style={{textAlign:'center', marginBottom:'1.8rem'}}>
            <div style={{fontSize:'2.5rem', marginBottom:'0.5rem'}}>🛡️</div>
            <h1 style={{fontFamily:'Georgia, serif', fontSize:'1.5rem', fontWeight:'700', marginBottom:'0.3rem'}}>Admin Dashboard</h1>
            <p style={{fontSize:'0.83rem', color:'#7a80a0'}}>Restricted access — Eduverse staff only</p>
          </div>
          {error && (
            <div style={{background:'rgba(255,107,157,0.1)', border:'1px solid rgba(255,107,157,0.3)', borderRadius:'10px', padding:'0.65rem 1rem', fontSize:'0.82rem', color:'#ff6b9d', marginBottom:'1rem'}}>
              {error}
            </div>
          )}
          <div style={{display:'flex', flexDirection:'column', gap:'0.9rem'}}>
            <div>
              <label style={{display:'block', fontSize:'0.76rem', fontWeight:'600', color:'#7a80a0', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>Username</label>
              <input type="text" placeholder="Admin username" value={username}
                onChange={e => setUsername(e.target.value)} style={inp}/>
            </div>
            <div>
              <label style={{display:'block', fontSize:'0.76rem', fontWeight:'600', color:'#7a80a0', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>Password</label>
              <input type="password" placeholder="Admin password" value={password}
                onChange={e => setPassword(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
                style={inp}/>
            </div>
            <button onClick={handleLogin} style={{
              width:'100%', padding:'0.88rem', borderRadius:'12px', border:'none', cursor:'pointer',
              background:'linear-gradient(135deg,#4488ff,#3366dd)', color:'#fff',
              fontFamily:'inherit', fontSize:'0.95rem', fontWeight:'700',
              boxShadow:'0 8px 22px rgba(68,136,255,0.28)', marginTop:'0.3rem',
            }}>Sign In to Dashboard</button>
            <button onClick={() => router.push('/')} style={{
              width:'100%', padding:'0.7rem', borderRadius:'12px',
              border:'1px solid rgba(255,255,255,0.13)', background:'transparent',
              color:'#7a80a0', fontFamily:'inherit', fontSize:'0.85rem', cursor:'pointer',
            }}>← Back to Eduverse</button>
          </div>
        </div>
      </div>
    );
  }

  // DASHBOARD
  const totalCourses = courseList.length;
  const categories = [...new Set(courseList.map(c => c.category))];
  const avgRating = (courseList.reduce((s, c) => s + c.rating, 0) / totalCourses).toFixed(1);

  return (
    <div style={{minHeight:'100vh', background:'#06080f', color:'#eef0f8'}}>

      {/* ADMIN HEADER */}
      <header style={{
        height:'64px', padding:'0 1.5rem',
        display:'flex', alignItems:'center', justifyContent:'space-between',
        background:'rgba(6,8,15,0.95)', backdropFilter:'blur(20px)',
        borderBottom:'1px solid rgba(255,255,255,0.06)',
        position:'sticky', top:0, zIndex:100,
      }}>
        <div style={{display:'flex', alignItems:'center', gap:'0.8rem'}}>
          <span style={{fontSize:'1.3rem'}}>🛡️</span>
          <span style={{fontFamily:'Georgia, serif', fontSize:'1.1rem', fontWeight:'700', background:'linear-gradient(135deg,#f0c040,#4488ff)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>
            Eduverse Admin
          </span>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'0.8rem'}}>
          <span style={{fontSize:'0.82rem', color:'#7a80a0'}}>Welcome, <strong style={{color:'#eef0f8'}}>Emmanuel</strong></span>
          <button onClick={() => router.push('/')} style={{fontSize:'0.8rem', fontWeight:'600', padding:'0.4rem 0.9rem', borderRadius:'8px', border:'1px solid rgba(255,255,255,0.13)', background:'transparent', color:'#7a80a0', cursor:'pointer'}}>
            ← Back to Site
          </button>
          <button onClick={() => setLoggedIn(false)} style={{fontSize:'0.8rem', fontWeight:'600', padding:'0.4rem 0.9rem', borderRadius:'8px', border:'none', background:'rgba(255,107,107,0.15)', color:'#ff6b6b', cursor:'pointer'}}>
            Sign Out
          </button>
        </div>
      </header>

      <div style={{maxWidth:'1200px', margin:'0 auto', padding:'2rem 1.5rem 4rem'}}>

        {/* TABS */}
        <div style={{display:'flex', gap:'0.5rem', marginBottom:'2rem', flexWrap:'wrap'}}>
          {[
            {id:'overview', label:'📊 Overview'},
            {id:'courses', label:'📚 Courses'},
            {id:'add', label:'➕ Add Course'},
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              fontSize:'0.85rem', fontWeight:'600', padding:'0.6rem 1.2rem',
              borderRadius:'10px', border:'none', cursor:'pointer',
              background: activeTab === tab.id ? '#4488ff' : '#161b26',
              color: activeTab === tab.id ? '#fff' : '#7a80a0',
            }}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div>
            <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.4rem', fontWeight:'700', marginBottom:'1.5rem'}}>Dashboard Overview</h2>
            <div className="admin-grid" style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(min(200px,100%), 1fr))', gap:'1rem', marginBottom:'2rem'}}>
              {[
                {ico:'📚', label:'Total Courses', value:totalCourses, color:'#4488ff'},
                {ico:'🗂️', label:'Categories', value:categories.length, color:'#f0c040'},
                {ico:'⭐', label:'Avg Rating', value:avgRating, color:'#00d4aa'},
                {ico:'🆓', label:'Free Courses', value:totalCourses, color:'#ff6b9d'},
              ].map(s => (
                <div key={s.label} style={{background:'#0d1117', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'14px', padding:'1.3rem', textAlign:'center'}}>
                  <div style={{fontSize:'2rem', marginBottom:'0.4rem'}}>{s.ico}</div>
                  <div style={{fontFamily:'Georgia, serif', fontSize:'1.8rem', fontWeight:'700', color:s.color}}>{s.value}</div>
                  <div style={{fontSize:'0.75rem', color:'#7a80a0', marginTop:'0.2rem'}}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* CATEGORIES BREAKDOWN */}
            <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.1rem', fontWeight:'700', marginBottom:'1rem'}}>Courses by Category</h3>
            <div style={{display:'flex', flexDirection:'column', gap:'0.7rem'}}>
              {categories.map(cat => {
                const count = courseList.filter(c => c.category === cat).length;
                const pct = Math.round((count / totalCourses) * 100);
                return (
                  <div key={cat} style={{background:'#0d1117', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'12px', padding:'1rem'}}>
                    <div style={{display:'flex', justifyContent:'space-between', marginBottom:'0.5rem'}}>
                      <span style={{fontSize:'0.85rem', fontWeight:'600'}}>{cat}</span>
                      <span style={{fontSize:'0.82rem', color:'#7a80a0'}}>{count} course{count !== 1 ? 's' : ''} · {pct}%</span>
                    </div>
                    <div style={{width:'100%', height:'6px', background:'rgba(255,255,255,0.06)', borderRadius:'100px'}}>
                      <div style={{height:'100%', borderRadius:'100px', background:'linear-gradient(135deg,#4488ff,#00d4aa)', width:`${pct}%`, transition:'width 0.4s'}}/>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* COURSES TAB */}
        {activeTab === 'courses' && (
          <div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'1.5rem', flexWrap:'wrap', gap:'1rem'}}>
              <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.4rem', fontWeight:'700'}}>Manage Courses ({courseList.length})</h2>
              <button onClick={() => setActiveTab('add')} style={{
                fontSize:'0.85rem', fontWeight:'600', padding:'0.6rem 1.2rem',
                borderRadius:'10px', border:'none', cursor:'pointer',
                background:'linear-gradient(135deg,#f0c040,#c8960a)', color:'#000',
              }}>➕ Add New Course</button>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:'0.8rem'}}>
              {courseList.map(c => (
                <div key={c.id} style={{background:'#0d1117', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'14px', padding:'1.2rem'}}>
                  {editingId === c.id ? (
                    // EDIT MODE
                    <div style={{display:'flex', flexDirection:'column', gap:'0.8rem'}}>
                      <div className="admin-grid" style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(min(200px,100%), 1fr))', gap:'0.8rem'}}>
                        {[
                          {key:'title', label:'Title', type:'text'},
                          {key:'instructor', label:'Instructor', type:'text'},
                          {key:'category', label:'Category', type:'text'},
                          {key:'duration', label:'Duration', type:'text'},
                          {key:'rating', label:'Rating', type:'number'},
                          {key:'img', label:'Image URL', type:'text'},
                        ].map(field => (
                          <div key={field.key}>
                            <label style={{display:'block', fontSize:'0.72rem', fontWeight:'600', color:'#7a80a0', marginBottom:'0.3rem', textTransform:'uppercase'}}>{field.label}</label>
                            <input type={field.type} value={editForm[field.key]} onChange={e => setEditForm(p => ({...p, [field.key]: e.target.value}))} style={inp}/>
                          </div>
                        ))}
                      </div>
                      <div>
                        <label style={{display:'block', fontSize:'0.72rem', fontWeight:'600', color:'#7a80a0', marginBottom:'0.3rem', textTransform:'uppercase'}}>Description</label>
                        <textarea value={editForm.description} onChange={e => setEditForm(p => ({...p, description: e.target.value}))}
                          style={{...inp, minHeight:'80px', resize:'vertical'}}/>
                      </div>
                      <div style={{display:'flex', gap:'0.7rem'}}>
                        <button onClick={() => saveEdit(c.id)} style={{fontSize:'0.84rem', fontWeight:'600', padding:'0.55rem 1.2rem', borderRadius:'9px', border:'none', cursor:'pointer', background:'#00d4aa', color:'#000'}}>✓ Save</button>
                        <button onClick={() => setEditingId(null)} style={{fontSize:'0.84rem', fontWeight:'600', padding:'0.55rem 1.2rem', borderRadius:'9px', border:'none', cursor:'pointer', background:'#1e2535', color:'#eef0f8'}}>Cancel</button>
                      </div>
                    </div>
                  ) : (
                    // VIEW MODE
                    <div style={{display:'flex', alignItems:'center', gap:'1rem', flexWrap:'wrap'}}>
                      <img src={c.img} alt={c.title} style={{width:'70px', height:'50px', borderRadius:'8px', objectFit:'cover', flexShrink:0}}
                        onError={e => { e.target.style.display='none'; }}/>
                      <div style={{flex:1, minWidth:'150px'}}>
                        <div style={{fontFamily:'Georgia, serif', fontSize:'0.95rem', fontWeight:'700', marginBottom:'0.2rem'}}>{c.title}</div>
                        <div style={{fontSize:'0.78rem', color:'#7a80a0'}}>by {c.instructor} · {c.category} · {c.duration} · ⭐ {c.rating}</div>
                      </div>
                      <div style={{display:'flex', gap:'0.5rem', flexShrink:0}}>
                        <button onClick={() => startEdit(c)} style={{fontSize:'0.8rem', fontWeight:'600', padding:'0.45rem 0.9rem', borderRadius:'8px', border:'none', cursor:'pointer', background:'rgba(68,136,255,0.15)', color:'#4488ff'}}>✏️ Edit</button>
                        <button onClick={() => deleteCourse(c.id)} style={{fontSize:'0.8rem', fontWeight:'600', padding:'0.45rem 0.9rem', borderRadius:'8px', border:'none', cursor:'pointer', background:'rgba(255,107,107,0.15)', color:'#ff6b6b'}}>🗑️ Delete</button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ADD COURSE TAB */}
        {activeTab === 'add' && (
          <div>
            <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.4rem', fontWeight:'700', marginBottom:'1.5rem'}}>➕ Add New Course</h2>
            {error && (
              <div style={{background:'rgba(255,107,157,0.1)', border:'1px solid rgba(255,107,157,0.3)', borderRadius:'10px', padding:'0.65rem 1rem', fontSize:'0.82rem', color:'#ff6b9d', marginBottom:'1rem'}}>
                {error}
              </div>
            )}
            <div style={{background:'#0d1117', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'16px', padding:'1.5rem'}}>
              <div className="admin-grid" style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(min(220px,100%), 1fr))', gap:'1rem', marginBottom:'1rem'}}>
                {[
                  {key:'title', label:'Course Title', placeholder:'e.g. React for Beginners'},
                  {key:'instructor', label:'Instructor Name', placeholder:'e.g. Jane Doe'},
                  {key:'category', label:'Category', placeholder:'e.g. Web Development'},
                  {key:'duration', label:'Duration', placeholder:'e.g. 5 hours'},
                  {key:'rating', label:'Rating (0-5)', placeholder:'e.g. 4.8'},
                  {key:'img', label:'Image URL', placeholder:'https://...'},
                ].map(field => (
                  <div key={field.key}>
                    <label style={{display:'block', fontSize:'0.74rem', fontWeight:'600', color:'#7a80a0', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>{field.label}</label>
                    <input
                      type={field.key === 'rating' ? 'number' : 'text'}
                      placeholder={field.placeholder}
                      value={newCourse[field.key]}
                      onChange={e => setNewCourse(p => ({...p, [field.key]: e.target.value}))}
                      style={inp}
                    />
                  </div>
                ))}
              </div>
              <div style={{marginBottom:'1.2rem'}}>
                <label style={{display:'block', fontSize:'0.74rem', fontWeight:'600', color:'#7a80a0', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>Description</label>
                <textarea
                  placeholder="Course description…"
                  value={newCourse.description}
                  onChange={e => setNewCourse(p => ({...p, description: e.target.value}))}
                  style={{...inp, minHeight:'100px', resize:'vertical'}}
                />
              </div>

              {/* PREVIEW */}
              {newCourse.title && (
                <div style={{background:'#161b26', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'12px', padding:'1rem', marginBottom:'1.2rem'}}>
                  <div style={{fontSize:'0.74rem', color:'#7a80a0', marginBottom:'0.5rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>Preview</div>
                  <div style={{fontFamily:'Georgia, serif', fontSize:'1rem', fontWeight:'700', marginBottom:'0.2rem'}}>{newCourse.title}</div>
                  <div style={{fontSize:'0.8rem', color:'#7a80a0'}}>by {newCourse.instructor || '—'} · {newCourse.category || '—'} · {newCourse.duration || '—'}</div>
                </div>
              )}

              <div style={{display:'flex', gap:'0.8rem', flexWrap:'wrap'}}>
                <button onClick={addCourse} style={{
                  fontSize:'0.9rem', fontWeight:'700', padding:'0.78rem 1.7rem',
                  borderRadius:'12px', border:'none', cursor:'pointer',
                  background:'linear-gradient(135deg,#f0c040,#c8960a)', color:'#000',
                }}>➕ Add Course</button>
                <button onClick={() => { setNewCourse({title:'',instructor:'',category:'',duration:'',description:'',img:'',rating:4.5}); setError(''); }} style={{
                  fontSize:'0.9rem', fontWeight:'600', padding:'0.78rem 1.7rem',
                  borderRadius:'12px', border:'1px solid rgba(255,255,255,0.13)',
                  background:'transparent', color:'#7a80a0', cursor:'pointer',
                }}>Clear Form</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}