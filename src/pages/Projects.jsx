import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';

// Данные проектов
const allProjects = [
  { 
    id: 101, 
    title: 'CoinCom', 
    cat: '{Fintech}', 
    image: '/assets/projects/CoinCom.webp' 
  },
  { 
    id: 102, 
    title: 'Domilend', 
    cat: '{PropTech, Real Estate}', 
    image: '/assets/projects/Domilend.webp' 
  },
  { 
    id: 103, 
    title: 'Postman', 
    cat: '{Logistics}', 
    image: '/assets/projects/Postman.webp' 
  },
  { 
    id: 104, 
    title: 'Horoshov', 
    cat: '{Portfolio of UX/UI, Product Designer}', 
    image: '/assets/projects/Horoshov.webp' 
  },
  { 
    id: 105, 
    title: 'Betonica', 
    year: '2024',
    cat: '{E-commerce, with a built-in 3D module}', 
    image: '/assets/projects/Cover.webp' 
  },
  {
    id: 106, 
    title: 'Polimatica', 
    year: '2023',
    cat: '{BI system, graphs, visualizations and dashboards}', 
    image: '/assets/projects/Polimatica.webp' 
  },
  {
    id: 107, 
    title: 'M.Video-Eldorado', 
    year: '2023',
    cat: '{Е-commerce, OneRetail}', 
    image: '/assets/projects/Mvideo.webp' 
  }

];

const Projects = () => {
  return (
    <motion.div 
      className="projects-page"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader title="Projects" />

      <section className="projects-content" style={{ padding: '80px 0' }}>
        <div className="projects-grid-main">
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;