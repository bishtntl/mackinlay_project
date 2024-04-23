import React from "react";
// import image1 from "./images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Assetes/images/mackinlay_logo.png";
import "../Css/header.css";

const Header = () => {
  const navi = useNavigate();
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container customheader">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              style={{ width: "100px;" }}
              alt="not-found"
              onClick={() => "/"}
              className="logo"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-4 mb-2 mb-lg-0">
              <li class="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/discover">
                  Discover
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link "
                  href="/service"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  {" "}
                  Service
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  href="/mission"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Mission
                </a>
              </li>
              <li className="nav-item">
                <a
                  class="nav-link"
                  href="/contact"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Contact
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <button className="sign-in-btn" onClick={() => navi("/signup")}>
                Sign In
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container customheader">
          <a class="navbar-brand" href="#">
          <img
                    src={logo} width="100px;" alt="not-found" onClick={() => ("/")}
                 />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-4 mb-2 mb-lg-0">
              <li class="nav-item">
              <NavLink to="/" className="nav-link">
                     Home
                     </NavLink>
              </li>
              <li class="nav-item">
              <NavLink to="/discover" className="nav-link">
                         Discover
                    </NavLink>
              </li>

              <li class="nav-item">
              <NavLink to="/service" className="nav-link">
                        Service
                       </NavLink>
              </li>
              <li class="nav-item">
              <NavLink to="/mission" className="nav-link">
                        Mission
                     </NavLink>
              </li>
              <li class="nav-item">
              <NavLink to="/contact" className="nav-link">
                       Contact
                     </NavLink>
              </li>
             
            </ul>
            <form class="d-flex">
              <button className="sign-in-btn">Sign In</button>
            </form>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default Header;
