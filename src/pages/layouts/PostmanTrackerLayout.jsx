import React from 'react';
import styles from './PostmanTrackerLayout.module.css';

const PostmanTrackerLayout = ({ project }) => {
  return (
    <div className={styles.customPage}>
      {/* Секция Hero с синим фоном */}
      <section className={styles.hero}>
        <div className={styles.container}>
          {/* Контентная часть (Заголовок) */}
          <div className={styles.content}>
            <h1 className={styles.title}>{project.title}</h1>
          </div>
          
          {/* Область с экранами (под анимацию) */}
          <div className={styles.screensWrapper}>
            {/* Здесь будут ваши экраны из Figma */}
            <div className={styles.screenPlaceholder}>Device Screens</div>
          </div>
        </div>
      </section>

      {/* Дальнейшие секции... */}
      <section className={styles.details}>
          {/* Контент под Hero */}
      </section>
    </div>
  );
};

export default PostmanTrackerLayout;