import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import PageContainer from '../components/PageContainer';
import FAQ from '../components/FAQ';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <PageContainer>
        <PageHeader title="Get In Touch" />
      </PageContainer>
      
      <PageContainer>
        <section className="contact-section" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          padding: '40px 0 100px' 
        }}>
          {/* Форма: оставляем 800px, как было */}
          <div style={{ width: '100%', maxWidth: '800px', marginBottom: '100px' }}> 
            <ContactForm />
          </div>

          {/* FAQ: делаем шире (1000px) и центрируем */}
          <div style={{ width: '100%', maxWidth: '1000px' }}>
            <FAQ />
          </div>
        </section>
      </PageContainer>
    </motion.div>
  );
};

export default Contact;