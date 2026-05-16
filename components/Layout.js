import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div style={{
      minHeight:'100vh',
      background:'#06080f',
      color:'#eef0f8',
      display:'flex',
      flexDirection:'column',
    }}>
      <div style={{
        position:'fixed', inset:0,
        background:'radial-gradient(ellipse 70% 50% at 15% 0%, rgba(68,136,255,0.1) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 100%, rgba(0,212,170,0.08) 0%, transparent 60%)',
        pointerEvents:'none', zIndex:0,
      }}/>

      <Header />

      <main style={{flex:1, position:'relative', zIndex:1}}>
        {children}
      </main>

      <Footer />
    </div>
  );
}