import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Coffee Store
        </a>
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
              <a className="nav-link" href="/south-america">
                Coffee in South America
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/north-america">
                Coffee in North America
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/europe">
                Coffee in Europe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/asia">
                Coffee in Asia
              </a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
