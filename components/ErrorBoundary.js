import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error(JSON.stringify({
      level: 'error',
      context: 'ErrorBoundary',
      message: error?.message,
      stack: error?.stack,
      componentStack: info?.componentStack,
      timestamp: new Date().toISOString(),
    }));
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif',
          background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Something went wrong</h1>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>Please refresh the page to continue.</p>
          <button onClick={() => window.location.reload()} style={{
            padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none',
            background: 'var(--blue)', color: '#fff', cursor: 'pointer', fontWeight: '600',
          }}>
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
