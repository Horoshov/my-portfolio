import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './PostmanTrackerLayout.module.css';
import PageContainer from "../../components/PageContainer"; 
import screensImg from '../../assets/Screens.webp'; 

const PostmanTrackerLayout = ({ project }) => {
  const { scrollY } = useScroll();

  // Динамические значения для анимации
  const yRange = useTransform(scrollY, [0, 800], [0, -120]);
  const scaleRange = useTransform(scrollY, [0, 800], [1, 1.12]); // чуть меньше зум (12% вместо 15%)

  return (
    <div className={styles.customPage}>
      <PageContainer fullWidth noPadding noPaddingTop>
        <section className={styles.hero}>
          <div className={styles.content}>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.title}
            >
              {project.title}
            </motion.h1>
          </div>

          <motion.div 
            style={{ y: yRange, scale: scaleRange }} 
            className={styles.screensWrapper}
          >
            <img src={screensImg} alt="App Screens" className={styles.mainImage} />
          </motion.div>
        </section>
      </PageContainer>

      {/* Теперь этот блок будет менять цвет фона при смене темы */}
      <div className={styles.whiteOverlap}>
        <PageContainer>
          <section className="pd-text-block-new">
            <div className="section-header-col">
              <h2 className="section-subtitle">Product Overview</h2>
              <div className="section-description">
                <p className={styles.overviewSubtitle}>Concept, Research & Key Features</p>
              </div>
            </div>
          </section>
        </PageContainer>
      </div>
    </div>
  );
};

export default PostmanTracker