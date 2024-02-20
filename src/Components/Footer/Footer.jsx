
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer text-center py-3">
      <p>&copy; {currentYear} Sibongile Gumbi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
