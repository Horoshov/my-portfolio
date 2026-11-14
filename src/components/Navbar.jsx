import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import styles from './Navbar.module.css';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(location.pathname);
  const shouldReduceMotion = useReducedMotion();

  if (location.pathname !== prevLocation) {
    setPrevLocation(location.pathname);
    if (isMenuOpen) setIsMenuOpen(false);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const isHome = location.pathname === '/';
  const { scrollY } = useScroll();

  const [containerWidth, setContainerWidth] = useState(1200);
  const [startY, setStartY] = useState(500);
  const [heroHeight, setHeroHeight] = useState(800);

  useEffect(() => {
    if (!isHome) return;
    const updateMetrics = () => {
      const heroSection = document.querySelector('.home-hero-section');
      const navbarEl = document.querySelector('header');
      const container = document.querySelector('.home-hero-container');
      
      if (heroSection && navbarEl) {
        const hHeight = heroSection.offsetHeight;
        const nHeight = navbarEl.offsetHeight;
        setHeroHeight(hHeight);

        // Точное расстояние от шапки до нижней части героя
        const distance = hHeight - nHeight - 40;
        setStartY(Math.max(distance, 150));

        if (container) {
          const cWidth = container.clientWidth;
          setContainerWidth(cWidth > 0 ? cWidth : 1200);
        }
      }
    };

    updateMetrics();
    window.addEventListener('resize', updateMetrics);
    const timer = setTimeout(updateMetrics, 100);
    return () => {
      window.removeEventListener('resize', updateMetrics);
      clearTimeout(timer);
    };
  }, [isHome]);

  // SCALE-DOWN МАТЕМАТИКА ДЛЯ SAFARI (Без мыла):
  // При scrollY = 0: scale = 1 (полная ширина containerWidth, рендерится в высоком разрешении)
  // При scrollY = heroHeight: scale = сжатие до 125px (125 / containerWidth)
  const minScale = containerWidth > 0 ? 125 / containerWidth : 0.1;

  const rawScale = useTransform(scrollY, [0, heroHeight || 800], [1, minScale]);
  const rawY = useTransform(scrollY, [0, heroHeight || 800], [startY, 0]);

  const logoScale = useSpring(rawScale, { stiffness: 120, damping: 25 });
  const logoY = useSpring(rawY, { stiffness: 120, damping: 25 });

  return (
    <header className={styles.navbarFixed}>
      <div className={styles.navContainer}>
        <div className={styles.navLogoWrapper}>
          <Link 
            to="/" 
            className={styles.navLogo} 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Horoshov — на главную"
          >
            <motion.div
              className={styles.motionLogoContainer}
              style={{
                width: isHome ? `${containerWidth}px` : '125px',
                height: 'auto',
                scale: isHome && !shouldReduceMotion ? logoScale : 1,
                y: isHome && !shouldReduceMotion ? logoY : 0,
                transformOrigin: 'left top',
              }}
            >
              <Logo />
            </motion.div>
          </Link>
        </div>

        <div className={styles.navActions}>
          <nav className={styles.navDesktopLinks}>
            <Link to="/" className={styles.navItem} data-text="Главная">
              <span>Главная</span>
            </Link>
            <Link to="/about" className={styles.navItem} data-text="Компетенции">
              <span>Компетенции</span>
            </Link>
            <Link to="/projects" className={styles.navItem} data-text="Кейсы">
              <span>Кейсы</span>
            </Link>
            <Link to="/contact" className={styles.navItem} data-text="Контакты">
              <span>Контакты</span>
            </Link>
          </nav>

          <button 
            className={`${styles.burgerBtn} ${isMenuOpen ? styles.open : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`${styles.mobileOverlay} ${isMenuOpen ? styles.active : ''}`}>
        <nav className={styles.mobileNavList}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Главная</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>Компетенции</Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Кейсы</Link>         
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Контакты</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;