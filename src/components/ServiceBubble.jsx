import React from 'react';
import { motion } from 'framer-motion';
import './ServiceBubble.css';

const ServiceBubble = ({ text }) => {
  return (
    <motion.div 
      className="service-bubble"
      whileHover={{ scale: 1.03, y: -2 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      <span>{text}</span>
    </motion.div>
  );
};

export default ServiceBubble;
