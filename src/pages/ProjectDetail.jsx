import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allProjects } from '../data/projects';
import PageHeader from '../components/PageHeader'; 
import ProjectCard from '../components/ProjectCard'; 

const ProjectDetail = () => {
  const { id } = useParams();
  const project = allProjects.find((p) => String(p.id) === String(id));

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
          
          <div className="pd-specs-col">
            <div className="pd-spec-item"><span className="pd-label">Timeline:</span><p className="pd-value">{project.timeline}</p></div>
            <div className="pd-spec-item"><span className="pd-label">Role:</span><p className="pd-value">{project.role}</p></div>
            <div className="pd-spec-item">
              <span className="pd-label">Live Website:</span>
              {project.link && project.link !== '#' ? (
                <a href={project.link} target="_blank" rel="noreferrer" className="pd-value pd-link">{project.linkDisplay}</a>
              ) : ( <p className="pd-value">Coming Soon</p> )}
            </div>
            <div className="pd-spec-item"><span className="pd-label">Location:</span><p className="pd-value">{project.location}</p></div>
            <div className="pd-spec-item"><span className="pd-label">Industry:</span><p className="pd-value">{project.cat}</p></div>
            <div className="pd-spec-item"><span className="pd-label">Date:</span><p className="pd-value">{project.fullDate}</p></div>
          </div>
        </section>

        <section className="pd-hero-section">
          <img src={project.image} alt={project.title} className="pd-hero-img" />
        </section>

        {/* ОСНОВНОЙ КЕЙС */}
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

        <section className="pd-next-section">
          <PageHeader title="Next Projects" />
          <div className="projects-grid-main">
            {nextProjects.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </div>
        </section>

        <footer className="pd-back-footer" style={{ marginTop: '80px', paddingBottom: '60px' }}>
          <Link to="/projects" className="pd-back-link" style={{ textDecoration: 'none', color: 'var(--text-color)', fontWeight: '600' }}>
            ← Back to Projects
          </Link>
        </footer>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;