import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allProjects } from '../data/projects';
import PageHeader from '../components/PageHeader'; // Добавили PageHeader
import ProjectCard from '../components/ProjectCard'; // Добавили ProjectCard
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = allProjects.find((p) => String(p.id) === String(id));

  // Логика для выбора 2-х следующих проектов (исключая текущий)
  const nextProjects = allProjects
    .filter((p) => String(p.id) !== String(id))
    .slice(0, 2);

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
        {/* Огромный заголовок в стиле Home */}
        <h1 className="pd-main-title">{project.title}</h1>

        <section className="pd-info-grid">
          {/* Левая колонка: Теперь поддерживает несколько абзацев */}
          <div className="pd-description-col">
            <p>{project.description}</p>
            {project.descriptionSecondary && (
              <p className="pd-desc-secondary">{project.descriptionSecondary}</p>
            )}
          </div>
          
          {/* Правая колонка: Все данные теперь тянутся из пропсов */}
          <div className="pd-specs-col">
            <div className="pd-spec-item">
              <span className="pd-label">Project Name:</span>
              <p className="pd-value">{project.title}</p>
            </div>
            <div className="pd-spec-item">
              <span className="pd-label">Timeline:</span>
              <p className="pd-value">{project.timeline || project.year}</p>
            </div>
            <div className="pd-spec-item">
              <span className="pd-label">Live Website:</span>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer" className="pd-value pd-link">
                  {project.linkDisplay || 'Visit Site'}
                </a>
              ) : (
                <p className="pd-value">Coming Soon</p>
              )}
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
              <p className="pd-value">{project.fullDate || project.year}</p>
            </div>
          </div>
        </section>

        {/* Главное изображение кейса */}
        <section className="pd-hero-section">
          <img src={project.image} alt={project.title} className="pd-hero-img" />
        </section>

        {/* Секция Next Projects: 1 ряд - 2 карточки */}
        <section className="pd-next-section">
          <PageHeader 
            title="Next Projects" 
            description="Explore more of my work and case studies."
          />
          <div className="projects-grid-custom next-grid">
            {nextProjects.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </div>
        </section>

        <footer className="pd-back-footer">
          <Link to="/projects" className="pd-back-link">← Back to Projects</Link>
        </footer>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;