import React from 'react';
import './PageContainer.css';

/**
 * Универсальный контейнер для страниц
 * 
 * @param {React.ReactNode} children - Контент страницы
 * @param {string} className - Дополнительные классы
 * @param {boolean} fullWidth - Убрать ограничение max-width (для full-width секций)
 * @param {boolean} noPadding - Убрать горизонтальный padding (для специальных кейсов)
 * @param {boolean} noPaddingTop - Убрать верхний отступ (когда нужен кастомный spacing)
 */
const PageContainer = ({ 
  children, 
  className = '', 
  fullWidth = false,
  noPadding = false,
  noPaddingTop = false
}) => {
  const classes = [
    'page-container',
    fullWidth && 'full-width',
    noPadding && 'no-padding',
    noPaddingTop && 'no-padding-top',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default PageContainer;