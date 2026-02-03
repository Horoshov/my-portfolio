import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
    >
      <Link to={`/project/${project.id}`} className="pc-card">
        <div className="pc-img-box">
          <img src={project.image} alt={project.title} loading="lazy" />
          
          {/* Центрированная анимированная кнопка */}
          <div className="pc-hover-overlay">
            <div className="pc-center-button">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Восстановленный блок подписей */}
        <div className="pc-body">
          <div className="pc-meta">
            <span className="pc-tag">{project.cat}</span>
          </div>
          <h3 className="pc-title">{project.title}</h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;