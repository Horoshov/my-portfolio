import React from 'react';
import styles from './ProjectsGrid.module.css';

/**
 * Компонент сетки, который реализует шахматный паттерн (2-3-3-2).
 * Принимает children (список карточек проектов).
 */
const ProjectsGrid = ({ children }) => {
  return (
    <div className={styles.projectsGridCustom}>
      {children}
    </div>
  );
};

export default ProjectsGrid;