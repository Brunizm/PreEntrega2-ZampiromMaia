import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Coffee Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/category/south-america">
                Coffee in South America
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/north-america">
                Coffee in North America
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/europe">
                Coffee in Europe
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/asia">
                Coffee in Asia
              </Link>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
