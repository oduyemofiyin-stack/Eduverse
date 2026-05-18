import { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback((msg, type = 'default') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, msg, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  }, []);

  const icons = { default:'💬', success:'✅', error:'❌', warning:'⚠️', info:'ℹ️' };
  const colors = {
    default:'#4488ff', success:'#00d4aa',
    error:'#ff6b9d', warning:'#f0c040', info:'#4488ff',
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div style={{
        position:'fixed', bottom:'1.5rem', right:'1.5rem',
        zIndex:9999, display:'flex', flexDirection:'column', gap:'0.6rem',
        pointerEvents:'none', maxWidth:'300px',
      }}>
        {toasts.map(t => (
          <div key={t.id} style={{
            background:'#0d1117',
            border:`1px solid ${colors[t.type]}`,
            borderLeft:`4px solid ${colors[t.type]}`,
            borderRadius:'12px',
            padding:'0.75rem 1rem',
            display:'flex', alignItems:'center', gap:'0.7rem',
            boxShadow:'0 8px 30px rgba(0,0,0,0.4)',
            animation:'slideIn 0.3s ease',
            pointerEvents:'all',
          }}>
            <span style={{fontSize:'1.1rem', flexShrink:0}}>{icons[t.type]}</span>
            <span style={{fontSize:'0.84rem', color:'#eef0f8', lineHeight:'1.4'}}>{t.msg}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes slideIn {
          from { opacity:0; transform:translateX(20px); }
          to { opacity:1; transform:translateX(0); }
        }
      `}</style>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}