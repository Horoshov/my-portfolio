import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
// Обязательно добавь импорт твоего контейнера
import PageContainer from '../components/PageContainer'; 

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* 1. Оборачиваем заголовок в контейнер, если PageHeader сам этого не делает */}
      <PageContainer>
        <PageHeader title="Get In Touch" />
      </PageContainer>
      
      {/* 2. Основная секция с формой */}
      <PageContainer>
        <section className="contact-section" style={{ 
          display: 'flex', 
          justifyContent: 'center',
          padding: '40px 0 100px' // Добавим отступы сверху и снизу
        }}>
          {/* Контейнер формы с ограничением ширины */}
          <div style={{ width: '100%', maxWidth: '800px' }}> 
            <ContactForm />
          </div>
        </section>
      </PageContainer>
    </motion.div>
  );
};

export default Contact;