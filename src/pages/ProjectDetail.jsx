import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allProjects } from '../data/projects';
import Button from '../components/Button';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Находим проект, приводя оба ID к строке для надежности
  const project = allProjects.find((p) => String(p.id) === String(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="pd-not-found" style={{ padding: '200px 20px', textAlign: 'center' }}>
        <h1>Project not found</h1>
        <Link to="/projects" style={{ color: 'var(--text-color)' }}>Return to projects</Link>
      </div>
    );
  }

  return (
    <motion.div 
      className="pd-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="pd-container">
        <header className="pd-header">
          <div className="pd-meta">
            <span className="pc-tag">{`{${project.cat}}`}</span>
            <span className="pc-divider">/</span>
            <span className="pc-tag">{project.year}</span>
          </div>
          <h1 className="pd-title">{project.title}</h1>
        </header>

        <section className="pd-hero">
          <img src={project.image} alt={project.title} className="pd-main-img" />
        </section>

        <section className="pd-content-grid">
          <div className="pd-description">
            <p>{project.description || "Detailed project information will be here shortly."}</p>
          </div>
          <div className="pd-sidebar">
            <div className="pd-info-block">
              <span className="pd-label">Client</span>
              <p className="pd-value">{project.client || "Portfolio Project"}</p>
            </div>
            <div className="pd-info-block">
              <span className="pd-label">Role</span>
              <p className="pd-value">{project.role || "Designer & Developer"}</p>
            </div>
            {project.link && (
              <div className="pd-info-block">
                <Button text="Launch Project" href={project.link} variant="secondary" />
              </div>
            )}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;