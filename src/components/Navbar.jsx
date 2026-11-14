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
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const isHome = location.pathname === '/';

  // Автономный трекинг скролла всей страницы для анимации на главной
  const { scrollY } = useScroll();

  const [startScale, setStartScale] = useState(6);
  const [startY, setStartY] = useState(500);

  useEffect(() => {
    const updateMetrics = () => {
      if (!isHome) return;
      const heroSection = document.querySelector('.home-hero-section');
      const navbarEl = document.querySelector('header');
      if (heroSection && navbarEl) {
        const heroHeight = heroSection.offsetHeight;
        const navbarHeight = navbarEl.offsetHeight;
        // Точное расстояние от шапки до нижней части героя с учетом отступов
        const distance = heroHeight - navbarHeight - 60;
        setStartY(Math.max(distance, 200));

        // Ширина контейнера героя для расчета пропорции скейла к 125px в шапке
        const container = heroSection.querySelector('.home-hero-container');
        if (container) {
          const scale = container.clientWidth / 125;
          setStartScale(Math.max(scale, 4));
        }
      }
    };

    updateMetrics();
    window.addEventListener('resize', updateMetrics);
    const timer = setTimeout(updateMetrics, 50);
    return () => {
      window.removeEventListener('resize', updateMetrics);
      clearTimeout(timer);
    };
  }, [isHome]);

  // Анимация отрабатывает на протяжении высоты первого экрана (hero)
  const scrollRange = [0, typeof window !== 'undefined' ? window.innerHeight : 800];

  const rawScale = useTransform(scrollY, scrollRange, [startScale, 1]);
  const rawY = useTransform(scrollY, scrollRange, [startY, 0]);

  const logoScale = useSpring(rawScale, { stiffness: 120, damping: 25 });
  const logoY = useSpring(rawY, { stiffness: 120, damping: 25 });

  return (
    <header className={styles.navbarFixed}>
      <div className={styles.navContainer}>
        {/* ЛОГОТИП */}
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
                width: '125px',
                height: '17px',
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