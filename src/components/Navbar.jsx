import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from './Logo';

const Navbar = ({ logoStyle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(location.pathname);

  if (location.pathname !== prevLocation) {
    setPrevLocation(location.pathname);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }

  // Close menu and restore overflow on resize above breakpoint (1024px)
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
            <Logo style={location.pathname === '/' ? logoStyle : undefined} />
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