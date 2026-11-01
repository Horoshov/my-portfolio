import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', padding: '20px', textAlign: 'center' }}>
          <h2>Что-то пошло не так при загрузке страницы</h2>
          <p style={{ margin: '10px 0 20px', color: 'var(--gray-text)' }}>Возможно, обновилась версия приложения.</p>
          <button 
            type="button"
            onClick={() => window.location.reload()}
            style={{ padding: '12px 24px', borderRadius: '100px', background: 'var(--text-color)', color: 'var(--bg-color)', border: 'none', cursor: 'pointer', fontWeight: 600 }}
          >
            Обновить страницу
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
