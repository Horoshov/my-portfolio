import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title }) => {
  return (
    <section className="section-header-grid">
      <div className="section-header-col">
        <motion.h1 
          className="section-header-title"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
};

export default PageHeader;