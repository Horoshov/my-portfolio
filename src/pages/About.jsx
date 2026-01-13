import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import StatList from '../components/StatList'; // Импортируем из файла выше

const About = () => {
  const aboutStats = [
    { value: '08', label: 'Years of Experience' },
    { value: '120+', label: 'Projects Completed' },
    { value: '15', label: 'Design Awards' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader title="About Me" />
      
      <section className="stats-section">
        <div className="stats-grid">
          <StatList stats={aboutStats} />
        </div>
      </section>
    </motion.div>
  );
};

export default About;