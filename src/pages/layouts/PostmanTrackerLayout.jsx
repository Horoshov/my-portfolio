import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './PostmanTrackerLayout.module.css';
import PageContainer from "../../components/PageContainer"; 
import PageHeader from "../../components/PageHeader"; 

import screensImg from '../../assets/Screens.webp'; 
import mindMapSvg from '../../assets/MindMap.svg';

const PostmanTrackerLayout = ({ project }) => {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();

  const yRange = useTransform(scrollY, [0, 800], [0, -120]);
  const scaleRange = useTransform(scrollY, [0, 800], [1, 1.21]);

  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) header.setAttribute('data-theme', 'dark');
        else header.removeAttribute('data-theme');
      },
      { threshold: 0.1, rootMargin: "-80px 0px 0px 0px" }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      observer.disconnect();
      header.removeAttribute('data-theme');
    };
  }, []);

  return (
    <div className={styles.customPage}>
      {/* 1. HERO SECTION */}
      <PageContainer fullWidth noPadding noPaddingTop>
        <section className={styles.hero} ref={heroRef}>
          <div className={styles.content}>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.title}
            >
              {project.title}
            </motion.h1>
          </div>
          <motion.div style={{ y: yRange, scale: scaleRange }} className={styles.screensWrapper}>
            <img src={screensImg} alt="Screens" className={styles.mainImage} />
          </motion.div>
        </section>
      </PageContainer>

      {/* 2. ТЕКСТОВЫЙ БЛОК (Оригинальная архитектура сохранена) */}
      <div className={styles.whiteOverlap}>
        <div className={styles.mainContainer80}>
          <div className={styles.headerWrapper}>
            <PageHeader title={project.title} />
          </div>
          <div className={styles.projectInfoGrid}>
            <section className={styles.taskSection}>
              <div className={styles.labelWrapper}>
                <span className={styles.icon}>🔘</span>
                <span className={styles.label}>Задание</span>
              </div>
              <p className={styles.taskText}>
                Вы участвуете в разработке мобильного iOS-приложения для сотрудников частной почтовой службы. 
                Сотрудники разносят почту физически и помещают ее в почтовые ящики. 
                Как бы вы могли улучшить их пользовательский опыт? Спроектируйте User Flow и отрисуйте экраны.
              </p>
            </section>
            
            <div className={styles.detailsRow}>
              <section className={styles.immersionCol}>
                <div className={styles.labelWrapper}>
                  <span className={styles.icon}>💡</span>
                  <span className={styles.label}>Погружение</span>
                </div>
                <p className={styles.bodyText}>
                  Трекер задач с календарем и личным помощником. Включает в себя специальный инструментарий 
                  сотрудника почтовой службы. Он планирует работу в течение дня, отправляет отчеты 
                  руководителю, помогает в решении служебных вопросов.
                </p>
              </section>
              <section className={styles.checklistCol}>
                <div className={styles.labelWrapper}>
                  <span className={styles.iconCheck}>✅</span>
                  <span className={styles.label}>Чек-лист</span>
                </div>
                <ul className={styles.list}>
                  <li>1. Трекер задач</li>
                  <li>2. Календарь</li>
                  <li>3. Личный помощник</li>
                  <li>4. Программа обучения</li>
                  <li>5. Инструменты</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MINDMAP SECTION */}
      <PageContainer fullWidth noPadding>
        <section className={styles.simpleSection}>
          <div className={styles.centeredHeader}>
            <PageHeader title="Необходимый функционал" />
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={styles.mindMapLayer}
          >
            <img src={mindMapSvg} alt="Mind Map" className={styles.mindMapSvg} />
          </motion.div>
        </section>
      </PageContainer>

      {/* 4. WORKFLOW SECTION */}
      <PageContainer fullWidth noPadding>
        <section className={styles.simpleSection}>
          <div className={styles.centeredHeader}>
            <PageHeader title="Процессы в workflow сотрудника" />
          </div>
        </section>
      </PageContainer>
    </div>
  );
};

export default PostmanTrackerLayout;