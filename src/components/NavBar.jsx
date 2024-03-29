import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <a href="/" rel="noopener noreferrer">
            <img
              src="https://cdn.cloudservetechcentral.com/sgreliefteaching/logo-lg.png"
              alt="SGreliefteaching Logo"
            />
          </a>
        </div>
        <div className="hamburger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <Link to="/login">
            <li>
              <button className="login-button">
                Login
              </button>
            </li>
          </Link>
          <li>
            <button className="join-button" href="/signup">
              Join
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
