import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
// Проверьте наличие этого файла в src/assets/!
import profileImg from './assets/alex-profile.jpg'; 

const Home = () => (
  <motion.header className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <h1>Alex Horoshov<br /> Inspired Design.</h1>
    <p className="hero-sub">Full-stack developer focusing on digital experiences.</p>
  </motion.header>
);

const Projects = () => {
  const projects = [
    { id: '01', title: 'Digital Strategy', category: 'Case Study', size: 'full' },
    { id: '02', title: 'Brand Identity', category: 'Design', size: 'half' },
    { id: '03', title: 'E-commerce UI', category: 'Development', size: 'half' },
    { id: '04', title: 'Mobile Experience', category: 'UX Research', size: 'full' }
  ];

  return (
    <motion.div className="page-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <header className="projects-header">
        <span className="label">[SELECTED WORKS]</span>
        <h1 className="hero-title">Projects</h1>
      </header>
      <div className="projects-layout">
        {projects.map((proj) => (
          <motion.div key={proj.id} className={`project-card ${proj.size}`} whileHover={{ y: -10 }}>
            <div className="project-placeholder">
              <div className="placeholder-content"><span>{proj.title}</span></div>
            </div>
            <div className="project-footer">
              <div className="proj-meta">
                <span className="label">{proj.category}</span>
                <h3 className="value">{proj.title}</h3>
              </div>
              <span className="proj-id">{proj.id}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const AboutPage = () => (
  <motion.section 
    className="about-section" 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
  >
    <h2 className="about-title">About Me</h2>
    <div className="about-grid">
      <div className="about-img-box">
        <motion.img 
          src={profileImg} 
          alt="Alex Profile"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onError={(e) => { e.target.src = 'https://via.placeholder.com/600x800?text=Alex+Photo'; }} // Заглушка, если фото не найдется
        />
      </div>
      <div className="about-text-box">
        <span className="since-tag">[SINCE 2013]</span>
        <p>I'm Alex, a digital designer who blends creativity with strategy to craft meaningful experiences.</p>
        <p className="secondary-p">Focusing on clarity, emotion, and purpose in every pixel.</p>
      </div>
    </div>
    
    <div className="stats-container">
      <div className="stat-box">
        <span className="stat-n">10+</span>
        <div className="stat-desc"><span className="stat-l">Years</span><span className="stat-s">of Experience</span></div>
      </div>
      <div className="stat-box">
        <span className="stat-n">80+</span>
        <div className="stat-desc"><span className="stat-l">Projects</span><span className="stat-s">Completed</span></div>
      </div>
    </div>
  </motion.section>
);

const Services = () => <div className="page-content"><h1>Services</h1></div>;
const Articles = () => <div className="page-content"><h1>Articles</h1></div>;
const Contact = () => <div className="page-content"><h1>Contact</h1></div>;

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="nav-col">
            <span className="label">Hello, I’m</span>
            <span className="value">Alex Horoshov</span>
          </div>
          <div className="nav-col">
            <span className="label">Location</span>
            <span className="value">Moscow, RU</span> {/* Поменял на актуальное, если нужно */}
          </div>
          <div className="nav-col">
            <span className="label">Working Status</span>
            <span className="value">Available</span>
          </div>
          <div className="nav-col">
            <span className="label">Navigation</span>
            <div className="nav-menu">
              <Link to="/" className="menu-item">Home</Link>
              <Link to="/projects" className="menu-item">Projects</Link>
              <Link to="/services" className="menu-item">Services</Link>
              <Link to="/about" className="menu-item">About</Link>
              <Link to="/articles" className="menu-item">Articles</Link>
              <Link to="/contact" className="menu-item">Contact</Link>
            </div>
          </div>
        </nav>

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>

        <footer className="footer-simple">
          <p>© 2026 Alex Horoshov. Made in Horoshov</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;