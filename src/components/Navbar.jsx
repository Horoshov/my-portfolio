import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="nav-col">
          <span className="nav-label"></span>
          <Link to="/" className="nav-logo-link">
            <svg width="99" height="13" viewBox="0 0 99 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M90.1123 0.238281L92.7217 9.28516H93.3096L95.9189 0.238281H98.707L94.8682 12.1465H91.1631L87.3242 0.238281H90.1123Z" fill="currentColor"/>
              <path d="M62.9336 12.1463V0.238281H65.4389V4.89159H71.1465V0.238281H73.646V12.1463H71.1465V6.96735H65.4389V12.1463H62.9336Z" fill="currentColor"/>
              <path d="M36.6791 3.61992C36.6791 4.96444 35.8986 5.99839 34.8575 6.44675V6.48129C35.9503 6.63657 36.5058 7.41203 36.5226 8.46352L36.5748 12.2897H34.0419L33.9902 8.87725C33.9729 8.11883 33.5214 7.65348 32.6196 7.65348H28.4035V12.2897H25.8711V0.19043H32.8624C35.1529 0.19043 36.6791 1.34512 36.6791 3.62039V3.61992ZM34.1286 3.96504C34.1286 2.93104 33.5736 2.36203 32.5329 2.36203H28.4035V5.56758H32.5669C33.5209 5.56758 34.1286 4.99898 34.1286 3.96457V3.96504Z" fill="currentColor"/>
              <path d="M59.1089 8.75622C59.1089 7.89463 58.5574 7.5325 57.7304 7.46384L54.9377 7.20536C52.5242 6.98142 51.2656 6.03321 51.2656 3.74095C51.2656 1.44874 52.8173 0.19043 55.041 0.19043H61.2122V2.36195H55.2132C54.3515 2.36195 53.8 2.81024 53.8 3.67188C53.8 4.53347 54.3686 4.94722 55.2308 5.01635L58.0749 5.25774C60.23 5.44714 61.6433 6.42989 61.6433 8.73919C61.6433 11.0485 60.1439 12.2897 58.0235 12.2897H51.5763V10.1182H57.7818C58.5922 10.1182 59.1089 9.5667 59.1089 8.75669V8.75622Z" fill="currentColor"/>
              <path d="M81.234 0C85.0263 0 87.4233 2.42403 87.4233 6.22373C87.4233 10.0234 84.9235 12.4819 81.1307 12.4819C77.3379 12.4819 74.9414 10.0234 74.9414 6.22373C74.9414 2.42403 77.4412 0 81.234 0ZM84.8197 6.24072C84.8197 3.69625 83.3369 2.20064 81.1816 2.20064C79.0269 2.20064 77.544 3.69625 77.544 6.24072C77.544 8.78516 79.0269 10.2808 81.1816 10.2808C83.3369 10.2808 84.8197 8.78516 84.8197 6.24072Z" fill="currentColor"/>
              <path d="M44.0699 0C47.8622 0 50.2592 2.42403 50.2592 6.22373C50.2592 10.0234 47.7594 12.4819 43.9666 12.4819C40.1739 12.4819 37.7773 10.0234 37.7773 6.22373C37.7773 2.42403 40.2771 0 44.0699 0ZM47.6557 6.24072C47.6557 3.69625 46.1728 2.20064 44.0176 2.20064C41.8628 2.20064 40.3799 3.69625 40.3799 6.24072C40.3799 8.78516 41.8628 10.2808 44.0176 10.2808C46.1728 10.2808 47.6557 8.78516 47.6557 6.24072Z" fill="currentColor"/>
              <path d="M18.2965 0C22.0888 0 24.4858 2.42403 24.4858 6.22373C24.4858 10.0234 21.986 12.4819 18.1932 12.4819C14.4004 12.4819 12.0039 10.0234 12.0039 6.22373C12.0039 2.42403 14.5037 0 18.2965 0ZM21.8822 6.24072C21.8822 3.69625 20.3994 2.20064 18.2441 2.20064C16.0894 2.20064 14.6065 3.69625 14.6065 6.24072C14.6065 8.78516 16.0894 10.2808 18.2441 10.2808C20.3994 10.2808 21.8822 8.78516 21.8822 6.24072Z" fill="currentColor"/>
              <path d="M0 12.1463V0.238281H2.50532V4.89159H8.21287V0.238281H10.7124V12.1463H8.21287V6.96735H2.50532V12.1463H0Z" fill="currentColor"/>
            </svg>
          </Link>
        </div>
        
        <div className="nav-col nav-col-location">
          <span className="nav-label">Location</span>
          <span className="nav-value">Moscow, RU</span>
        </div>
        
        <div className="nav-col nav-col-status">
          <span className="nav-label">Working Status</span>
          <span className="nav-value">Available</span>
        </div>
        
        <div className="nav-col nav-col-menu">
          <span className="nav-label">Navigation</span>
          <div className="nav-menu nav-desktop-menu">
            <Link to="/" className="nav-menu-item">Home</Link>
            <Link to="/projects" className="nav-menu-item">Projects</Link>
            <Link to="/about" className="nav-menu-item">About</Link>
            <Link to="/contact" className="nav-menu-item">Contact</Link>
          </div>
          
          {/* Hamburger Button */}
          <button 
            className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
        <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
          
          {/* Header с логотипом и крестиком */}
          <div className="mobile-menu-header">
            <Link to="/" className="mobile-menu-logo-link" onClick={closeMenu}>
              <svg width="99" height="13" viewBox="0 0 99 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M90.1123 0.238281L92.7217 9.28516H93.3096L95.9189 0.238281H98.707L94.8682 12.1465H91.1631L87.3242 0.238281H90.1123Z" fill="currentColor"/>
                <path d="M62.9336 12.1463V0.238281H65.4389V4.89159H71.1465V0.238281H73.646V12.1463H71.1465V6.96735H65.4389V12.1463H62.9336Z" fill="currentColor"/>
                <path d="M36.6791 3.61992C36.6791 4.96444 35.8986 5.99839 34.8575 6.44675V6.48129C35.9503 6.63657 36.5058 7.41203 36.5226 8.46352L36.5748 12.2897H34.0419L33.9902 8.87725C33.9729 8.11883 33.5214 7.65348 32.6196 7.65348H28.4035V12.2897H25.8711V0.19043H32.8624C35.1529 0.19043 36.6791 1.34512 36.6791 3.62039V3.61992ZM34.1286 3.96504C34.1286 2.93104 33.5736 2.36203 32.5329 2.36203H28.4035V5.56758H32.5669C33.5209 5.56758 34.1286 4.99898 34.1286 3.96457V3.96504Z" fill="currentColor"/>
                <path d="M59.1089 8.75622C59.1089 7.89463 58.5574 7.5325 57.7304 7.46384L54.9377 7.20536C52.5242 6.98142 51.2656 6.03321 51.2656 3.74095C51.2656 1.44874 52.8173 0.19043 55.041 0.19043H61.2122V2.36195H55.2132C54.3515 2.36195 53.8 2.81024 53.8 3.67188C53.8 4.53347 54.3686 4.94722 55.2308 5.01635L58.0749 5.25774C60.23 5.44714 61.6433 6.42989 61.6433 8.73919C61.6433 11.0485 60.1439 12.2897 58.0235 12.2897H51.5763V10.1182H57.7818C58.5922 10.1182 59.1089 9.5667 59.1089 8.75669V8.75622Z" fill="currentColor"/>
                <path d="M81.234 0C85.0263 0 87.4233 2.42403 87.4233 6.22373C87.4233 10.0234 84.9235 12.4819 81.1307 12.4819C77.3379 12.4819 74.9414 10.0234 74.9414 6.22373C74.9414 2.42403 77.4412 0 81.234 0ZM84.8197 6.24072C84.8197 3.69625 83.3369 2.20064 81.1816 2.20064C79.0269 2.20064 77.544 3.69625 77.544 6.24072C77.544 8.78516 79.0269 10.2808 81.1816 10.2808C83.3369 10.2808 84.8197 8.78516 84.8197 6.24072Z" fill="currentColor"/>
                <path d="M44.0699 0C47.8622 0 50.2592 2.42403 50.2592 6.22373C50.2592 10.0234 47.7594 12.4819 43.9666 12.4819C40.1739 12.4819 37.7773 10.0234 37.7773 6.22373C37.7773 2.42403 40.2771 0 44.0699 0ZM47.6557 6.24072C47.6557 3.69625 46.1728 2.20064 44.0176 2.20064C41.8628 2.20064 40.3799 3.69625 40.3799 6.24072C40.3799 8.78516 41.8628 10.2808 44.0176 10.2808C46.1728 10.2808 47.6557 8.78516 47.6557 6.24072Z" fill="currentColor"/>
                <path d="M18.2965 0C22.0888 0 24.4858 2.42403 24.4858 6.22373C24.4858 10.0234 21.986 12.4819 18.1932 12.4819C14.4004 12.4819 12.0039 10.0234 12.0039 6.22373C12.0039 2.42403 14.5037 0 18.2965 0ZM21.8822 6.24072C21.8822 3.69625 20.3994 2.20064 18.2441 2.20064C16.0894 2.20064 14.6065 3.69625 14.6065 6.24072C14.6065 8.78516 16.0894 10.2808 18.2441 10.2808C20.3994 10.2808 21.8822 8.78516 21.8822 6.24072Z" fill="currentColor"/>
                <path d="M0 12.1463V0.238281H2.50532V4.89159H8.21287V0.238281H10.7124V12.1463H8.21287V6.96735H2.50532V12.1463H0Z" fill="currentColor"/>
              </svg>
            </Link>
            
            <button 
              className="mobile-menu-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mobile-menu-nav">
            <Link to="/" className="mobile-menu-link" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/projects" className="mobile-menu-link" onClick={closeMenu}>
              Projects
            </Link>
            <Link to="/about" className="mobile-menu-link" onClick={closeMenu}>
              About
            </Link>
            <Link to="/contact" className="mobile-menu-link" onClick={closeMenu}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;