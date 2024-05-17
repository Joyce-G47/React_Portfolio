import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo .png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo" style={{fontSize: '30px', color: '#6e636b', fontWeight:'bolder'}}>S <span style={{ color: '#d62196' }}>Gumbi.</span></div>

      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar" ></div>
        <div className="bar" ></div>
        <div className="bar" ></div>
        
      </div>

      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li ><a href="#home">Home</a></li>
        <li ><a href="#about-me">About Me</a></li>
        <li ><a href="#skills">Skills</a></li>
        <li ><a href="#projects">Projects</a></li>
        <li ><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
