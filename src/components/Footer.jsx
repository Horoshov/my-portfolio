import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [time, setTime] = useState(new Date());

  // Обновляем время каждую минуту
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const localTime = time.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: true 
  });

  return (
    <footer className="main-footer">
      <div className="footer-cta">
        <h2 className="footer-huge-text">
          LET'S WORK <br /> TOGETHER
        </h2>
      </div>

      <div className="footer-grid">
        <div className="footer-col">
          <span className="label">Location</span>
          <p className="footer-value">Moscow, Russia</p>
        </div>
        
        <div className="footer-col">
          <span className="label">Socials</span>
          <div className="footer-links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a>
          </div>
        </div>

        <div className="footer-col">
          <span className="label">Contact</span>
          <a href="mailto:alex@horoshov.ru" className="footer-email">
            alex@horoshov.ru
          </a>
        </div>

        <div className="footer-col last">
          <span className="label">Local Time</span>
          <p className="footer-value">
            {localTime} GMT+3
          </p>
        </div>
      </div>

      <div className="footer-bottom-line">
        <p>© 2026 Alex Horoshov — All Rights Reserved</p>
        <p>Handcrafted by Alex</p>
      </div>
    </footer>
  );
};

export default Footer;