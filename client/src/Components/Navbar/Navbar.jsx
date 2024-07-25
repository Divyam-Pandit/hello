import React from 'react';
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#join">Join</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
