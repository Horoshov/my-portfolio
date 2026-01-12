import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-col"><span className="label">Hello, I’m</span><span className="value">Alex Horoshov</span></div>
    <div className="nav-col"><span className="label">Location</span><span className="value">Moscow, RU</span></div>
    <div className="nav-col"><span className="label">Working Status</span><span className="value">Available</span></div>
    <div className="nav-col">
      <span className="label">Navigation</span>
      <div className="nav-menu">
        {['Home', 'Projects', 'About', 'Articles', 'Contact'].map(item => (
          <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="menu-item">{item}</Link>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;