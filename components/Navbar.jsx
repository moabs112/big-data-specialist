import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <div className="container-fluid">
        <img src={logo} className="logo" alt="Big Data Specialist" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className=" nav-links" aria-current="page" href="#Home">
              Home
            </a>
            <a className="nav-links" href="#about">
              About us
            </a>
            <a className="nav-links" href="#channels">
              Channels
            </a>

            <a className="nav-links " href="#contact">
              Contact
            </a>
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
