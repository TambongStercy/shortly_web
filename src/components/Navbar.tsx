import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log(isMenuOpen)
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">Shortly</h1>
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="#" className="login-link">Login</a>
        <button className="sign-up-button">Sign Up</button>
      </div>
      {/* Hamburger menu */}
      <div className="hamburger" onClick={toggleMenu}>
        {/* Hamburger icon: Use a visible color */}
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
