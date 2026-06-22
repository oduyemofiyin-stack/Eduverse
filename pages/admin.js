import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useApp } from '../context/AppContext';
import courses from '../data/courses';
import { getAllUsers, deleteUser } from '../lib/firestore';
import { AdminSkeleton } from '../components/Skeleton';

const ADMIN_USER = process.env.NEXT_PUBLIC_ADMIN_USER || 'EMMANUEL';
const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASS || 'Emmanuel@007';

export default function Admin() {
  const { theme } = useApp();
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
  const [allProfiles, setAllProfiles] = useState([]);
  const [profilesLoading, setProfilesLoading] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      getAllUsers().then(p => { setAllProfiles(p); setProfilesLoading(false); });
    }
  }, [loggedIn]);

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
    background:'var(--surface2)', border:'1px solid var(--border2)',
    borderRadius:'9px', padding:'0.6rem 0.8rem',
    fontSize:'0.85rem', color:'var(--text)', outline:'none',
    fontFamily:'inherit', width:'100%', boxSizing:'border-box',
  };

  if (!loggedIn) {
    return (
      <div style={{minHeight:'100vh', background:'var(--bg)', display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem',
        backgroundImage:'radial-gradient(ellipse 70% 50% at 15% 0%, rgba(68,136,255,0.1) 0%, transparent 60%)'}}>
        <div style={{background:'var(--surface)', border:'1px solid var(--border2)', borderRadius:'20px', padding:'2.5rem', width:'100%', maxWidth:'400px', boxSizing:'border-box'}}>
          <div style={{textAlign:'center', marginBottom:'1.8rem'}}>
            <h1 style={{fontFamily:'Georgia, serif', fontSize:'1.5rem', fontWeight:'700', marginBottom:'0.3rem'}}>Admin Dashboard</h1>
            <p style={{fontSize:'0.83rem', color:'var(--muted)'}}>Restricted access — Eduverse staff only</p>
          </div>
          {error && (
            <div style={{background:'rgba(255,107,157,0.1)', border:'1px solid rgba(255,107,157,0.3)', borderRadius:'10px', padding:'0.65rem 1rem', fontSize:'0.82rem', color:'var(--pink)', marginBottom:'1rem'}}>
              {error}
            </div>
          )}
          <div style={{display:'flex', flexDirection:'column', gap:'0.9rem'}}>
            <div>
              <label style={{display:'block', fontSize:'0.76rem', fontWeight:'600', color:'var(--muted)', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>Username</label>
              <input type="text" placeholder="Admin username" value={username}
                onChange={e => setUsername(e.target.value)} style={inp}/>
            </div>
            <div>
              <label style={{display:'block', fontSize:'0.76rem', fontWeight:'600', color:'var(--muted)', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>Password</label>
              <input type="password" placeholder="Admin password" value={password}
                onChange={e => setPassword(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
                style={inp}/>
            </div>
            <button onClick={handleLogin} style={{
              width:'100%', padding:'0.88rem', borderRadius:'12px', border:'none', cursor:'pointer',
              background:'linear-gradient(135deg,var(--blue),#3366dd)', color:'#fff',
              fontFamily:'inherit', fontSize:'0.95rem', fontWeight:'700',
              boxShadow:'0 8px 22px rgba(68,136,255,0.28)', marginTop:'0.3rem',
            }}>Sign In to Dashboard</button>
            <button onClick={() => router.push('/')} style={{
              width:'100%', padding:'0.7rem', borderRadius:'12px',
              border:'1px solid var(--border2)', background:'transparent',
              color:'var(--muted)', fontFamily:'inherit', fontSize:'0.85rem', cursor:'pointer',
            }}>← Back to Eduverse</button>
          </div>
        </div>
      </div>
    );
  }

  const totalCourses = courseList.length;
  const categories = [...new Set(courseList.map(c => c.category))];
  const avgRating = (courseList.reduce((s, c) => s + c.rating, 0) / totalCourses).toFixed(1);

  return (
    <div style={{minHeight:'100vh', background:'var(--bg)', color:'var(--text)'}}>
      <header style={{
        height:'64px', padding:'0 1.5rem',
        display:'flex', alignItems:'center', justifyContent:'space-between',
        background:'var(--header-bg)', backdropFilter:'blur(20px)',
        borderBottom:'1px solid var(--border)',
        position:'sticky', top:0, zIndex:100,
      }}>
        <div style={{display:'flex', alignItems:'center', gap:'0.8rem'}}>
          <span style={{fontFamily:'Georgia, serif', fontSize:'1.1rem', fontWeight:'700', background:'linear-gradient(135deg,var(--gold),var(--blue))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>
            Eduverse Admin
          </span>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'0.8rem'}}>
          <span style={{fontSize:'0.82rem', color:'var(--muted)'}}>Welcome, <strong style={{color:'var(--text)'}}>Emmanuel</strong></span>
          <button onClick={() => router.push('/')} style={{fontSize:'0.8rem', fontWeight:'600', padding:'0.4rem 0.9rem', borderRadius:'8px', border:'1px solid var(--border2)', background:'transparent', color:'var(--muted)', cursor:'pointer'}}>
            ← Back to Site
          </button>
          <button onClick={() => setLoggedIn(false)} style={{fontSize:'0.8rem', fontWeight:'600', padding:'0.4rem 0.9rem', borderRadius:'8px', border:'none', background:'rgba(255,107,107,0.15)', color:'#ff6b6b', cursor:'pointer'}}>
            Sign Out
          </button>
        </div>
      </header>

      <div style={{maxWidth:'1200px', margin:'0 auto', padding:'2rem 1.5rem 4rem'}}>
        <div style={{display:'flex', gap:'0.5rem', marginBottom:'2rem', flexWrap:'wrap'}}>
          {[
            {id:'overview', label:'Overview'},
            {id:'users', label:'Users'},
            {id:'courses', label:'Courses'},
            {id:'add', label:'Add Course'},
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              fontSize:'0.85rem', fontWeight:'600', padding:'0.6rem 1.2rem',
              borderRadius:'10px', border:'none', cursor:'pointer',
              background: activeTab === tab.id ? 'var(--blue)' : 'var(--surface2)',
              color: activeTab === tab.id ? '#fff' : 'var(--muted)',
            }}>
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div>
            <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.4rem', fontWeight:'700', marginBottom:'1.5rem'}}>Dashboard Overview</h2>
            <div className="admin-grid" style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(min(200px,100%), 1fr))', gap:'1rem', marginBottom:'2rem'}}>
              {[
                {ico:'', label:'Total Courses', value:totalCourses, color:'var(--blue)'},
                {ico:'', label:'Categories', value:categories.length, color:'var(--gold)'},
                {ico:'', label:'Avg Rating', value:avgRating, color:'var(--teal)'},
                {ico:'', label:'Free Courses', value:totalCourses, color:'var(--pink)'},
              ].map(s => (
                <div key={s.label} style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'14px', padding:'1.3rem', textAlign:'center'}}>
                  <div style={{fontSize:'2rem', marginBottom:'0.4rem'}}>{s.ico}</div>
                  <div style={{fontFamily:'Georgia, serif', fontSize:'1.8rem', fontWeight:'700', color:s.color}}>{s.value}</div>
                  <div style={{fontSize:'0.75rem', color:'var(--muted)', marginTop:'0.2rem'}}>{s.label}</div>
                </div>
              ))}
            </div>
            <h3 style={{fontFamily:'Georgia, serif', fontSize:'1.1rem', fontWeight:'700', marginBottom:'1rem'}}>Courses by Category</h3>
            <div style={{display:'flex', flexDirection:'column', gap:'0.7rem'}}>
              {categories.map(cat => {
                const count = courseList.filter(c => c.category === cat).length;
                const pct = Math.round((count / totalCourses) * 100);
                return (
                  <div key={cat} style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'12px', padding:'1rem'}}>
                    <div style={{display:'flex', justifyContent:'space-between', marginBottom:'0.5rem'}}>
                      <span style={{fontSize:'0.85rem', fontWeight:'600'}}>{cat}</span>
                      <span style={{fontSize:'0.82rem', color:'var(--muted)'}}>{count} course{count !== 1 ? 's' : ''} · {pct}%</span>
                    </div>
                    <div style={{width:'100%', height:'6px', background:'var(--surface2)', borderRadius:'100px'}}>
                      <div style={{height:'100%', borderRadius:'100px', background:'linear-gradient(135deg,var(--blue),var(--teal))', width:`${pct}%`, transition:'width 0.4s'}}/>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div>
            <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.4rem', fontWeight:'700', marginBottom:'1.5rem'}}>
              Registered Users (from Firestore)
            </h2>
            <button onClick={() => { setProfilesLoading(true); getAllUsers().then(p => { setAllProfiles(p); setProfilesLoading(false); }); }}
              style={{fontSize:'0.82rem', fontWeight:'600', padding:'0.5rem 1rem', borderRadius:'9px', border:'1px solid var(--border)', background:'var(--surface2)', color:'var(--text)', cursor:'pointer', marginBottom:'1rem'}}>
              Refresh
            </button>
            {profilesLoading ? (
              <AdminSkeleton/>
            ) : allProfiles.length === 0 ? (
              <div style={{textAlign:'center', padding:'3rem', color:'var(--muted)'}}>
                <p>No users found in Firestore yet.</p>
                <p style={{fontSize:'0.82rem', marginTop:'0.5rem'}}>Users appear here after they sign up and their profile is created.</p>
              </div>
            ) : (
              <div style={{display:'flex', flexDirection:'column', gap:'0.6rem'}}>
                {allProfiles.map(u => {
                  const d = u.data || {};
                  return (
                    <div key={u.id} style={{
                      background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'14px', padding:'1rem',
                    }}>
                      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'0.5rem'}}>
                        <div style={{display:'flex', alignItems:'center', gap:'0.8rem'}}>
                          {u.picture ? (
                            <img src={u.picture} alt="" style={{width:'40px', height:'40px', borderRadius:'50%', objectFit:'cover'}}/>
                          ) : (
                            <div style={{width:'40px', height:'40px', borderRadius:'50%', background:'linear-gradient(135deg,var(--blue),var(--teal))', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'700', fontSize:'0.85rem', color:'#fff'}}>
                              {(u.first_name?.[0]||'')+(u.last_name?.[0]||'')}
                            </div>
                          )}
                          <div>
                            <div style={{fontWeight:'600', fontSize:'0.9rem'}}>{u.first_name} {u.last_name}</div>
                            <div style={{fontSize:'0.76rem', color:'var(--muted)'}}>{u.email} · {u.provider || 'email'}</div>
                          </div>
                        </div>
                        <div style={{display:'flex', gap:'0.5rem', alignItems:'center', flexWrap:'wrap'}}>
                          <span style={{fontSize:'0.72rem', padding:'0.2rem 0.6rem', borderRadius:'100px', background:'rgba(240,192,64,0.15)', color:'var(--gold)', border:'1px solid rgba(240,192,64,0.3)'}}>{d.xp || 0} XP</span>
                          <span style={{fontSize:'0.72rem', padding:'0.2rem 0.6rem', borderRadius:'100px', background:'rgba(68,136,255,0.15)', color:'var(--blue)', border:'1px solid rgba(68,136,255,0.3)'}}>{(d.enrolled||[]).length} enrolled</span>
                          <span style={{fontSize:'0.72rem', padding:'0.2rem 0.6rem', borderRadius:'100px', background:'rgba(0,212,170,0.15)', color:'var(--teal)', border:'1px solid rgba(0,212,170,0.3)'}}>{(d.completed||[]).length} completed</span>
                          <span style={{fontSize:'0.72rem', padding:'0.2rem 0.6rem', borderRadius:'100px', background:'rgba(255,107,157,0.15)', color:'var(--pink)', border:'1px solid rgba(255,107,157,0.3)'}}>{(d.badges||[]).length} badges</span>
                        </div>
                      </div>
                      <div style={{fontSize:'0.7rem', color:'var(--muted2)', marginTop:'0.5rem'}}>Joined: {new Date(u.created_at).toLocaleString()}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {activeTab === 'courses' && (
          <div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'1.5rem', flexWrap:'wrap', gap:'1rem'}}>
              <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.4rem', fontWeight:'700'}}>Manage Courses ({courseList.length})</h2>
              <button onClick={() => setActiveTab('add')} style={{
                fontSize:'0.85rem', fontWeight:'600', padding:'0.6rem 1.2rem',
                borderRadius:'10px', border:'none', cursor:'pointer',
                background:'linear-gradient(135deg,#f0c040,#c8960a)', color:'#000',
              }}>Add New Course</button>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:'0.8rem'}}>
              {courseList.map(c => (
                <div key={c.id} style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'14px', padding:'1.2rem'}}>
                  {editingId === c.id ? (
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
                            <label style={{display:'block', fontSize:'0.72rem', fontWeight:'600', color:'var(--muted)', marginBottom:'0.3rem', textTransform:'uppercase'}}>{field.label}</label>
                            <input type={field.type} value={editForm[field.key]} onChange={e => setEditForm(p => ({...p, [field.key]: e.target.value}))} style={inp}/>
                          </div>
                        ))}
                      </div>
                      <div>
                        <label style={{display:'block', fontSize:'0.72rem', fontWeight:'600', color:'var(--muted)', marginBottom:'0.3rem', textTransform:'uppercase'}}>Description</label>
                        <textarea value={editForm.description} onChange={e => setEditForm(p => ({...p, description: e.target.value}))}
                          style={{...inp, minHeight:'80px', resize:'vertical'}}/>
                      </div>
                      <div style={{display:'flex', gap:'0.7rem'}}>
                        <button onClick={() => saveEdit(c.id)} style={{fontSize:'0.84rem', fontWeight:'600', padding:'0.55rem 1.2rem', borderRadius:'9px', border:'none', cursor:'pointer', background:'var(--teal)', color:'#000'}}>Save</button>
                        <button onClick={() => setEditingId(null)} style={{fontSize:'0.84rem', fontWeight:'600', padding:'0.55rem 1.2rem', borderRadius:'9px', border:'none', cursor:'pointer', background:'var(--surface3)', color:'var(--text)'}}>Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <div style={{display:'flex', alignItems:'center', gap:'1rem', flexWrap:'wrap'}}>
                      <img src={c.img} alt={c.title} loading="lazy" style={{width:'70px', height:'50px', borderRadius:'8px', objectFit:'cover', flexShrink:0}}/>
                      <div style={{flex:1, minWidth:'150px'}}>
                        <div style={{fontFamily:'Georgia, serif', fontSize:'0.95rem', fontWeight:'700', marginBottom:'0.2rem'}}>{c.title}</div>
                        <div style={{fontSize:'0.78rem', color:'var(--muted)'}}>by {c.instructor} · {c.category} · {c.duration} · {c.rating}</div>
                      </div>
                      <div style={{display:'flex', gap:'0.5rem', flexShrink:0}}>
                        <button onClick={() => startEdit(c)} style={{fontSize:'0.8rem', fontWeight:'600', padding:'0.45rem 0.9rem', borderRadius:'8px', border:'none', cursor:'pointer', background:'rgba(var(--blue-rgb,68,136,255),0.15)', color:'var(--blue)'}}>Edit</button>
                        <button onClick={() => deleteCourse(c.id)} style={{fontSize:'0.8rem', fontWeight:'600', padding:'0.45rem 0.9rem', borderRadius:'8px', border:'none', cursor:'pointer', background:'rgba(255,107,107,0.15)', color:'#ff6b6b'}}>Delete</button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'add' && (
          <div>
            <h2 style={{fontFamily:'Georgia, serif', fontSize:'1.4rem', fontWeight:'700', marginBottom:'1.5rem'}}>Add New Course</h2>
            {error && (
              <div style={{background:'rgba(255,107,157,0.1)', border:'1px solid rgba(255,107,157,0.3)', borderRadius:'10px', padding:'0.65rem 1rem', fontSize:'0.82rem', color:'var(--pink)', marginBottom:'1rem'}}>
                {error}
              </div>
            )}
            <div style={{background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'16px', padding:'1.5rem'}}>
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
                    <label style={{display:'block', fontSize:'0.74rem', fontWeight:'600', color:'var(--muted)', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>{field.label}</label>
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
                <label style={{display:'block', fontSize:'0.74rem', fontWeight:'600', color:'var(--muted)', marginBottom:'0.35rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>Description</label>
                <textarea
                  placeholder="Course description…"
                  value={newCourse.description}
                  onChange={e => setNewCourse(p => ({...p, description: e.target.value}))}
                  style={{...inp, minHeight:'100px', resize:'vertical'}}
                />
              </div>

              {newCourse.title && (
                <div style={{background:'var(--surface2)', border:'1px solid var(--border)', borderRadius:'12px', padding:'1rem', marginBottom:'1.2rem'}}>
                  <div style={{fontSize:'0.74rem', color:'var(--muted)', marginBottom:'0.5rem', textTransform:'uppercase', letterSpacing:'0.04em'}}>Preview</div>
                  <div style={{fontFamily:'Georgia, serif', fontSize:'1rem', fontWeight:'700', marginBottom:'0.2rem'}}>{newCourse.title}</div>
                  <div style={{fontSize:'0.8rem', color:'var(--muted)'}}>by {newCourse.instructor || '—'} · {newCourse.category || '—'} · {newCourse.duration || '—'}</div>
                </div>
              )}

              <div style={{display:'flex', gap:'0.8rem', flexWrap:'wrap'}}>
                <button onClick={addCourse} style={{
                  fontSize:'0.9rem', fontWeight:'700', padding:'0.78rem 1.7rem',
                  borderRadius:'12px', border:'none', cursor:'pointer',
                  background:'linear-gradient(135deg,var(--gold),#c8960a)', color:'#000',
                }}>Add Course</button>
                <button onClick={() => { setNewCourse({title:'',instructor:'',category:'',duration:'',description:'',img:'',rating:4.5}); setError(''); }} style={{
                  fontSize:'0.9rem', fontWeight:'600', padding:'0.78rem 1.7rem',
                  borderRadius:'12px', border:'1px solid var(--border2)',
                  background:'transparent', color:'var(--muted)', cursor:'pointer',
                }}>Clear Form</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
