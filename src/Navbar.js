import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li>
          <Link to="/about">About</Link>
          <ul className="dropdown-menu">
            <li><Link to="/about/history">History</Link></li>
            <li><Link to="/about/team">Team</Link></li>
            <li><Link to="/about/mission">Mission</Link></li>
          </ul>
        </li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
