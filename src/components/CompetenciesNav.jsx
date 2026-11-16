import React, { useRef, useEffect } from 'react';
import './CompetenciesNav.css';

const navItems = [
  { id: 'research', label: 'Исследования и UX' },
  { id: 'design', label: 'Продуктовый дизайн' },
  { id: 'engineering', label: 'Разработка' },
  { id: 'support', label: 'Поддержка и развитие' },
  { id: 'rates', label: 'Аутстафинг' }
];

const CompetenciesNav = ({ activeId, onNavClick }) => {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      const activeElement = navRef.current.querySelector('.competencies-nav-item.active');
      if (activeElement) {
        const navRect = navRef.current.getBoundingClientRect();
        const activeRect = activeElement.getBoundingClientRect();
        
        const scrollLeft = activeElement.offsetLeft - (navRect.width / 2) + (activeRect.width / 2);
        
        navRef.current.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeId]);

  return (
    <nav className="competencies-nav" ref={navRef}>
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`competencies-nav-item ${activeId === item.id ? 'active' : ''}`}
          onClick={() => onNavClick(item.id)}
        >
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default CompetenciesNav;