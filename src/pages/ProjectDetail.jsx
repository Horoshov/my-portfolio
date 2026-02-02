import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allProjects } from '../data/projects';
import PageContainer from '../components/PageСontainer';
import PageHeader from '../components/PageHeader';
import PostmanTrackerLayout from './layouts/PostmanTrackerLayout';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = allProjects.find((p) => String(p.id) === String(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Обработка случая когда проект не найден
  if (!project) {
    return (
      <PageContainer>
        <div className="pd-not-found">
          <h1>Project not found</h1>
          <Link to="/projects" className="pd-back-link">
            ← Back to Projects
          </Link>
        </div>
      </PageContainer>
    );
  }

  // Проверка ID для переключения на кастомный макет
  const isPostman = String(id) === 'postman-tracker';

  return (
    <motion.div 
      className="project-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isPostman ? (
        // Для Postman используется полностью кастомный layout БЕЗ PageContainer
        <PostmanTrackerLayout project={project} />
      ) : (
        // Для всех остальных проектов используем PageContainer
        <PageContainer>
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
            <section className="pd-text-block-new">
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
            <section className="pd-footer-image-section">
              <img 
                src={project.imageFooter} 
                alt={`${project.title} detailed view`} 
                className="pd-hero-img" 
              />
            </section>
          )}

          <footer className="pd-back-footer">
            <Link to="/projects" className="pd-back-link">
              ← Back to Projects
            </Link>
          </footer>
        </PageContainer>
      )}
    </motion.div>
  );
};

export default ProjectDetail;