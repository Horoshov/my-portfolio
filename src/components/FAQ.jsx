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
          transition={{ duration: 0.2 }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 0V14M0 7H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className={styles.answerWrapper}
          >
            <p className={styles.answer}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const faqData = [
  {
    question: "Do you work with startups as well as established brands?",
    answer: "Yes—whether you’re a new startup just establishing your brand or an established company looking to refresh your digital presence, I create designs that align perfectly with your business goals."
  },
  {
    question: "Can you design both websites and mobile apps?",
    answer: "Absolutely. I specialize in end-to-end digital product design, including complex web platforms and native mobile applications for iOS and Android."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary depending on scope, but a standard project usually takes between 4 to 8 weeks from research to final handoff."
  },
  {
    question: "Do you offer development services or just design?",
    answer: "My primary focus is UI/UX design, but I work closely with developers and can provide Webflow development or refer you to trusted partners for custom coding."
  },
  {
    question: "How do we get started with a new project?",
    answer: "Simply fill out the contact form above! I’ll review your requirements and schedule a brief discovery call to discuss your goals."
  }
];

const FAQ = () => {
  return (
    <div className={styles.faqSection}>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={styles.title}
      >
        FAQ
      </motion.h2>
      <div className={styles.list}>
        {faqData.map((item, index) => (
          <FAQItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;