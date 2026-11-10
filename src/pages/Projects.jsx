import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageContainer from '../components/PageContainer';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import ProjectsGrid from '../components/ProjectsGrid';
import { allProjects } from '../data/projects';

const Projects = () => {
  useEffect(() => {
    document.title = 'Кейсы — Horoshov';
  }, []);

  return (
    <motion.div 
      className="projects-page"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <PageContainer>
        <PageHeader title="Продуктовые кейсы" />
        
        <section className="projects-content">
          <ProjectsGrid>
            <AnimatePresence>
              {allProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </ProjectsGrid>
        </section>
      </PageContainer>
    </motion.div>
  );
};

export default Projects;