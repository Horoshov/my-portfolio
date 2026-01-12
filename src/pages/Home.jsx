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
      {/* 1. Hero Секция (Инфо + Фото) */}
      <section className="hero-grid">
        <div className="hero-col left">
          <span className="label">Focus</span>
          <p className="hero-text">
            A digital designer who blends creativity with strategy to create 
            meaningful experiences.
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
            <li>Brand identity</li>
            <li>Website Design</li>
            <li>Development</li>
          </ul>
        </div>
      </section>

      {/* 2. Гигантский заголовок (Теперь выше) */}
      <div className="giant-title-wrapper">
        <h1 className="giant-title">UX UI PRODUCT DESIGNER</h1>
      </div>

      {/* 3. Секция Recent Works (Теперь под заголовком) */}
      <section className="recent-works-grid">
        <div className="recent-works-col">
          <h2 className="recent-works-title">Recent Works</h2>
        </div>
        <div className="grid-filler"></div>
        <div className="grid-filler"></div>
        <div className="grid-filler"></div>
      </section>

     

      
    </motion.div>
  );
};



export default Home;