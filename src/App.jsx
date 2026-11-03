// App component entry point
import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';

import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import NotFound from './pages/NotFound';
import { ErrorBoundary } from './components/ErrorBoundary';

const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Articles = lazy(() => import('./pages/Articles'));
const Contact = lazy(() => import('./pages/Contact'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

import './styles/App.css';

if (typeof window !== 'undefined') {
  window.addEventListener('vite:preloadError', () => {
    const hasReloaded = sessionStorage.getItem('vite_reload_on_preload_error');
    if (!hasReloaded) {
      sessionStorage.setItem('vite_reload_on_preload_error', 'true');
      window.location.reload();
    }
  });
}

const AppContent = () => {
  const location = useLocation();
  const mainRef = React.useRef(null);
  const isFirstLoad = React.useRef(true);

  // Логика автоматического скролла вверх при изменении пути (URL) и фокус на main
  useEffect(() => {
    window.scrollTo(0, 0);
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    const timer = setTimeout(() => {
      mainRef.current?.focus({ preventScroll: true });
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      {/* Main - semantic wrapper БЕЗ стилей контейнера */}
      <main ref={mainRef} tabIndex={-1} className="main-content">
        <ErrorBoundary>
          <Suspense fallback={<div style={{ minHeight: '80vh' }} />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/work" element={<Projects />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />

      {/* SVG фильтры */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.60" numOctaves="3" stitchTiles="stitch" />
          <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
      </svg>
    </>
  );
};

function App() {
  return (
    <Router>
      <MotionConfig reducedMotion="user">
        <AppContent />
      </MotionConfig>
    </Router>
  );
}

export default App;