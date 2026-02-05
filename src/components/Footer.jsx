// 1. [NEW] Добавьте { useState, useEffect } в импорт
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerContainer}>
        
        {/* ЛЕВАЯ ЧАСТЬ */}
        <div className={styles.footerBrandSide}>
          <div className={styles.footerLogoStatic}>
            <svg width="125" height="17" viewBox="0 0 125 17" fill="none" role="img" aria-label="Horoshov Logo">
              <title>Horoshov</title>
              <path d="M117.678 11.9918L114.485 1.2157H111.074L115.77 15.7842H120.303L124.999 1.2157H121.589L118.162 11.9918H117.678Z" fill="currentColor"/>
              <path d="M74.1348 11.5783C74.1348 10.5243 73.46 10.0812 72.4482 9.99721L69.0316 9.68098C66.0789 9.40701 64.5391 8.24695 64.5391 5.44255C64.5391 2.6382 66.4375 1.09875 69.1579 1.09875H76.7079V3.75544H69.3686C68.3143 3.75544 67.6396 4.30389 67.6396 5.35804C67.6396 6.41213 68.3353 6.91833 69.3902 7.00289L72.8697 7.29822C75.5063 7.52993 77.2353 8.73225 77.2353 11.5575C77.2353 14.3827 75.4009 15.9013 72.8068 15.9013H64.9192V13.2446H72.5111C73.5025 13.2446 74.1348 12.5699 74.1348 11.5789V11.5783Z" fill="currentColor"/>
              <path d="M102.894 0.864746C107.533 0.864746 110.466 3.83036 110.466 8.479C110.466 13.1276 107.408 16.1353 102.767 16.1353C98.1273 16.1353 95.1953 13.1276 95.1953 8.479C95.1953 3.83036 98.2536 0.864746 102.894 0.864746ZM107.281 8.49979C107.281 5.38682 105.467 3.55706 102.83 3.55706C100.194 3.55706 98.3794 5.38682 98.3794 8.49979C98.3794 11.6127 100.194 13.4425 102.83 13.4425C105.467 13.4425 107.281 11.6127 107.281 8.49979Z" fill="currentColor"/>
              <path d="M45.84 5.29448C45.84 6.93939 44.885 8.20435 43.6113 8.75288V8.79513C44.9483 8.98511 45.6279 9.93383 45.6484 11.2202L45.7123 15.9013H42.6136L42.5503 11.7264C42.5292 10.7985 41.9767 10.2292 40.8735 10.2292H35.7154V15.9013H32.6172V1.09875H41.1705C43.9728 1.09875 45.84 2.51143 45.84 5.29504V5.29448ZM42.7196 5.7167C42.7196 4.45169 42.0406 3.75554 40.7674 3.75554H35.7154V7.67728H40.809C41.9761 7.67728 42.7196 6.98165 42.7196 5.71613V5.7167Z" fill="currentColor"/>
              <path d="M55.2532 0.864746C59.8928 0.864746 62.8253 3.83036 62.8253 8.479C62.8253 13.1276 59.767 16.1353 55.1268 16.1353C50.4867 16.1353 47.5547 13.1276 47.5547 8.479C47.5547 3.83036 50.613 0.864746 55.2532 0.864746ZM59.6401 8.49979C59.6401 5.38682 57.8259 3.55706 55.1891 3.55706C52.5529 3.55706 50.7388 5.38682 50.7388 8.49979C50.7388 11.6127 52.5529 13.4425 55.1891 13.4425C57.8259 13.4425 59.6401 11.6127 59.6401 8.49979Z" fill="currentColor"/>
              <path d="M0.527344 15.7257V1.15723H3.59241V6.85019H10.5752V1.15723H13.6331V15.7257H10.5752V9.38972H3.59241V15.7257H0.527344Z" fill="currentColor"/>
              <path d="M23.3313 0.864746C27.9709 0.864746 30.9034 3.83036 30.9034 8.479C30.9034 13.1276 27.8451 16.1353 23.2049 16.1353C18.5648 16.1353 15.6328 13.1276 15.6328 8.479C15.6328 3.83036 18.6911 0.864746 23.3313 0.864746ZM27.7182 8.49979C27.7182 5.38682 25.9041 3.55706 23.2673 3.55706C20.631 3.55706 18.8169 5.38682 18.8169 8.49979C18.8169 11.6127 20.631 13.4425 23.2673 13.4425C25.9041 13.4425 27.7182 11.6127 27.7182 8.49979Z" fill="currentColor"/>
              <path d="M80.0898 15.7257V1.15723H83.1549V6.85019H90.1377V1.15723H93.1956V15.7257H90.1377V9.38972H83.1549V15.7257H80.0898Z" fill="currentColor"/>
            </svg>
          </div>
          <a href="mailto:ux@horoshov.ru" className={styles.footerEmail}>ux@horoshov.ru</a>
          
          {/* 2. [NEW] Вставляем компонент переключателя СЮДА */}
          <ThemeSwitcher styles={styles} />

          {/* Копирайт Десктоп */}
          <div className={`${styles.footerCopyright} ${styles.desktopOnly}`}>© 2026 </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ БЕЗ ИЗМЕНЕНИЙ */}
        <div className={styles.footerMenuWrapper}>
          <div className={styles.footerLinkList}>
            <div className={styles.footerSectionTitle}>Nav</div>
            <FooterLink to="/work" label="Work" styles={styles} />
            <FooterLink to="/about" label="About" styles={styles} />
            <FooterLink to="/recognition" label="Recognition" styles={styles} />
            <FooterLink to="/contact" label="Contact" styles={styles} />
          </div>

          <div className={styles.footerLinkList}>
            <div className={styles.footerSectionTitle}>Legal</div>
            <FooterLink to="/privacy-policy" label="Privacy Policy" styles={styles} />
            <FooterLink to="/terms-and-conditions" label="Terms" styles={styles} />
          </div>

          <div className={styles.footerLinkList}>
            <div className={styles.footerSectionTitle}>Social</div>
            <FooterExternalLink href="http://t.me/thehoroshov" label="Telegram" styles={styles} />
            <FooterExternalLink href="#" label="Dribbble" styles={styles} />
            <FooterExternalLink href="https://www.instagram.com/thehoroshov/" label="Instagram" styles={styles} />
            <FooterExternalLink href="https://www.linkedin.com/in/horoshov/" label="LinkedIn" styles={styles} />
          </div>

          {/* Копирайт Мобайл */}
          <div className={`${styles.footerCopyright} ${styles.mobileOnly}`}>© 2026 </div>
        </div>
      </div>
    </footer>
  );
};

