import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Digit = ({ digit }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numbers = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div className="digit-column-wrapper">
      <motion.div
        initial={{ y: 0 }}
        animate={isInView ? { y: `-${digit * 10}%` } : { y: 0 }}
        transition={{ 
          duration: 2.5, 
          ease: [0.65, 0, 0.35, 1], // Плавный заезд
          delay: Math.random() * 0.3 
        }}
        className="digit-column"
        ref={ref}
      >
        {numbers.map((num) => (
          <div key={num} className="digit-number">{num}</div>
        ))}
      </motion.div>
    </div>
  );
};

const RollingCounter = ({ value }) => {
  const digits = String(value).replace(/\D/g, '').split('');
  return (
    <div className="rolling-counter">
      {digits.map((d, i) => <Digit key={i} digit={parseInt(d)} />)}
    </div>
  );
};

const StatList = ({ stats }) => {
  return (
    <>
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-number-wrapper">
            <RollingCounter value={stat.value} />
            {stat.value.includes('+') && <span className="stat-suffix">+</span>}
          </div>
          <div className="stat-info">
            <span className="stat-label">{stat.label}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default StatList;