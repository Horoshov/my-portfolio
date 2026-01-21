import React from 'react';

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="section-header-col">
      <h1 className="section-header-title">{title}</h1>
      {subtitle && <h2 className="section-header-subtitle">{subtitle}</h2>}
    </div>
  );
};

export default PageHeader;