import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <img src="/logo.png" alt="Logo" className="logo-image" />
        </div>
        <nav className="nav">
          <button onClick={() => scrollToSection('about')}>Home</button>
          <button onClick={() => scrollToSection('skills')}>Profile</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
