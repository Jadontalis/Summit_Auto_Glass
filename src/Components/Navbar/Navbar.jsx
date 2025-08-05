import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo-transparent.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setSticky(window.scrollY > 50);
    });
  }, []);

  return (
    <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <a href="/">
        <img src={logo} alt="Company Logo" className='logo' />
      </a>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}><li>Home</li></Link>
        <Link to="/Services" onClick={() => setMenuOpen(false)}><li>Services</li></Link>
        <Link to="/Company" onClick={() => setMenuOpen(false)}><li>Our Company</li></Link>
        <Link to="/Contact" onClick={() => setMenuOpen(false)}>
          <li><button className='btn'>Contact Us</button></li>
        </Link>
      </div>

      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;