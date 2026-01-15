import React, { useState } from 'react';
import './Button.css';

const Button = ({ text, href, onClick, variant = 'primary', showArrow = true }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
      if (text.toLowerCase().includes('email')) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  const content = (
    <>
      <span className="btn-text">{copied ? "Copied!" : text}</span>
      {showArrow && !copied && <span className="btn-arrow">↗</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`custom-btn btn-${variant}`} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={`custom-btn btn-${variant}`} onClick={handleClick}>
      {content}
    </button>
  );
};

export default Button;