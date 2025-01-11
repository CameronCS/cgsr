import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav-header'>
      <nav className='nav-bar'>
        <button className='hamburger-menu' onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-list ${isMenuOpen ? 'nav-list-open' : ''}`}>
          <li className='nav-list-item'>
            <a className='nav-list-link' href="/">Home</a>
          </li>
          <li className='nav-list-item'>
            <a className='nav-list-link' href="/services">Services</a>
          </li>
          <li className='nav-list-item'>
            <a className='nav-list-link' href="/gallery">Gallery</a>
          </li>
          <li className='nav-list-item'>
            <a className='nav-list-link' href="/contact-us">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
