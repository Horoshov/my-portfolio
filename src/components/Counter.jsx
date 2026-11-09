import React from 'react';
import { motion } from 'framer-motion';

const getCharList = (targetChar) => {
  if (/[0-9]/.test(targetChar)) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  if (/[a-z]/.test(targetChar)) {
    return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', targetChar];
  }
  if (/[A-Z]/.test(targetChar)) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', targetChar];
  }
  if (/[А-ЯЁ]/.test(targetChar)) {
    return ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', targetChar];
  }
  if (/[а-яё]/.test(targetChar)) {
    return ['а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', targetChar];
  }
  return ['$', '€', '£', '¥', '+', '-', '%', '—', '#', targetChar];
};

const CharColumn = ({ char }) => {
  if (char === ' ') {
    return <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>;
  }

  const list = getCharList(char);
  const targetIndex = list.length - 1;

  const variants = {
    hidden: { y: 0 },
    visible: { 
      y: `-${targetIndex * 10}%`,
      transition: { 
        duration: 1.5, 
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="digit-column-wrapper">
      <motion.div
        className="digit-column"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={variants}
      >
        {list.map((item, n) => (
          <div key={n} className="digit-number">{item}</div>
        ))}
      </motion.div>
    </div>
  );
};

const Counter = ({ value }) => {
  const chars = String(value).split('');

  return (
    <div className="rolling-counter">
      {chars.map((ch, i) => (
        <CharColumn key={i} char={ch} />
      ))}
    </div>
  );
};

export default Counter;