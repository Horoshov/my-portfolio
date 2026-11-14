import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
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

  // Первый эффект для меню (использует handleResize)
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
  const lastWidthRef = useRef(window.innerWidth);

  // Второй эффект для метрик скролла логотипа
  useEffect(() => {
    if (!isHome) return;

    const updateMetrics = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth === lastWidthRef.current && startY !== 500) return;
      lastWidthRef.current = currentWidth;

      const container = document.querySelector('.home-hero-container');
      const slotEl = document.getElementById('home-logo-slot');
      const navLogoWrapper = document.querySelector(`.${styles.navLogo}`);

      if (container) {
        const cWidth = container.clientWidth;
        setContainerWidth(cWidth > 0 ? cWidth : 1200);
      }

      if (slotEl && navLogoWrapper) {
        const slotRect = slotEl.getBoundingClientRect();
        const navRect = navLogoWrapper.getBoundingClientRect();
        const distance = slotRect.top - navRect.top;
        if (distance > 0) {
          setStartY(distance);
        }
      }
    };

    updateMetrics();
    const timers = [50, 150, 300, 600].map(ms => setTimeout(updateMetrics, ms));

    const handleWindowResize = () => {
      if (window.innerWidth !== lastWidthRef.current) {
        updateMetrics();
      }
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      timers.forEach(clearTimeout);
    };
  }, [isHome, startY]);

  const minScale = containerWidth > 0 ? 125 / containerWidth : 0.1;
  const scrollRange = startY > 0 ? startY : 500;

  const logoScale = useTransform(scrollY, [0, scrollRange], [1, minScale], { clamp: true });
  const logoY = useTransform(scrollY, [0, scrollRange], [startY, 0], { clamp: true });

  const logoContent = (
    <motion.div
      className={styles.motionLogoContainer}
      style={{
        width: isHome ? `${containerWidth}px` : '125px',
        height: 'auto',
        scale: isHome && !shouldReduceMotion ? logoScale : 1,
        y: isHome && !shouldReduceMotion ? logoY : 0,
        opacity: isMenuOpen ? 0 : 1,
        transition: 'opacity 0.2s ease',
        transformOrigin: 'left top',
        pointerEvents: isHome && !isMenuOpen ? 'none' : 'auto',
      }}
    >
      <Logo />
    </motion.div>
  );

  return (
    <header className={styles.navbarFixed}>
      <div className={styles.navContainer}>
        <div className={styles.navLogoWrapper}>
          {isHome ? (
            <div className={styles.navLogo} style={{ cursor: 'default' }}>
              {logoContent}
            </div>
          ) : (
            <Link 
              to="/" 
              className={styles.navLogo} 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Horoshov — на главную"
            >
              {logoContent}
            </Link>
          )}
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