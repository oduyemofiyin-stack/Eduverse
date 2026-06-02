import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

// Study planner page — set daily goals and track progress
export default function Planner() {
  const { plannerGoals, plannerTarget, setPlannerTarget, addPlannerGoal, togglePlannerGoal, removePlannerGoal, getPlannerProgress, streak, studyTime } = useApp();
  const [loading, setLoading] = useState(true);
  const [newGoal, setNewGoal] = useState('');
  const [newGoalTime, setNewGoalTime] = useState(30);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => { const t = setTimeout(() => setLoading(false), 300); return () => clearTimeout(t); }, []);

  const totalMinutes = Object.values(studyTime).reduce((sum, s) => sum + Math.floor(s / 60), 0);

  if (loading) return (
    <div className="page-container" style={{maxWidth:'800px', margin:'0 auto', padding:'2rem 1.2rem 4rem'}}>
      <div style={{width:'180px', height:'28px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'0.5rem'}} className="shimmer-block"/>
      <div style={{width:'120px', height:'14px', background:'var(--surface2)', borderRadius:'100px', marginBottom:'1.5rem'}} className="shimmer-block"/>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'1rem', marginBottom:'1.5rem'}}>
        {Array.from({length:3}).map((_,i) => <div key={i} style={{height:'100px', background:'var(--surface2)', borderRadius:'16px'}} className="shimmer-block"/>)}
      </div>
    </div>
  );

  function handleAdd() {
    if (!newGoal.trim()) return;
    addPlannerGoal(newGoal.trim(), newGoalTime);
    setNewGoal('');
    setNewGoalTime(30);
    setShowAdd(false);
  }

  const prog = getPlannerProgress();
  const todayMinutes = studyTime[Object.keys(studyTime)[0]] ? Math.floor(studyTime[Object.keys(studyTime)[0]] / 60) : 0;

  return (
    <div className="page-transition" style={{padding:'0 0 3rem'}}>
      <div style={{padding:'2rem 1.2rem 1rem', maxWidth:'800px', margin:'0 auto'}}>
        <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(1.5rem, 4vw, 2rem)', fontWeight:'700', marginBottom:'0.3rem'}}>
          Study <span className="shimmer-text">Planner</span>
        </h1>
        <p style={{color:'var(--muted)', fontSize:'0.88rem', marginBottom:'1.5rem'}}>Set daily learning goals and track your study habits.</p>

        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(140px, 1fr))', gap:'1rem', marginBottom:'1.5rem'}}>
          <div style={{padding:'1.2rem', borderRadius:'16px', background:'var(--card-bg)', border:'1px solid var(--border)', textAlign:'center'}}>
            <div style={{fontSize:'0.65rem', fontWeight:'600', textTransform:'uppercase', letterSpacing:'0.06em', color:'var(--muted)', marginBottom:'0.2rem'}}>Streak</div>
            <div style={{fontSize:'1.8rem', fontWeight:'700', color:'var(--gold)'}}>{streak}<span style={{fontSize:'0.9rem', color:'var(--muted)'}}>d</span></div>
          </div>
          <div style={{padding:'1.2rem', borderRadius:'16px', background:'var(--card-bg)', border:'1px solid var(--border)', textAlign:'center'}}>
            <div style={{fontSize:'0.65rem', fontWeight:'600', textTransform:'uppercase', letterSpacing:'0.06em', color:'var(--muted)', marginBottom:'0.2rem'}}>Study Time</div>
            <div style={{fontSize:'1.8rem', fontWeight:'700', color:'var(--blue)'}}>{totalMinutes}<span style={{fontSize:'0.9rem', color:'var(--muted)'}}>m</span></div>
          </div>
          <div style={{padding:'1.2rem', borderRadius:'16px', background:'var(--card-bg)', border:'1px solid var(--border)', textAlign:'center'}}>
            <div style={{fontSize:'0.65rem', fontWeight:'600', textTransform:'uppercase', letterSpacing:'0.06em', color:'var(--muted)', marginBottom:'0.2rem'}}>Daily Target</div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'0.3rem'}}>
              <button onClick={() => setPlannerTarget(Math.max(5, plannerTarget - 5))} style={{background:'var(--surface2)', border:'1px solid var(--border)', borderRadius:'8px', width:'30px', height:'30px', cursor:'pointer', color:'var(--text)', fontSize:'1rem', display:'flex', alignItems:'center', justifyContent:'center'}}>−</button>
              <span style={{fontSize:'1.5rem', fontWeight:'700', color:'var(--teal)', minWidth:'3rem', textAlign:'center'}}>{plannerTarget}<span style={{fontSize:'0.8rem', color:'var(--muted)'}}>m</span></span>
              <button onClick={() => setPlannerTarget(Math.max(5, plannerTarget + 5))} style={{background:'var(--surface2)', border:'1px solid var(--border)', borderRadius:'8px', width:'30px', height:'30px', cursor:'pointer', color:'var(--text)', fontSize:'1rem', display:'flex', alignItems:'center', justifyContent:'center'}}>+</button>
            </div>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'0.8rem'}}>
          <h2 style={{fontFamily:'Georgia, serif', fontSize:'1rem', fontWeight:'700'}}>Today's Goals</h2>
          <button onClick={() => setShowAdd(!showAdd)} style={{
            fontSize:'0.78rem', fontWeight:'600', padding:'0.4rem 1rem', borderRadius:'100px',
            border:'none', background:'linear-gradient(135deg,var(--blue),#3366dd)', color:'#fff',
            cursor:'pointer',
          }}>{showAdd ? 'Cancel' : '+ Add Goal'}</button>
        </div>

        {showAdd && (
          <div style={{padding:'1rem', borderRadius:'12px', border:'1px solid var(--border)', background:'var(--surface)', marginBottom:'1rem', display:'flex', gap:'0.5rem', flexWrap:'wrap', alignItems:'center'}}>
            <input value={newGoal} onChange={e => setNewGoal(e.target.value)} placeholder="What do you want to study?" style={{
              flex:1, minWidth:'200px', padding:'0.6rem 0.8rem', borderRadius:'8px', border:'1px solid var(--border)',
              background:'var(--input-bg)', color:'var(--text)', fontSize:'0.85rem', outline:'none',
            }}
              onKeyDown={e => e.key === 'Enter' && handleAdd()}
            />
            <select value={newGoalTime} onChange={e => setNewGoalTime(parseInt(e.target.value))} style={{
              padding:'0.6rem 0.8rem', borderRadius:'8px', border:'1px solid var(--border)',
              background:'var(--input-bg)', color:'var(--text)', fontSize:'0.85rem', outline:'none',
            }}>
              <option value={15}>15 min</option><option value={30}>30 min</option><option value={45}>45 min</option><option value={60}>60 min</option>
            </select>
            <button onClick={handleAdd} style={{padding:'0.6rem 1rem', borderRadius:'8px', border:'none', background:'var(--teal)', color:'#000', fontWeight:'700', cursor:'pointer', fontSize:'0.85rem'}}>Add</button>
          </div>
        )}

        {plannerGoals.length > 0 && (
          <div style={{marginBottom:'1rem', height:'5px', background:'var(--surface3)', borderRadius:'100px', overflow:'hidden'}}>
            <div style={{width:`${prog}%`, height:'100%', borderRadius:'100px', background:'linear-gradient(90deg,var(--teal),var(--blue))', transition:'width 0.6s'}}/>
          </div>
        )}

        {plannerGoals.length === 0 ? (
          <div style={{textAlign:'center', padding:'3rem 1rem', color:'var(--muted)', border:'1px dashed var(--border)', borderRadius:'16px'}}>
            <div style={{fontSize:'2.5rem', marginBottom:'0.5rem'}}>📋</div>
            <p style={{fontSize:'0.9rem'}}>No goals set for today. Add your first study goal!</p>
          </div>
        ) : (
          <div style={{display:'flex', flexDirection:'column', gap:'0.4rem'}}>
            {plannerGoals.map(g => (
              <div key={g.id} className="list-item" style={{
                display:'flex', alignItems:'center', gap:'0.8rem', padding:'0.8rem 1rem',
                borderRadius:'12px', border:'1px solid var(--border)', background:'var(--card-bg)',
                transition:'border-color 0.2s',
                opacity: g.completed ? 0.6 : 1,
              }}>
                <button onClick={() => togglePlannerGoal(g.id)} style={{
                  width:'24px', height:'24px', borderRadius:'50%', border:`2px solid ${g.completed ? 'var(--teal)' : 'var(--border)'}`,
                  background: g.completed ? 'var(--teal)' : 'transparent', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
                  color: g.completed ? '#000' : 'transparent', fontSize:'0.7rem', fontWeight:'700',
                  transition:'all 0.2s',
                }}>{g.completed ? '✓' : ''}</button>
                <div style={{flex:1, minWidth:0}}>
                  <div style={{fontSize:'0.88rem', fontWeight:'500', textDecoration: g.completed ? 'line-through' : 'none', color: g.completed ? 'var(--muted)' : 'var(--text)'}}>{g.text}</div>
                  <div style={{fontSize:'0.7rem', color:'var(--muted)'}}>{g.targetMinutes} min target</div>
                </div>
                <button onClick={() => removePlannerGoal(g.id)} style={{
                  background:'none', border:'none', color:'var(--muted)', cursor:'pointer', fontSize:'0.85rem', padding:'0.3rem', opacity:0.6,
                }}>✕</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
