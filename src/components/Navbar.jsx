import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { normalizePath } from '../utils/urlHelper';
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

  useEffect(() => {
    if (!isHome) return;
    const updateMetrics = () => {
      const container = document.querySelector('.home-hero-container');
      const slotEl = document.getElementById('home-logo-slot');

      if (container) {
        const cWidth = container.clientWidth;
        setContainerWidth(cWidth > 0 ? cWidth : 1200);
      }

      if (slotEl) {
        // Поднимаем HOROSHOV на 20 px выше (вычитаем 20 из offsetTop)
        const calculatedStartY = slotEl.offsetTop - 20;
        setStartY(Math.max(calculatedStartY, 80));
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

  const minScale = containerWidth > 0 ? 125 / containerWidth : 0.1;
  const scrollRange = startY > 0 ? startY : 500;

  const logoScale = useTransform(scrollY, [0, scrollRange], [1, minScale], { clamp: true });
  const logoY = useTransform(scrollY, [0, scrollRange], [startY, 0], { clamp: true });

  const [isParked, setIsParked] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsParked(latest >= scrollRange);
    });
  }, [scrollY, scrollRange]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const logoContent = (
    <motion.div
      className={styles.motionLogoContainer}
      onClick={isHome && isParked ? scrollToTop : undefined}
      style={{
        width: isHome ? `${containerWidth}px` : '125px',
        height: 'auto',
        scale: isHome && !shouldReduceMotion ? logoScale : 1,
        y: isHome && !shouldReduceMotion ? logoY : 0,
        opacity: isMenuOpen ? 0 : 1,
        transition: 'opacity 0.2s ease',
        transformOrigin: 'left top',
        pointerEvents: isHome ? 'auto' : 'auto',
        cursor: isHome && isParked ? 'pointer' : 'default',
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
            <Link 
              to={normalizePath('/')} 
              className={styles.navItem} 
              data-text="Главная" 
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                setIsMenuOpen(false);
              }}
            >
              <span>Главная</span>
            </Link>
            <Link 
              to={normalizePath('/about')} 
              className={styles.navItem} 
              data-text="Компетенции" 
              onClick={(e) => {
                if (location.pathname === '/about') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                setIsMenuOpen(false);
              }}
            >
              <span>Компетенции</span>
            </Link>
            <Link 
              to={normalizePath('/projects')} 
              className={styles.navItem} 
              data-text="Кейсы" 
              onClick={(e) => {
                if (location.pathname === '/projects') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                setIsMenuOpen(false);
              }}
            >
              <span>Кейсы</span>
            </Link>
            <Link 
              to={normalizePath('/contact')} 
              className={styles.navItem} 
              data-text="Контакты" 
              onClick={(e) => {
                if (location.pathname === '/contact') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                setIsMenuOpen(false);
              }}
            >
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
          <Link to={normalizePath('/')} onClick={() => setIsMenuOpen(false)}>Главная</Link>
          <Link to={normalizePath('/about')} onClick={() => setIsMenuOpen(false)}>Компетенции</Link>
          <Link to={normalizePath('/projects')} onClick={() => setIsMenuOpen(false)}>Кейсы</Link>         
          <Link to={normalizePath('/contact')} onClick={() => setIsMenuOpen(false)}>Контакты</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;