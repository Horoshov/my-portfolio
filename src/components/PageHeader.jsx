import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const cardVariants = {
  offscreen: { y: 30, opacity: 0 },
  onscreen: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 }
  }
};

const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <motion.div 
      className="project-card-custom" 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={cardVariants}
    >
      <Link to={`/project/${project.id}`} className="project-card-link">
        <div className="project-image-container">
          <img src={project.image} alt={project.title} loading="lazy" />
        </div>
        
        <div className="project-info-block">
          {/* Название ПЕРВОЕ */}
          <h3 className="project-title-text">{project.title}</h3>
          
          {/* Категория и год ВТОРОЕ (на одной линии) */}
          <div className="project-meta-row">
            <span className="label-style">{project.cat}</span>
            <span className="label-style">{project.year || '2026'}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;