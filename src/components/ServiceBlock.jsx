import React from 'react';
import { motion } from 'framer-motion';
import ServiceBubbleGrid from './ServiceBubbleGrid';
import './ServiceBlock.css';

const ServiceBlock = ({ id, title, description, bubbles, services }) => {
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
      
      {bubbles && <ServiceBubbleGrid bubbles={bubbles} />}

      {services && (
        <div className="services-list" style={{ marginTop: '40px' }}>
          <h4 style={{ marginBottom: '20px', color: 'var(--text-color)' }}>Услуги</h4>
          {services.map((s, index) => (
            <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                
                <span style={{ fontWeight: '600', color: 'var(--text-color)' }}>{s.name}</span>
              </div>
              <p style={{ color: 'var(--gray-text)', fontSize: '15px' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ServiceBlock;
