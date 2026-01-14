import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Обязательно добавляем варианты анимации, иначе motion.div выдаст ошибку
const cardVariants = {
  offscreen: { y: 30, opacity: 0 },
  onscreen: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 }
  }
};

const ProjectCard = ({ project }) => {
  // Защита: если данные проекта вдруг не переданы, компонент не сломает сайт
  if (!project) return null;

  return (
    <motion.div 
      className="project-card" 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={cardVariants}
    >
      <Link to={`/project/${project.id}`} className="project-link">
        <div className="project-image-wrapper">
          <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy" 
          />
        </div>
        <div className="project-info">
          <div className="project-meta">
            <span className="label">{project.cat}</span>
            <span className="label">{project.year || '2026'}</span>
          </div>
          <h3 className="project-title">{project.title}</h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;