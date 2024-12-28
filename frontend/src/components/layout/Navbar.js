import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="images/logo.png" // Replace with your logo path
            alt="Driver On Hire"
            style={{ height: "70px" }}
          />
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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="driverServiceDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Driver Service
              </a>
              <ul className="dropdown-menu" aria-labelledby="cityDropdown">
                <li className="d-flex">
                   
                  <a className="dropdown-item d-flex align-items-center gap-3" href="#">
                   <img src="images/icon/city-icon.svg" />
                   Palanpur
                  </a>
                </li>
                <li className="d-flex">
               
                  <a className="dropdown-item d-flex align-items-center gap-3" href="#">
               <img src="images/icon/city-icon.svg"/>
                    Deesa
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="cityDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                City
              </a>
              <ul className="dropdown-menu" aria-labelledby="cityDropdown">
                <li className="d-flex">
                   
                  <a className="dropdown-item d-flex align-items-center gap-3" href="#">
                   <img src="images/icon/city-icon.svg" />
                   Palanpur
                  </a>
                </li>
                <li className="d-flex">
               
                  <a className="dropdown-item d-flex align-items-center gap-3" href="#">
               <img src="images/icon/city-icon.svg"/>
                    Deesa
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="companyDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company
              </a>
              <ul className="dropdown-menu" aria-labelledby="cityDropdown">
                <li className="d-flex">
                   
                  <a className="dropdown-item d-flex align-items-center gap-3" href="#">
                   <img src="images/icon/rates-icon.svg" />
                   Rates
                  </a>
                </li>
                <li className="d-flex">
               
                  <a className="dropdown-item d-flex align-items-center gap-3" href="#">
               <img src="city-icon.svg"/>
                    About Us 
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <Link className="btn btn-dark me-2" type="button" to="/login">
            Login & Register     
            </Link>
            <button className="btn btn-outline-dark" type="button">
            Call Us - 9737845710
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
