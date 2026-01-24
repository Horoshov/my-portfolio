import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  if (!project) return null;
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Link to={`/project/${project.id}`} className="pc-card">
        <div className="pc-img-box">
          <img src={project.image} alt={project.title} loading="lazy" />
        </div>
        <div className="pc-body">
          <div className="pc-meta">
            <span className="pc-tag">{project.cat}</span>
            <span className="pc-dot"></span>
            <span className="pc-tag">{project.year || '2026'}</span>
          </div>
          <h3 className="pc-title">{project.title}</h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;