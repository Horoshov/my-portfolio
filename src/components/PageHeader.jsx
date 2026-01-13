import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title }) => {
  return (
    <section className="recent-works-grid">
      <div className="recent-works-col">
        <motion.h1 
          className="recent-works-title"
          initial={{ opacity: 0, y: 20 }}
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