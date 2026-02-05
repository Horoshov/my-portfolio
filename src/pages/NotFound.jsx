import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageContainer from '../components/PageContainer';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <PageContainer noPaddingTop>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            
            <h1 className={styles.code}>404</h1>
            
            <div className={styles.info}>
              <h2 className={styles.subtitle}>Страница не найдена</h2>
              <p className={styles.description}>
                К сожалению, запрашиваемая страница не найдена. Возможно, она была удалена или переименована
              </p>
              
              <Link to="/" className={styles.backButton}>
                <span>На главную</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1.5 12.5L12.5 1.5M12.5 1.5H1.5M12.5 1.5V12.5" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
};

export default NotFound;