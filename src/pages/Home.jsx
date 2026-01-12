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
          Hi, I’m Alex. I bring 10 years of expertise in product design, UX/UI, and development. My background includes managing design processes and building complex digital solutions for BI, e-commerce, and PropTech. I don’t just design interfaces; I understand the code behind them, ensuring seamless implementation for industrial and mobile applications.          </p>
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
      <section className="projects-grid">
  {/* Ряд 1: 2 большие карточки */}
  <div className="projects-row two-cols">
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src="/path-to-nexora.jpg" alt="Nexora" />
      </div>
      <div className="project-info">
        <div className="project-meta">
          <span className="project-category">{'{Mobile App}'}</span>
          <span className="project-date">20/12/2025</span>
        </div>
        <h3 className="project-title">Nexora</h3>
        <p className="project-desc">Projects that combine strategy and creativity.</p>
      </div>
    </div>

    <div className="project-card">
      <div className="project-image-wrapper">
        <img src="/path-to-lunex.jpg" alt="Lunex" />
      </div>
      <div className="project-info">
        <div className="project-meta">
          <span className="project-category">{'{Artist Portfolio}'}</span>
          <span className="project-date">12/09/2025</span>
        </div>
        <h3 className="project-title">Lunex</h3>
        <p className="project-desc">Projects shaped by insight, creativity, and purpose.</p>
      </div>
    </div>
  </div>

  {/* Ряд 2: 3 малые карточки */}
  <div className="projects-row three-cols">
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src="/path-to-morphin.jpg" alt="Morphin" />
      </div>
      <div className="project-info">
        <div className="project-meta">
          <span className="project-category">{'{Personal Portfolio}'}</span>
          <span className="project-date">19/04/2025</span>
        </div>
        <h3 className="project-title">Morphin</h3>
        <p className="project-desc">Projects designed to balance vision and performance.</p>
      </div>
    </div>

    <div className="project-card">
      <div className="project-image-wrapper">
        <img src="/path-to-lumora.jpg" alt="Lumora" />
      </div>
      <div className="project-info">
        <div className="project-meta">
          <span className="project-category">{'{Artist Portfolio}'}</span>
          <span className="project-date">28/03/2025</span>
        </div>
        <h3 className="project-title">Lumora</h3>
        <p className="project-desc">Projects that inspire, engage, and deliver.</p>
      </div>
    </div>

    <div className="project-card">
      <div className="project-image-wrapper">
        <img src="/path-to-nexa.jpg" alt="Nexa" />
      </div>
      <div className="project-info">
        <div className="project-meta">
          <span className="project-category">{'{Mobile App}'}</span>
          <span className="project-date">10/01/2025</span>
        </div>
        <h3 className="project-title">Nexa</h3>
        <p className="project-desc">Designing projects that tell compelling stories.</p>
      </div>
    </div>
  </div>
</section>

     

      
    </motion.div>
  );
};



export default Home;