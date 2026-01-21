import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import StatList from '../components/StatList';
import alexProfile from '../assets/alex-profile.jpg'; // Используем ваш существующий ассет

const About = () => {
  const aboutStats = [
    { value: '10', label: 'of Experience', title: 'Years' },
    { value: '80+', label: 'Completed Successfully', title: 'Projects' },
    { value: '95', label: 'Customer Satisfaction', title: 'Percent' }
  ];

  return (
    <motion.div
      className="app-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader title="About Me" />
      
      {/* Новый блок контента согласно макету */}
      <section className="about-intro-section">
        <div className="about-intro-grid">
          <div className="about-image-wrapper">
            <img 
              src={alexProfile} 
              alt="Alex Horoshov" 
              className="about-main-image" 
            />
          </div>
          
          <div className="about-text-content">
            <span className="about-date-label">[SINCE 2013]</span>
            <div className="about-description">
              <p className="description-lead">
                I'm Alex Horoshov, a digital designer who blends creativity with 
                strategy to craft meaningful experiences that connect people 
                and ideas. My work focuses on clarity, emotion, and purpose.
              </p>
              <p className="description-body">
                Over the years, I've worked with brands, startups, and 
                individuals to bring ideas to life through thoughtful design and 
                innovation. Whether it's building a brand identity, shaping a 
                digital product, or refining an experience, my focus remains the 
                same to design with intention, empathy, and impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ... после </section> (about-intro-section) */}

<section className="skills-section">
  <div className="about-intro-grid"> 
    {/* Используем вашу сетку для выравнивания */}
    <PageHeader 
      title="My Skills" 
      subtitle="Expertise shaped through experience, precision, and thoughtful design." 
    />
    
    <div className="skills-content-placeholder">
      {/* Здесь позже будет список ваших навыков */}
    </div>
  </div>
</section>

      <section className="stats-section">
        <StatList stats={aboutStats} />
      </section>
    </motion.div>
  );
};

export default About;