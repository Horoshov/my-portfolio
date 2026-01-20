import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import StatList from '../components/StatList';

const About = () => {
  const aboutStats = [
    { value: '10', label: 'of Experience', title: 'Years' },
    { value: '80+', label: 'Completed Successfully', title: 'Projects' },
    { value: '95', label: 'Customer Satisfaction', title: 'Percent' }
  ];

  return (
    <motion.div
      className="app-container" // Добавил контейнер для выравнивания по сетке сайта
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader title="About Me" />
      
      <section className="stats-section">
        {/* ИСПРАВЛЕНО: Убрали <div className="stats-grid">, 
           так как она теперь внутри StatList 
        */}
        <StatList stats={aboutStats} />
      </section>
    </motion.div>
  );
};

export default About;