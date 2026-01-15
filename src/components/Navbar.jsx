import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Импорт изолированных стилей

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-col">
      <span className="nav-label">Hello, I’m</span>
      <Link to="/" className="nav-value nav-menu-item">Alex Horoshov</Link>
    </div>
    <div className="nav-col">
      <span className="nav-label">Location</span>
      <span className="nav-value">Moscow, RU</span>
    </div>
    <div className="nav-col">
      <span className="nav-label">Working Status</span>
      <span className="nav-value">Available</span>
    </div>
    <div className="nav-col">
      <span className="nav-label">Navigation</span>
      <div className="nav-menu">
        {['Home', 'Projects', 'Articles', 'About', 'Contact'].map(item => (
          <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="nav-menu-item">
            {item}
          </Link>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;