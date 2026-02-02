import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQ.module.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      layout 
      className={styles.faqItem}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.questionWrapper}>
        <h3 className={styles.question}>{question}</h3>
        <motion.div 
          className={styles.icon}
          animate={{ rotate: isOpen ? 45 : 0 }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 0V14M0 7H14" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className={styles.answerWrapper}
          >
            <p className={styles.answer}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;