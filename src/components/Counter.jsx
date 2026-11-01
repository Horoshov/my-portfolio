import React from 'react';
import { motion } from 'framer-motion';

const Digit = ({ digit }) => {
  // Определяем варианты анимации
  const variants = {
    hidden: { y: 0 },
    visible: { 
      y: `-${digit * 10}%`,
      transition: { 
        type: "spring", 
        stiffness: 40, 
        damping: 15, 
        mass: 1 
      }
    }
  };

  return (
    <div className="digit-column-wrapper">
      <motion.div
        className="digit-column"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1, margin: "-50px" }}
        variants={variants}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <div key={n} className="digit-number">{n}</div>
        ))}
      </motion.div>
    </div>
  );
};

const Counter = ({ value }) => {
  // Извлекаем префикс (например, "х")
  const prefixMatch = String(value).match(/^[^0-9]+/);
  const prefix = prefixMatch ? prefixMatch[0] : '';
  
  // Извлекаем числовую часть
  const numericValue = String(value).replace(/[^0-9]/g, '');
  
  // Извлекаем суффикс (например, "%", "+", "$")
  const suffixMatch = String(value).match(/[^0-9]+$/);
  const suffix = suffixMatch ? suffixMatch[0] : '';

  const digits = Array.from(numericValue, Number);

  return (
    <div className="rolling-counter">
      {prefix && <span className="counter-prefix">{prefix}</span>}
      {digits.map((d, i) => (
        <Digit key={i} digit={d} />
      ))}
      {suffix && <span className="counter-suffix">{suffix}</span>}
    </div>
  );
};

export default Counter;