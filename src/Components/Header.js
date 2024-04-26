import React, {  useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assetes/images/mackinlay_logo.png";
import "../Css/header.css";


const Header = () => {
 

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white">
        <div class="container customheader">
          <a class="navbar-brand" href="/">
            <img
              src={logo}
              style={{ width: "100px;" }}
              alt="not-found"
              onClick={() => "/"}
              className="logo"
            />
          </a>
          <button
            className={`navbar-toggler ${isOpen ? "collapsed" : ""}`}
            type="button"
            onClick={toggleNavbar}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-4 mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active"
                  onClick={toggleNavbar}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/discover"
                  className="nav-link"
                  activeClassName="active"
                  onClick={toggleNavbar}
                >
                  Discover
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/service"
                  className="nav-link"
                  activeClassName="active"
                  onClick={toggleNavbar}
                >
                  Service
                </NavLink>
              </li>
              <li class="nav-item">
                <li className="nav-item">
                  <NavLink
                    to="/mission"
                    className="nav-link"
                    activeClassName="active"
                    onClick={toggleNavbar}
                  >
                    Mission
                  </NavLink>
                </li>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  activeClassName="active"
                  onClick={toggleNavbar}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            {/* <form class="d-flex">
            <NavLink to="/signup">
                      <button className="sign-in-btn">Sign Up</button>
                    </NavLink>
             
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;

