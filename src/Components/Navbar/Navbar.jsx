import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo .png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar ${menuOpen ? 'open' : ''}`}>
      <img src={Logo} alt="logo" style={{ width: '80px', height: '80px', marginLeft: '30px', marginTop: '-15px'}} />

      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li style={{ color: 'white' }}><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about-me" onClick={toggleMenu}>About Me</a></li>
        <li><a href="#Skills" onClick={toggleMenu}>Skills</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#Contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;

