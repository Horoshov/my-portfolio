import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title }) => {
  return (
    <section className="recent-works-grid">
      <div className="recent-works-col" style={{ padding: '100px 20px 40px' }}>
        <motion.h1 
          className="recent-works-title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
            fontSize: '72px', 
            fontWeight: '700', 
            letterSpacing: '-0.05em',
            margin: 0 
          }}
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
};

export default PageHeader;