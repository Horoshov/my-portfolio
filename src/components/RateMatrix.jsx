import React from 'react';
import { motion } from 'framer-motion';
import './RateMatrix.css';

const rates = [
  {
    format: 'Продуктовый аудит & UX Review',
    timeline: '3–5 дней',
    price: 'от 120 000 ₽',
    desc: 'Глубокий анализ существующего интерфейса, выявление точек потери конверсии и дорожная карта улучшений.'
  },
  {
    format: 'End-to-End Product Design',
    timeline: 'от 1 месяца',
    price: 'от 250 000 ₽ / мес',
    desc: 'Полный цикл проектирования: исследования, CJM, интерактивные прототипы, UI и передача в разработку.'
  },
  {
    format: 'Frontend Разработка & Design Systems',
    timeline: 'от 2 недель',
    price: 'от 200 000 ₽ / мес',
    desc: 'Реализация интерфейсов на React / TypeScript / Tailwind с интеграцией дизайн-токенов и анимаций.'
  },
  {
    format: 'Advisory & Mentor Support',
    timeline: 'По подписке',
    price: 'от 80 000 ₽ / мес',
    desc: 'Стратегические сессии, код-ревью фронтенда, ревью дизайн-артефактов и менторство продуктовых команд.'
  }
];

const RateMatrix = () => {
  return (
    <div id="rates" className="rate-matrix-wrapper" style={{ scrollMarginTop: '140px' }}>
      <h3 className="rate-matrix-heading">Форматы сотрудничества и тарифы</h3>
      <div className="rate-matrix-grid">
        {rates.map((item, index) => (
          <motion.div 
            key={index}
            className="rate-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="rate-card-top">
              <h4 className="rate-format">{item.format}</h4>
              <span className="rate-price">{item.price}</span>
            </div>
            <p className="rate-desc">{item.desc}</p>
            <div className="rate-footer">
              <span className="rate-timeline">⏱ {item.timeline}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RateMatrix;
