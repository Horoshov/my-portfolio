import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { allProjects } from '../data/projects';

const Projects = () => {
  return (
    <motion.div 
      className="projects-page" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <PageHeader title="Recent Works" />
      
      <section className="projects-content" style={{ padding: '0px 0 100px' }}>
        <div className="projects-grid-custom">
          <AnimatePresence>
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  );
};


export default Projects;