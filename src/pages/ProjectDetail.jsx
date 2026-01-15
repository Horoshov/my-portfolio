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
        {/* ШАПКА: Категория и Заголовок */}
        <header className="pd-header">
          <div className="pd-meta">
            <span className="pc-tag">{`{${project.cat}}`}</span>
            <span className="pc-divider">/</span>
            <span className="pc-tag">{project.year}</span>
          </div>
          <h1 className="pd-title">{project.title}</h1>
        </header>

        {/* ИНФО-БЛОК: Описание и Детали (НАД КАРТИНКОЙ) */}
        <section className="pd-content-grid">
          <div className="pd-description">
            <p>{project.description}</p>
          </div>
          
          <div className="pd-sidebar">
            <div className="pd-info-item">
              <span className="pd-label">Client</span>
              <p className="pd-value">{project.client || "Confidential"}</p>
            </div>
            <div className="pd-info-item">
              <span className="pd-label">Role</span>
              <p className="pd-value">{project.role || "Product Designer"}</p>
            </div>
            {project.link && (
              <div className="pd-info-item pd-action">
                <a href={project.link} target="_blank" rel="noreferrer" className="pd-launch-link">
                  Launch Project <span>↗</span>
                </a>
              </div>
            )}
          </div>
        </section>

        {/* ГЛАВНОЕ ИЗОБРАЖЕНИЕ (ПОД ТЕКСТОМ) */}
        <section className="pd-hero">
          <img src={project.image} alt={project.title} className="pd-main-img" />
        </section>

        {/* ФУТЕР С КНОПКОЙ НАЗАД */}
        <footer className="pd-footer">
          <Link to="/projects" className="pd-back-link">
            <span>←</span> Back to all projects
          </Link>
        </footer>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;