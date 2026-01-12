import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profileImg from '../assets/alex-profile.jpg';

const Home = () => {
  return (
    <motion.div 
      className="home-page"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
      {/* 1. Hero Section */}
      <section className="hero-grid">
        <div className="hero-col left">
          <span className="label">Focus</span>
          <p className="hero-text">
            Digital product designer and developer with 10 years of experience. 
            I bridge the gap between complex UX systems and functional frontend implementation.
          </p>
          <Link to="/contact" className="contact-button">
            Get in touch <span>→</span>
          </Link>
        </div>

        <div className="hero-col center">
          <div className="image-container">
             <img src={profileImg} alt="Alex Horoshov" className="profile-photo" />
          </div>
        </div>

        <div className="hero-col right">
          <span className="label">Expertise</span>
          <ul className="expertise-list">
            <li>Product Design & UX/UI</li>
            <li>Frontend Development</li>
            <li>Design Management</li>
            <li>BI & Industrial Systems</li>
          </ul>
        </div>
      </section>

      {/* 2. Giant Title */}
      <div className="giant-title-wrapper">
        <h1 className="giant-title">UX UI PRODUCT DESIGNER</h1>
      </div>

      {/* 3. Recent Works Title */}
      <section className="recent-works-grid">
        <div className="recent-works-col">
          <h2 className="recent-works-title">Recent Works</h2>
        </div>
      </section>

      {/* 4. Projects Grid */}
      <section className="projects-grid">
        
        {/* Row 1: 2 Cards */}
        <div className="projects-row two-cols">
          <div className="project-card">
            <div className="project-image-wrapper">
              <img src="https://picsum.photos/1200/825?random=11" alt="Nexora" />
            </div>
            <div className="project-info">
              <div className="project-meta">
                <span className="project-category">{'{Mobile App}'}</span> 
                <span>2025</span>
              </div>
              <h3 className="project-title">Nexora</h3>
              <p className="project-desc">Complex BI systems transformed into intuitive dashboards.</p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image-wrapper">
              <img src="https://picsum.photos/1200/825?random=12" alt="Lunex" />
            </div>
            <div className="project-info">
              <div className="project-meta">
                <span className="project-category">{'{PropTech}'}</span> 
                <span>2025</span>
              </div>
              <h3 className="project-title">Lunex</h3>
              <p className="project-desc">Seamless real estate platforms with a focus on user flow.</p>
            </div>
          </div>
        </div>

        {/* Row 2: 3 Cards */}
        <div className="projects-row three-cols">
          <div className="project-card">
            <div className="project-image-wrapper">
              <img src="https://picsum.photos/800/550?random=13" alt="Morphin" />
            </div>
            <div className="project-info">
              <div className="project-meta">
                <span className="project-category">{'{Industrial}'}</span> 
                <span>2025</span>
              </div>
              <h3 className="project-title">Morphin</h3>
              <p className="project-desc">Interface design for large-scale manufacturing tools.</p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image-wrapper">
              <img src="https://picsum.photos/800/550?random=14" alt="Lumora" />
            </div>
            <div className="project-info">
              <div className="project-meta">
                <span className="project-category">{'{E-commerce}'}</span> 
                <span>2025</span>
              </div>
              <h3 className="project-title">Lumora</h3>
              <p className="project-desc">High-conversion retail experiences.</p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image-wrapper">
              <img src="https://picsum.photos/800/550?random=15" alt="Nexa" />
            </div>
            <div className="project-info">
              <div className="project-meta">
                <span className="project-category">{'{SaaS}'}</span> 
                <span>2025</span>
              </div>
              <h3 className="project-title">Nexa</h3>
              <p className="project-desc">Visual storytelling for software platforms.</p>
            </div>
          </div>
        </div>

      </section>
    </motion.div>
  );
};

export default Home;