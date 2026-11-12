import React from 'react';
import './CompetenciesNav.css';

const navItems = [
  { id: 'research', label: 'Исследования и UX' },
  { id: 'design', label: 'Продуктовый дизайн' },
  { id: 'engineering', label: 'Разработка' },
  { id: 'support', label: 'Поддержка и развитие' },
  { id: 'rates', label: 'Аутстафинг' }
];

const CompetenciesNav = ({ activeId, onNavClick }) => {
  return (
    <nav className="competencies-nav">
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
