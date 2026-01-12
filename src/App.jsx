import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; // Импорт есть, это хорошо
import Home from './pages/Home'; 
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>

        {/* ДОБАВЛЯЕМ СЮДА */}
        <Footer />

        {/* Твоя SVG маска остается здесь внизу */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="grain">
            {/* ... настройки фильтра ... */}
          </filter>
        </svg>
      </div>
    </Router>
  );
}

export default App;