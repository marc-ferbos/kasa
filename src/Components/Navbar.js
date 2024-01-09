import React from 'react';
import './Navbar.scss';
import { NavLink } from "react-router-dom";
import logo from "./logokasa.png"

function Navbar() {
    return (
      <nav className="Navbar">
        <div className="Navbar-logo">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="Navbar-a">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Accueil
          </NavLink>
        </div>
        <div className="Navbar-a">
          <NavLink
            to="/apropos"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            À propos
          </NavLink>
        </div>
      </nav>
    );
  }

    export default Navbar;