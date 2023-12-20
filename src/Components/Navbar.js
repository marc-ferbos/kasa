import React from 'react';
import './Navbar.scss';

function Navbar() {
    return (
      <nav className="Navbar">
        <div className="Navbar-logo">
            <img src="logokasa.png" className="App-logo" alt="logo" />
        </div>
        <div className="Navbar-a"><a
          className="App-link"
          href="http://localhost:3000/"
          target="_blank"
          rel="noopener noreferrer">
          Accueil
        </a>
        </div>
        <div className="Navbar-a">
        <a
          className="App-link"
          href="http://localhost:3000/apropos"
          target="_blank"
          rel="noopener noreferrer"
        >
          À Propos
        </a>
        </div>
      </nav>
    );
  }

    export default Navbar;