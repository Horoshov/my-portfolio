import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
// 1. Обязательно добавь эти импорты:
import About from './pages/About'; 
import Projects from './pages/Projects';
import Articles from './pages/Articles';
import Contact from './pages/Contact';

import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        {/* AnimatePresence позволяет анимировать переход между страницами */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* 2. Пропиши пути для всех страниц: */}
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>

        <Footer />

        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="grain">
             <feTurbulence type="fractalNoise" baseFrequency="0.60" numOctaves="3" stitchTiles="stitch" />
             <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
             <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
          </filter>
        </svg>
      </div>
    </Router>
  );
}

export default App;