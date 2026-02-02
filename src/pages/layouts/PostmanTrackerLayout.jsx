import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './PostmanTrackerLayout.module.css';
import PageContainer from "../../components/PageContainer"; 

// Твоя картинка в формате webp
import screensImg from '../../assets/Screens.webp'; 

const PostmanTrackerLayout = ({ project }) => {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();

  // 1. АНИМАЦИЯ: Параллакс (смещение Y) и Зум (scale)
  // Мы уменьшили интенсивность на 10% относительно прошлых итераций
  const yRange = useTransform(scrollY, [0, 800], [0, -120]);
  const scaleRange = useTransform(scrollY, [0, 800], [1, 1.21]);

  // 2. ЛОГИКА НАВБАРА: Переключение в темный режим при скролле
  useEffect(() => {
    // Ищем хедер (если у тебя другой селектор, например '.navbar', замени 'header')
    const header = document.querySelector('header');
    if (!header) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Когда синий блок в зоне видимости — вешаем атрибут темной темы
        // Это заставит навбар стать белым, а выпадашку (в CSS) — черной
        if (entry.isIntersecting) {
          header.setAttribute('data-theme', 'dark');
        } else {
          header.removeAttribute('data-theme');
        }
      },
      { 
        threshold: 0.1, 
        // Смещение, чтобы тема менялась ровно под хедером (80px — высота нава)
        rootMargin: "-80px 0px 0px 0px" 
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
      header.removeAttribute('data-theme');
    };
  }, []);

  return (
    <div className={styles.customPage}>
      {/* Секция Hero с синим фоном */}
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

          {/* Контейнер картинки: выезжает снизу из-под белого блока */}
          <motion.div 
            style={{ y: yRange, scale: scaleRange }} 
            className={styles.screensWrapper}
          >
            <img 
              src={screensImg} 
              alt="Project Screens" 
              className={styles.mainImage} 
            />
          </motion.div>
        </section>
      </PageContainer>

      {/* Белый блок (Product Overview), который перекрывает картинку */}
      <div className={styles.whiteOverlap}>
        <PageContainer>
          <section className="pd-text-block-new">
            <div className="section-header-col">
              <h2 className="section-subtitle">Product Overview</h2>
              <div className="section-description">
                <p className={styles.overviewSubtitle}>
                  Concept, Research & Key Features
                </p>
              </div>
            </div>
          </section>
        </PageContainer>
      </div>
    </div>
  );
};

export default PostmanTrackerLayout;