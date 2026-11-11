import React from 'react';
import './CompetenciesNav.css';

const navItems = [
  { id: 'research', label: '01. Исследования и UX' },
  { id: 'design', label: '02. Продуктовый дизайн' },
  { id: 'engineering', label: '03. Разработка' },
  { id: 'support', label: '04. Поддержка и развитие' },
  { id: 'rates', label: 'Тарифы и форматы' }
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
