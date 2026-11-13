import React from 'react';
import { motion } from 'framer-motion';
import './RateMatrix.css';

const sections = [
  {
    title: 'Дизайн',
    items: [
      { position: 'Продуктовый UX/UI дизайнер', middle: '3000 ₽/час', senior: '3100 ₽/час' },
      { position: 'Графический дизайнер', middle: '2900 ₽/час', senior: '3100 ₽/час' },
      { position: '3D дизайнер', middle: '3200 ₽/час', senior: '3300 ₽/час' },
      { position: 'Моушен-дизайнер', middle: '3100 ₽/час', senior: '3200 ₽/час' },
      { position: 'Копирайтер', middle: '2800 ₽/час', senior: '—' }
    ]
  },
  {
    title: 'Разработка',
    items: [
      { position: 'Фронтенд-разработчик (React)', middle: '3100 ₽/час', senior: '3300 ₽/час' },
      { position: 'Фронтенд-разработчик (Vue.js)', middle: '3100 ₽/час', senior: '3300 ₽/час' },
      { position: 'Верстальщик (HTML/CSS/JS)', middle: '2900 ₽/час', senior: '3100 ₽/час' },
      { position: 'Бэкенд-разработчик (Java, Spring)', middle: '3400 ₽/час', senior: '3600 ₽/час' },
      { position: 'Бэкенд-разработчик (PHP, Yii2, Laravel)', middle: '3400 ₽/час', senior: '3600 ₽/час' },
      { position: 'Бэкенд-разработчик (Node.js, Nest.js)', middle: '3400 ₽/час', senior: '3600 ₽/час' },
      { position: 'Тестировщик (QA-инженер ручного тестирования)', middle: '2300 ₽/час', senior: '2500 ₽/час' },
      { position: 'Тестировщик (QA-инженер автоматизированного тестирования)', middle: '2700 ₽/час', senior: '2900 ₽/час' }
    ]
  }
];

const RateMatrix = () => {
  return (
    <div id="rates" className="rate-matrix-wrapper" style={{ scrollMarginTop: '140px' }}>
      <div className="rate-matrix-header">
        <h3 className="rate-matrix-heading">
          <span style={{ 
            position: 'relative',
            display: 'inline-flex', 
            alignItems: 'center',
            justifyContent: 'center',
            width: '12px', 
            height: '12px', 
            marginRight: '12px',
            verticalAlign: 'middle',
          }}>
            <span style={{
              position: 'absolute',
              width: '18px',
              height: '18px',
              backgroundColor: '#34c759',
              borderRadius: '50%',
              opacity: 0.4,
            }}></span>
            <span style={{ 
              position: 'relative',
              width: '12px', 
              height: '12px', 
              backgroundColor: '#34c759', 
              borderRadius: '50%', 
              animation: 'pulse 2s infinite',
            }}></span>
          </span>
          Аутстаффинг
        </h3>
        <p className="rate-matrix-subtitle">
          За 5 лет собрали обширную базу специалистов, которых проверили и обучили внутри нашей продуктовой лаборатории
        </p>
      </div>

      <div className="rate-sections">
        {sections.map((section, sIndex) => (
          <motion.div 
            key={sIndex}
            className="rate-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: sIndex * 0.1 }}
          >
            <h4 className="rate-section-title">{section.title}</h4>
            
            <div className="rate-table">
              <div className="rate-table-header">
                <span className="col-pos">Позиция</span>
                <span className="col-mid">Middle</span>
                <span className="col-sen">Senior</span>
              </div>
              
              <div className="rate-table-body">
                {section.items.map((row, rIndex) => (
                  <div key={rIndex} className="rate-row">
                    <span className="col-pos">{row.position}</span>
                    <span className="col-mid">{row.middle}</span>
                    <span className="col-sen">{row.senior}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RateMatrix;

