import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <PageHeader title="Get In Touch" />
      
      <section className="contact-section" style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Контейнер с фиксированной шириной, выровненный по центру */}
        <div style={{ width: '100%', maxWidth: '900px' }}> 
          <ContactForm />
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;