import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import About from './pages/About'; 
import Projects from './pages/Projects';
import Articles from './pages/Articles';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

import './styles/App.css';

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="app-container">
      <Navbar />

      {/* Теперь роуты только здесь и обернуты в сужающий класс */}
      <main className="main-content-narrow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />

      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.60" numOctaves="3" stitchTiles="stitch" />
          <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
        </filter>
      </svg>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;