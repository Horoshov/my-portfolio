import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/alex-profile.jpg'; // Используем твое фото

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* ЛЕВАЯ КОЛОНКА */}
      <div className="footer-left">
        <div>
          <h2 className="footer-huge-text">
            Let’s shape <br /> something <br /> remarkable, <br /> together.
          </h2>
          <p className="hero-text" style={{ opacity: 0.6 }}>
            Let's shape something impactful.
          </p>
        </div>
        
        <p className="label" style={{ marginTop: 'auto', paddingTop: '40px' }}>
          © Horoshov 2026
        </p>
      </div>

      {/* ПРАВАЯ КОЛОНКА */}
      <div className="footer-right">
        <div className="footer-top-info">
          <div className="footer-profile-box">
            <img src={profileImg} alt="Alex" className="footer-avatar" />
            <div>
              <p className="value">Alex Horoshov</p>
              <p className="label">Designer & Developer</p>
            </div>
          </div>

          <div className="footer-contact-block">
            <span className="label">Contact me</span>
            <a href="mailto:alex@horoshov.ru" className="footer-email-link">
              alex@horoshov.ru
            </a>
            <p className="hero-text">
              Looking for a designer who moves <b>fast</b> without compromising quality? Let's talk.
            </p>
          </div>
        </div>

        <div className="footer-sub-grid">
          <div className="footer-col">
            <span className="label">Main Pages</span>
            <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
              <Link to="/" className="menu-item">Home</Link>
              <Link to="/about" className="menu-item">About</Link>
              <Link to="/projects" className="menu-item">Projects</Link>
            </div>
          </div>
          
          <div className="footer-col">
            <span className="label">Socials</span>
            <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
              <a href="#" className="menu-item">LinkedIn</a>
              <a href="#" className="menu-item">Behance</a>
              <a href="#" className="menu-item">Dribbble</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-line" style={{ border: 'none', padding: 0 }}>
          <p>Design by Alex</p>
          <p>Powered by React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;