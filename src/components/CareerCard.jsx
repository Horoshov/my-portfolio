import React, { useRef } from 'react';
import './CareerCard.css';

const CareerCard = ({ company, position, period, link }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty('--x', `${x}px`);
    cardRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <a 
      ref={cardRef}
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="career-card"
      onMouseMove={handleMouseMove}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="career-content">
        <h3 className="career-company">{company}</h3>
        <h2 className="career-position">{position}</h2>
        <p className="career-period">{period}</p>
      </div>
      <div className="career-card-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </a>
  );
};

export default CareerCard;