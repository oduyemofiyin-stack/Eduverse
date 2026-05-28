import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef({});

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.map(t => t.id === id ? { ...t, exiting: true } : t));
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
      delete timersRef.current[id];
    }, 300);
  }, []);

  const toast = useCallback((msg, type = 'default') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, msg, type, exiting: false }]);
    timersRef.current[id] = setTimeout(() => removeToast(id), 3000);
  }, [removeToast]);

  useEffect(() => {
    return () => {
      Object.values(timersRef.current).forEach(clearTimeout);
    };
  }, []);

  const icons = { default:'Info', success:'Done', error:'Error', warning:'Alert', info:'Info' };
  const colors = {
    default:'var(--blue)', success:'var(--teal)',
    error:'var(--pink)', warning:'var(--gold)', info:'var(--blue)',
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div style={{
        position:'fixed', bottom:'1.5rem', right:'1.5rem',
        zIndex:9999, display:'flex', flexDirection:'column', gap:'0.6rem',
        pointerEvents:'none', maxWidth:'340px', width:'100%',
      }}>
        {toasts.map(t => (
          <div key={t.id}
            className={t.exiting ? 'toast-exit' : 'toast-enter'}
            onClick={() => removeToast(t.id)}
            style={{
              background:'var(--surface)',
              border:`1px solid ${colors[t.type]}`,
              borderLeft:`4px solid ${colors[t.type]}`,
              borderRadius:'12px',
              padding:'0.75rem 1rem 0',
              display:'flex', flexDirection:'column', gap:'0.5rem',
              boxShadow:'var(--shadow-lg)',
              pointerEvents:'all', cursor:'pointer',
              overflow:'hidden',
            }}>
            <div style={{display:'flex', alignItems:'center', gap:'0.7rem'}}>
              <span style={{fontSize:'1.1rem', flexShrink:0}}>{icons[t.type]}</span>
              <span style={{fontSize:'0.84rem', color:'var(--text)', lineHeight:'1.4', flex:1}}>{t.msg}</span>
              <span style={{fontSize:'0.7rem', color:'var(--muted2)', cursor:'pointer', flexShrink:0}}>X</span>
            </div>
            <div style={{
              width:'100%', height:'3px', borderRadius:'100px',
              background:'var(--surface3)', overflow:'hidden',
            }}>
              <div style={{
                height:'100%', borderRadius:'100px',
                background: colors[t.type],
                width:'100%',
                animation:'shrink 3s linear forwards',
              }}/>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}