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
    question: "Вы работаете как со стартапами, так и с известными брендами?",
    answer: "Да — будь то новый стартап, только создающий свой продукт, или состоявшаяся компания, желающая обновить свое цифровое присутствие, я создаю дизайн, который соответствует вашим бизнес-целям."
  },
  {
    question: "Вы проектируете и сайты, и мобильные приложения?",
    answer: "Безусловно. Я специализируюсь на сквозном проектировании цифровых продуктов, включая сложные веб-платформы и нативные мобильные приложения для iOS и Android."
  },
  {
    question: "Каковы типичные сроки реализации проекта?",
    answer: "Сроки варьируются в зависимости от объема, но стандартный проект обычно занимает от 4 до 8 недель от исследования до финальной передачи материалов."
  },
  {
    question: "Вы предлагаете услуги разработки или только дизайн?",
    answer: "Мой основной фокус — UI/UX дизайн, я так же могу обеспечить разработку своими силами или порекомендовать проверенных партнеров для кастомного программирования."
  },
  {
    question: "Как нам начать работу над новым проектом?",
    answer: "Просто заполните контактную форму выше! Я пришлю бриф, изучу ваши требования и запланирую короткий звонок для обсуждения ваших целей."
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