import React from 'react';
import { motion } from 'framer-motion';
import ServiceBubbleGrid from './ServiceBubbleGrid';
import './ServiceBlock.css';

const ServiceBlock = ({ id, number, title, description, bubbles }) => {
  return (
    <motion.div 
      id={id}
      className="service-block-item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ scrollMarginTop: '140px' }}
    >
      <div className="service-block-header">
        <h3 className="service-block-title">{title}</h3>
      </div>
      <p className="service-block-description">{description}</p>
      <ServiceBubbleGrid bubbles={bubbles} />
    </motion.div>
  );
};

export default ServiceBlock;
