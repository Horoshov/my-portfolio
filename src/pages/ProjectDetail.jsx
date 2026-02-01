import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allProjects } from '../data/projects';
import PageHeader from '../components/PageHeader'; 
import ProjectCard from '../components/ProjectCard'; 
// ИСПРАВЛЕНО: Путь из src/pages в src/pages/layouts
import PostmanTrackerLayout from './layouts/PostmanTrackerLayout';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = allProjects.find((p) => String(p.id) === String(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div className="pd-not-found">Project not found</div>;

  // Проверка ID для переключения на кастомный макет
  const isPostman = String(id) === 'postman-tracker';

  return (
    <motion.div 
      className="pd-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* ВАЖНО: Если это Postman, мы рендерим ТОЛЬКО PostmanTrackerLayout.
        Мы не оборачиваем его в app-container здесь, если внутри 
        самого макета PostmanTrackerLayout предусмотрена своя сетка.
      */}
      {isPostman ? (
        <PostmanTrackerLayout project={project} />
      ) : (
        <div className="app-container">
          <PageHeader title={project.title} category={project.cat} />

          <section className="pd-info-grid">
            <div className="pd-description-col">
              <div 
                className="project-description" 
                dangerouslySetInnerHTML={{ __html: project.description }} 
              />
              {project.descriptionSecondary && (
                <div 
                  className="pd-desc-secondary" 
                  style={{ marginTop: '30px', opacity: 0.8 }}
                  dangerouslySetInnerHTML={{ __html: project.descriptionSecondary }} 
                />
              )}
            </div>
            
            <div className="pd-details-col">
              {project.details && project.details.map((detail, idx) => (
                <div key={idx} className="pd-detail-item">
                  <span className="pd-detail-label">{detail.label}</span>
                  <span className="pd-detail-value">{detail.value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="pd-hero-section">
            <img src={project.image} alt={project.title} className="pd-hero-img" />
          </section>

          {project.sectionText && (
            <section className="pd-text-block-new" style={{ marginTop: '60px' }}>
              {project.sectionTitle && (
                <h2 className="section-subtitle">{project.sectionTitle}</h2>
              )}
              <div 
                className="section-description" 
                dangerouslySetInnerHTML={{ __html: project.sectionText }} 
              />
            </section>
          )}

          {project.imageFooter && (
            <section className="pd-footer-image-section" style={{ marginTop: '60px' }}>
              <img 
                src={project.imageFooter} 
                alt={`${project.title} detailed view`} 
                className="pd-hero-img" 
                style={{ borderRadius: '12px', width: '100%', height: 'auto', display: 'block' }} 
              />
            </section>
          )}

          <footer className="pd-back-footer" style={{ marginTop: '80px', paddingBottom: '60px' }}>
            <Link 
              to="/projects" 
              className="pd-back-link" 
              style={{ textDecoration: 'none', color: 'var(--text-color)', fontWeight: '600' }}
            >
              ← Back to Projects
            </Link>
          </footer>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectDetail;