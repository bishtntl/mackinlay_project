import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/style.css";
function FooterCompo() {
  return (
    <footer>
      <section className="bgcolor for_prouct">
        <div class="container parent ">
          <div class="row d-flex justify-content-start ps-4">
            <div className="col-md-4">
              <div>
                <p style={{ fontSize: "2em" }}>Our Head Office</p>
                <hr style={{ height: "3px" }} />
              </div>
              <div>
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                <span className="m-2">
                  2 New Street, Melvelam, TK, Walajapet,
                </span>
                <p className="tamil">TamilNadu - 632513 India</p>
              </div>
              <div>
                <span>
                  <i class="fa-solid fa-phone"></i>
                  <span className="m-2">+91 88966 19811</span>
                </span>
              </div>
              <div>
                <span>
                  {" "}
                  <i class="fa-solid fa-envelope"></i>
                </span>
                <span className="m-2">contactus@mackinlay.in</span>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <p style={{ fontSize: "2em" }}>Quick Links</p>
                <hr style={{ height: "3px" }} />
              </div>
              <div>
                <span className="arrow">
                  <i class="fa-solid fa-greater-than"></i>
                </span>{" "}
                <NavLink
                  to="/"
                  style={{ color: "white" }}
                  className="footernav"
                >
                  Home
                </NavLink>
              </div>
              <div>
                <span className="arrow">
                  <i class="fa-solid fa-greater-than"></i>
                </span>{" "}
                <NavLink to="/discover" className="footernav">
                  Discover
                </NavLink>
              </div>
              <div>
                <span className="arrow">
                  <i class="fa-solid fa-greater-than"></i>
                </span>{" "}
                <NavLink to="/service" className="footernav">
                  Service
                </NavLink>
              </div>
              <div>
                <span className="arrow">
                  <i class="fa-solid fa-greater-than"></i>
                </span>{" "}
                <NavLink to="/mission" className="footernav">
                  Mission
                </NavLink>
              </div>
              
              <div>
                <span className="arrow">
                  <i class="fa-solid fa-greater-than"></i>
                </span>{" "}
                <NavLink to="/contact" className="footernav">
                  contact
                </NavLink>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <p style={{ fontSize: "2em" }}>Newsletter</p>
                <hr style={{ height: "3px" }} />
              </div>
              <div>
                <p>
                  Mackinlay, established in 2021, is a dynamic IT company with a
                  strong foothold in the HR Tech and BFSI domains. Leveraging
                  two years of expertise, we provide innovative solutions that
                  drive efficiency and excellence in business operations.
                </p>
              </div>
              <div className="p-3 d-flex justify-content-between logos">
                <span>
                  <i class="fa-brands fa-instagram"></i>
                </span>
                <span>
                  <i class="fa-brands fa-twitter flex-nowrap"></i>
                </span>
                <span>
                  <i class="fa-brands fa-facebook"></i>
                </span>
                <span>
                  <i class="fa-brands fa-linkedin"></i>
                </span>
              </div>
            </div>
            <hr style={{ height: "0.5vh" }} />
            <div>
              <p className="text-center">
                {/* <NavLink to="/contact" className="copywrite"> */}© Copyright
                © 2024 | Mackinlay, {/* </NavLink>{" "} */}
                All Right Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default FooterCompo;
