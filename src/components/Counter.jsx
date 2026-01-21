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
        viewport={{ once: true, amount: 0.1 }}
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
  const digits = Array.from(String(value), Number);

  return (
    <div className="rolling-counter">
      {digits.map((d, i) => (
        <Digit key={i} digit={d} />
      ))}
    </div>
  );
};

export default Counter;