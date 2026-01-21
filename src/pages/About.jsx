import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import StatList from '../components/StatList';
import alexProfile from '../assets/alex-profile.jpg';

const About = () => {
  const aboutStats = [
    { value: '10', label: 'of Experience', title: 'Years' },
    { value: '80+', label: 'Completed Successfully', title: 'Projects' },
    { value: '95', label: 'Customer Satisfaction', title: 'Percent' }
  ];

  const skills = [
    { 
      name: 'Figma', 
      level: '95%', 
      desc: 'Expert in collaborative interface design, creating seamless UI systems and efficient workflows.' 
    },
    { 
      name: 'Framer', 
      level: '85%', 
      desc: 'Skilled in building dynamic, high-quality websites using Framer\'s powerful no-code capabilities.' 
    },
    { 
      name: 'Cinema', 
      level: '90%', 
      desc: 'Experienced in developing custom, scalable WordPress solutions with a focus on performance.' 
    },
    { 
      name: 'React', 
      level: '35%', 
      desc: 'Building modern web applications with a focus on component-based architecture and performance.' 
    },
    {
      name: 'Сursor', 
      level: '35%', 
      desc: 'Building modern web applications with a focus on component-based architecture and performance.' 
    },
    { 
      name: 'Miro', 
      level: '35%', 
      desc: 'Building modern web applications with a focus on component-based architecture and performance.' 
    },
    { 
      name: 'Git', 
      level: '35%', 
      desc: 'Building modern web applications with a focus on component-based architecture and performance.' 
    },
    { 
      name: 'Adobe Photoshop', 
      level: '35%', 
      desc: 'Building modern web applications with a focus on component-based architecture and performance.' 
    },
    { 
      name: 'Adobe Illustrator', 
      level: '35%', 
      desc: 'Building modern web applications with a focus on component-based architecture and performance.' 
    }
  ];

  return (
    <motion.div
      className="app-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader title="About Me" />
      
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
                innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="about-intro-grid"> 
          <PageHeader 
            title="Hard Skills" 
            subtitle="Expertise shaped through experience, precision, and thoughtful design." 
          />
          
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon-box">
                   {/* Иконка будет добавлена здесь */}
                </div>
                
                <div className="skill-info">
                  <div className="skill-head">
                    <h3>{skill.name}</h3>
                    <p>{skill.desc}</p>
                  </div>
                  
                  <div className="skill-progress-wrapper">
                    <div className="skill-progress-bar">
                      {/* 1. Только закрашенная область */}
                      <div 
                        className="skill-progress-fill" 
                        style={{ width: skill.level }}
                      ></div>
                      
                      {/* 2. Плашка вынесена наружу, чтобы быть ПОВЕРХ всех слоев */}
                      <div 
                        className="skill-progress-pin"
                        style={{ left: skill.level }}
                      >
                        {skill.level}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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