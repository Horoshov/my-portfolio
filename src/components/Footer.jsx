import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/alex-profile.jpg';

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* ЛЕВАЯ КОЛОНКА */}
      <div className="footer-left">
        <h2 className="footer-huge-text">
          Let’s shape <br /> something <br /> remarkable, <br /> together.
        </h2>
        <p className="label" style={{ marginTop: 'auto' }}>
          © 2026 Alex Horoshov. All Rights Reserved
        </p>
      </div>

      {/* ПРАВАЯ КОЛОНКА */}
      <div className="footer-right">
        {/* ПРОФИЛЬ + ИКОНКИ */}
        <div className="footer-profile-box">
          <img src={profileImg} alt="Alex" className="footer-avatar" />
          <div className="footer-profile-info">
            <p className="value">Alex Horoshov</p>
            <p className="label">Designer & Developer</p>
            
            {/* Иконки теперь СТРОГО здесь */}
            <div className="social-media-links-wrap-alt">
              <a href="https://facebook.com" className="social-icon-link" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C4.477 0 0 4.477 0 10C0 14.991 3.657 19.128 8.438 19.879V12.89H5.898V10H8.438V7.797C8.438 5.291 9.93 3.907 12.215 3.907C13.309 3.907 14.453 4.102 14.453 4.102V6.562H13.193C11.95 6.562 11.563 7.333 11.563 8.124V10H14.336L13.893 12.89H11.563V19.879C16.343 19.129 20 14.99 20 10C20 4.477 15.523 0 10 0Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="social-icon-link" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C12.717 0 13.056 0.00999994 14.122 0.0599999C15.187 0.11 15.912 0.277 16.55 0.525C17.21 0.779 17.766 1.123 18.322 1.678C18.8305 2.1779 19.224 2.78259 19.475 3.45C19.722 4.087 19.89 4.813 19.94 5.878C19.987 6.944 20 7.283 20 10C20 12.717 19.99 13.056 19.94 14.122C19.89 15.187 19.722 15.912 19.475 16.55C19.2247 17.2178 18.8311 17.8226 18.322 18.322C17.822 18.8303 17.2173 19.2238 16.55 19.475C15.913 19.722 15.187 19.89 14.122 19.94C13.056 19.987 12.717 20 10 20C7.283 20 6.944 19.99 5.878 19.94C4.813 19.89 4.088 19.722 3.45 19.475C2.78233 19.2245 2.17753 18.8309 1.678 18.322C1.16941 17.8222 0.775931 17.2175 0.525 16.55C0.277 15.913 0.11 15.187 0.0599999 14.122C0.0129999 13.056 0 12.717 0 10C0 7.283 0.00999994 6.944 0.0599999 5.878C0.11 4.812 0.277 4.088 0.525 3.45C0.775236 2.78218 1.1688 2.17732 1.678 1.678C2.17767 1.16923 2.78243 0.775729 3.45 0.525C4.088 0.277 4.812 0.11 5.878 0.0599999C6.944 0.0129999 7.283 0 10 0ZM10 5C8.67392 5 7.40215 5.52678 6.46447 6.46447C5.52678 7.40215 5 8.67392 5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5ZM16.5 4.75C16.5 4.41848 16.3683 4.10054 16.1339 3.86612C15.8995 3.6317 15.5815 3.5 15.25 3.5C14.9185 3.5 14.6005 3.6317 14.3661 3.86612C14.1317 4.10054 14 4.41848 14 4.75C14 5.08152 14.1317 5.39946 14.3661 5.63388C14.6005 5.8683 14.9185 6 15.25 6C15.5815 6 15.8995 5.8683 16.1339 5.63388C16.3683 5.39946 16.5 5.08152 16.5 4.75ZM10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="social-icon-link" target="_blank" rel="noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor"/>
                  <path d="M14.0598 18L11.1622 13.6855L7.53467 18H6L10.4813 12.6715L6 6H9.94016L12.6712 10.0664L16.093 6H17.6277L13.3543 11.0817L18 18H14.0598ZM15.7689 16.7836H14.7357L8.19741 7.21636H9.23076L11.8494 11.0472L12.3022 11.7119L15.7689 16.7836Z" fill="var(--bg-color)"/>
                </svg>
              </a>
              <a href="https://linkedin.com" className="social-icon-link" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.335 15.339H12.67V11.162C12.67 10.166 12.65 8.884 11.28 8.884C9.891 8.884 9.679 9.968 9.679 11.089V15.339H7.013V6.75H9.573V7.92H9.608C9.966 7.246 10.836 6.533 12.136 6.533C14.836 6.533 15.336 8.311 15.336 10.624V15.339H15.335ZM4.003 5.575C3.79956 5.57526 3.59806 5.53537 3.41006 5.45761C3.22207 5.37984 3.05127 5.26574 2.90746 5.12184C2.76365 4.97793 2.64965 4.80706 2.57201 4.61901C2.49437 4.43097 2.4546 4.22944 2.455 4.026C2.4552 3.71983 2.54618 3.4206 2.71644 3.16615C2.8867 2.91169 3.12859 2.71343 3.41153 2.59645C3.69447 2.47947 4.00574 2.44902 4.30598 2.50894C4.60622 2.56886 4.88196 2.71648 5.09831 2.93311C5.31466 3.14974 5.46191 3.42566 5.52145 3.72598C5.58099 4.0263 5.55013 4.33753 5.43278 4.62032C5.31543 4.9031 5.11687 5.14474 4.86219 5.31467C4.60751 5.4846 4.30817 5.5752 4.002 5.575H4.003ZM5.339 15.339H2.666V6.75H5.34V15.339H5.339ZM16.67 0H1.329C0.593 0 0 0.58 0 1.297V16.703C0 17.42 0.594 18 1.328 18H16.666C17.4 18 18 17.42 18 16.703V1.297C18 0.58 17.4 0 16.666 0H16.669H16.67Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* БЛОК С EMAIL (теперь чистый) */}
        <div className="footer-contact-block">
          <span className="label">Contact me</span>
          <a href="mailto:alex@horoshov.ru" className="footer-email-link">
            alex@horoshov.ru
          </a>
        </div>

        {/* НАВИГАЦИЯ */}
        <div className="footer-sub-grid">
          <div className="footer-col">
            <span className="label">Navigation</span>
            <div className="footer-links">
              <Link to="/" className="menu-item">Home</Link>
              <Link to="/about" className="menu-item">About</Link>
              <Link to="/projects" className="menu-item">Projects</Link>
              <Link to="/contact" className="menu-item">Contact</Link>
            </div>
          </div>
          <div className="footer-col">
            <span className="label">Status</span>
            <p className="value">Available for freelance</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;