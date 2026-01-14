import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <motion.div 
      /* Эти настройки работают в паре с AnimatePresence из твоего App.js */
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <PageHeader title="Contact" />
      
      <section className="contact-section">
        <div className="contact-grid">
          
          {/* Левая колонка */}
          <div className="contact-info-col">
            <h2 className="footer-huge-text">
              Let’s start <br />
              a project
            </h2>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="label">Email me</span>
                <a href="mailto:ux@horoshov.ru" className="footer-email-link">
                  hello@example.com
                </a>
              </div>
              
              <div className="contact-item" style={{ marginTop: '40px' }}>
                <span className="label">Social</span>
                <div className="nav-menu" style={{ marginTop: '10px' }}>
                  <a href="#" className="menu-item">Instagram</a>
                  <a href="#" className="menu-item">LinkedIn</a>
                  <a href="#" className="menu-item">Behance</a>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка с формой */}
          <div className="contact-form-col">
            <ContactForm />
          </div>
          
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;