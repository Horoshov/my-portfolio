import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import profileImg from './assets/alex-profile.jpg'; 

// Общий шаблон для новых страниц
const PageLayout = ({ title, children }) => (
  <motion.section className="page-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <h1 className="giant-title">{title}</h1>
    {children}
  </motion.section>
);

const Home = () => (
  <motion.header className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <div className="hero-main-section">
      <div className="hero-left">
        <p className="hero-description">
          A digital designer who blends creativity with strategy to craft meaningful experiences that connect people and ideas. My work focuses on clarity, emotion, and purpose.
        </p>
        <Link to="/contact" className="contact-button">
          Contact Now
          <span className="contact-arrow">→</span>
        </Link>
      </div>
      <div className="hero-center">
        <div className="hero-portrait-wrapper">
          <img src={profileImg} alt="Alex Horoshov" className="hero-portrait" />
        </div>
      </div>
      <div className="hero-right">
        <h2 className="services-title">My Services</h2>
        <ul className="services-list">
          <li>Brand identity</li>
          <li>Website Design</li>
          <li>Development</li>
        </ul>
      </div>
    </div>
  </motion.header>
);

const AboutPage = () => (
  <motion.section className="about-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <h1 className="giant-title">About</h1>
    <div className="about-main-grid">
      <div className="about-image-wrapper">
        <img src={profileImg} alt="Alex Horoshov" />
      </div>
      <div className="about-text-content">
        <span className="about-since-label">[EST. 2013]</span>
        <p className="about-p-bold">Senior UX/UI Designer focused on high-complexity digital systems.</p>
        <p className="about-p-light">
          10 years of experience in BI, PropTech, and E-commerce. I specialize in simplifying complex logic through precise interface design, leveraging AI workflows and modern front-end technologies.
        </p>
      </div>
    </div>
    <div className="about-stats-grid">
      <div className="stat-card">
        <span className="stat-number">10+</span>
        <div className="stat-label-group"><span className="stat-unit">Years</span><span className="stat-desc">of Experience</span></div>
      </div>
      <div className="stat-card">
        <span className="stat-number">98</span>
        <div className="stat-label-group"><span className="stat-unit">Percent</span><span className="stat-desc">Customer Satisfaction</span></div>
      </div>
      <div className="stat-card">
        <span className="stat-number">80+</span>
        <div className="stat-label-group"><span className="stat-unit">Projects</span><span className="stat-desc">Completed Successfully</span></div>
      </div>
    </div>
  </motion.section>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="nav-col"><span className="label">Hello, I’m</span><span className="value">Alex Horoshov</span></div>
          <div className="nav-col"><span className="label">Location</span><span className="value">Moscow, RU</span></div>
          <div className="nav-col"><span className="label">Working Status</span><span className="value">Available</span></div>
          <div className="nav-col">
            <span className="label">Navigation</span>
            <div className="nav-menu">
              {['Home', 'Projects', 'Services', 'About', 'Articles', 'Contact'].map(item => (
                <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="menu-item">{item}</Link>
              ))}
            </div>
          </div>
        </nav>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about me" element={<AboutPage />} />
            <Route path="/projects" element={<PageLayout title="Projects" />} />
            <Route path="/services" element={<PageLayout title="Services" />} />
            <Route path="/articles" element={<PageLayout title="Articles" />} />
            <Route path="/contact" element={<PageLayout title="Contact" />} />
          </Routes>
        </AnimatePresence>
        <footer className="footer-simple"><p>© 2026 Alex Horoshov. Made in Horoshov</p></footer>
      </div>
    </Router>
  );
}

export default App;