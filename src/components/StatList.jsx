import React from 'react';
import Counter from './Counter';

const StatList = ({ stats }) => {
  if (!stats) return null;

  return (
    <>
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          {/* СВЕРХУ СЛЕВА */}
          <div className="stat-number-wrapper">
            <Counter value={parseInt(stat.value) || 0} />
            {(stat.suffix || stat.value.toString().includes('+')) && (
              <span className="stat-suffix">+</span>
            )}
          </div>
          
          {/* СНИЗУ СПРАВА */}
          <div className="stat-text-group">
            {stat.title && <span className="stat-small-title">{stat.title}</span>}
            <p className="stat-main-label">{stat.label}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default StatList;