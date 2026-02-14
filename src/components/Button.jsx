import React from 'react';
import './Button.css';

/**
 * Универсальный компонент кнопки
 * 
 * @param {string} variant - Вариант стиля: 'primary' | 'secondary'
 * @param {string} children - Текст кнопки
 * @param {boolean} icon - Показывать ли иконку стрелки
 * @param {string} href - Если передан, кнопка становится ссылкой
 * @param {function} onClick - Обработчик клика
 * @param {string} className - Дополнительные классы
 * @param {object} ...props - Остальные пропсы
 */
const Button = ({ 
  variant = 'primary', 
  children, 
  icon = false,
  href,
  onClick,
  className = '',
  ...props 
}) => {
  const buttonClass = [
    'btn',
    `btn-${variant}`,
    icon && 'btn-with-icon',
    className
  ].filter(Boolean).join(' ');

  const content = (
    <>
      <span className="btn-text">{children}</span>
      {icon && (
        <span className="btn-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
          </svg>
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {content}
    </button>
  );
};

export default Button;