// ... Ваши компоненты FooterLink и FooterExternalLink оставьте здесь ...
const FooterLink = ({ to, label, styles }) => (
  <Link to={to} className={styles.linkNoLine}>
    <div className={styles.linkIcon}>
      <svg width="100%" height="100%" viewBox="0 0 17 16" fill="none">
        <path d="M12 5L16 9L12 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 2V6.09091C1 6.86245 1.36875 7.60239 2.02513 8.14795C2.6815 8.69351 3.57174 9 4.5 9H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <div className={styles.linkTextWr}>
      <div>{label}</div>
    </div>
  </Link>
);

const FooterExternalLink = ({ href, label, styles }) => (
  <a href={href} target="_blank" rel="noreferrer" className={styles.linkNoLine}>
    <div className={styles.linkIcon}>
      <svg width="100%" height="100%" viewBox="0 0 17 16" fill="none">
        <path d="M12 5L16 9L12 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 2V6.09091C1 6.86245 1.36875 7.60239 2.02513 8.14795C2.6815 8.69351 3.57174 9 4.5 9H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <div className={styles.linkTextWr}>
      <div>{label}</div>
    </div>
  </a>
);

// 3. [NEW] Вставляем сам компонент переключателя в конце файла
const ThemeSwitcher = ({ styles }) => {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    // Безопасное чтение из localStorage
    const saved = localStorage.getItem('theme');
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    const root = document.body; // Используем body, чтобы сработал CSS
    const applyDark = () => root.classList.add('dark-theme');
    const removeDark = () => root.classList.remove('dark-theme');

    if (theme === 'dark') {
      applyDark();
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      removeDark();
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.removeItem('theme');
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      if (media.matches) applyDark(); else removeDark();
    }
  }, [theme]);

  // Простые иконки, чтобы не загромождать SVG
  const IconSystem = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
  const IconLight = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
  const IconDark = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>;

  return (
    <div className={styles.themeSwitcherWrapper}>
      <label className={styles.themeLabel} title="System">
        <input type="radio" name="theme_toggle" className={styles.themeInput} checked={theme === 'system'} onChange={() => setTheme('system')} />
        <IconSystem />
      </label>
      <label className={styles.themeLabel} title="Light">
        <input type="radio" name="theme_toggle" className={styles.themeInput} checked={theme === 'light'} onChange={() => setTheme('light')} />
        <IconLight />
      </label>
      <label className={styles.themeLabel} title="Dark">
        <input type="radio" name="theme_toggle" className={styles.themeInput} checked={theme === 'dark'} onChange={() => setTheme('dark')} />
        <IconDark />
      </label>
    </div>
  );
};

export default Footer;