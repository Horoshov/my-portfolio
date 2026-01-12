import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profileImg from '../assets/alex-profile.jpg';

// Настройки анимации для карточек
const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 }
  }
};

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

      <div className="giant-title-wrapper">
        <h1 className="giant-title">UX UI PRODUCT DESIGNER</h1>
      </div>

      <section className="recent-works-grid">
        <div className="recent-works-col">
          <h2 className="recent-works-title">Recent Works</h2>
        </div>
      </section>

      {/* 4. Projects Grid с анимацией */}
      <section className="projects-grid">
        
        {/* Row 1: 2 Cards */}
        <div className="projects-row two-cols">
          {[
            { id: 101, title: 'Nexora', cat: '{Mobile App}', desc: 'BI systems dashboards.' },
            { id: 102, title: 'Lunex', cat: '{PropTech}', desc: 'Real estate platforms.' }
          ].map((project) => (
            <motion.div 
              className="project-card" 
              key={project.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="project-image-wrapper">
                <img src={`https://picsum.photos/seed/${project.id}/1200/825`} alt={project.title} />
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span>{project.cat}</span> <span>2025</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 2: 3 Cards */}
        <div className="projects-row three-cols">
          {[
            { id: 103, title: 'Morphin', cat: '{Industrial}', desc: 'Manufacturing tools.' },
            { id: 104, title: 'Lumora', cat: '{E-commerce}', desc: 'Retail experiences.' },
            { id: 105, title: 'Nexa', cat: '{SaaS}', desc: 'Software platforms.' }
          ].map((project) => (
            <motion.div 
              className="project-card" 
              key={project.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="project-image-wrapper">
                <img src={`https://picsum.photos/seed/${project.id}/800/550`} alt={project.title} />
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span>{project.cat}</span> <span>2025</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;