import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/alex-profile.jpg'; // Используем твое фото

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* ЛЕВАЯ ЧАСТЬ: Огромный призыв */}
      <div className="footer-left">
        <h2 className="footer-huge-text">
          Let’s shape <br /> something <br /> remarkable, <br /> together.
        </h2>
        <p className="hero-text" style={{ color: 'var(--gray-text)' }}>
          Copyright @AlexHoroshov. All Rights Reserved
        </p>
      </div>

      {/* ПРАВАЯ ЧАСТЬ: Контакты и меню */}
      <div className="footer-right">
        <div className="footer-profile-section">
          <div className="footer-profile">
            <img src={profileImg} alt="Alex" className="footer-avatar" />
            <div>
              <p className="value">Alex Horoshov</p>
              <p className="label">Designer & Developer</p>
            </div>
          </div>
          
          <div className="footer-contact-info">
            <span className="label">Contact me</span>
            <a href="mailto:ux@horoshov.ru" className="footer-email">
              ux@horoshov.ru
            </a>
            <p className="hero-text">
              Looking for a designer who moves <b>fast</b> without compromising quality? Let's talk.
            </p>
          </div>
        </div>

        <div className="footer-sub-grid">
          <div className="footer-col">
            <span className="label">Main Pages</span>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
            </div>
          </div>
          <div className="footer-col">
            <span className="label">Socials</span>
            <div className="footer-links">
              <a href="#">LinkedIn</a>
              <a href="#">Behance</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-line">
        <p>Design by Alex</p>
        <p>Powered by React</p>
      </div>
    </footer>
  );
};

export default Footer;