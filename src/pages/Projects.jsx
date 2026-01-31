import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import ProjectsGrid from '../components/ProjectsGrid'; // 1. Импортировали компонент сетки
import { allProjects } from '../data/projects';

const Projects = () => {
  return (
    <motion.div 
      className="page-wrapper projects-page" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <PageHeader title="Recent Works" />
      
      <section className="projects-content" style={{ paddingBottom: '100px' }}>
        {/* 2. Заменили div с классом на компонент ProjectsGrid */}
        <ProjectsGrid>
          <AnimatePresence>
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </ProjectsGrid>
      </section>
    </motion.div>
  );
};

export default Projects;