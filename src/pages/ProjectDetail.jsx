import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allProjects } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = allProjects.find((p) => String(p.id) === String(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div className="pd-not-found">Project not found</div>;

  return (
    <motion.div 
      className="pd-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="pd-container">
        {/* Огромный заголовок как на скриншоте */}
        <h1 className="pd-main-title">{project.title}</h1>

        {/* Сетка с описанием и характеристиками */}
        <section className="pd-info-grid">
          {/* Левая колонка: Описание */}
          <div className="pd-description-col">
            <p>{project.description}</p>
            {project.descriptionSecondary && (
              <p className="pd-desc-secondary">{project.descriptionSecondary}</p>
            )}
          </div>
          
          {/* Правая колонка: Характеристики в два столбца */}
          <div className="pd-specs-col">
            <div className="pd-spec-item">
              <span className="pd-label">Project Name:</span>
              <p className="pd-value">{project.title}</p>
            </div>
            <div className="pd-spec-item">
              <span className="pd-label">Timeline:</span>
              <p className="pd-value">{project.timeline || '2 Months'}</p>
            </div>
            <div className="pd-spec-item">
              <span className="pd-label">Live Website:</span>
              <a href={project.link} target="_blank" rel="noreferrer" className="pd-value pd-link">
                {project.linkDisplay || 'www.website.com'}
              </a>
            </div>
            <div className="pd-spec-item">
              <span className="pd-label">Location:</span>
              <p className="pd-value">{project.location || 'Remote'}</p>
            </div>
            <div className="pd-spec-item">
              <span className="pd-label">Industry:</span>
              <p className="pd-value">{project.cat}</p>
            </div>
            <div className="pd-spec-item">
              <span className="pd-label">Date:</span>
              <p className="pd-value">{project.fullDate || 'December 20, 2025'}</p>
            </div>
          </div>
        </section>

        {/* Изображение под текстом */}
        <section className="pd-hero-section">
          <img src={project.image} alt={project.title} className="pd-hero-img" />
        </section>

        <footer className="pd-back-footer">
          <Link to="/projects" className="pd-back-link">← Back to Projects</Link>
        </footer>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;