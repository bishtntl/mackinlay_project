import React from "react";
// import image1 from "./images/logo.png";
import { NavLink } from "react-router-dom";
import logo from "../Assetes/images/mackinlay_logo.png";
import "../Css/header.css";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container customheader">
          <a class="navbar-brand" href="/">
          <img
                    src={logo}width="100px;" alt="not-found" onClick={() => ("/")}
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
             <NavLink to="/signup" style={{ color:"white"}}> <button className="sign-in-btn">Sign In</button></NavLink>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

// import React from "react";
// import "../Css/style.css";
// import { NavLink, useNavigate } from "react-router-dom";
// import logo from "../Assetes/images/mackinlay_logo.png";

// function Header() {
//   const navigate = useNavigate();
//   return (
//     <>
//       <section className="container">
//         <div className="row">
//           <div className="col-sm-12 m-0 p-0 ">
//             <nav className="navbar navbar-expand-lg navbar-light">
//               <div className="container p-0 custom-background">
//                 <div className="navbar-brand">
//                   <img
//                     src={logo}
//                     width="100px;"
//                     alt="not-found"
//                     onClick={() => navigate("/")}
//                   />{" "}
//                 </div>
//                 <button
//                   className="navbar-toggler"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#navbarSupportedContent"
//                   aria-controls="navbarSupportedContent"
//                   aria-expanded="false"
//                   aria-label="Toggle navigation"
//                 >
//                   <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div
//                   className="collapse navbar-collapse"
//                   id="navbarSupportedContent"
//                 >
//                   <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                     <li className="nav-item">
//                       <NavLink to="/" className="nav-link">
//                         Home
//                       </NavLink>
//                     </li>
//                     <li className="nav-item">
//                       <NavLink to="/discover" className="nav-link">
//                         Discover
//                       </NavLink>
//                     </li>
//                     <li className="nav-item">
//                       <NavLink to="/service" className="nav-link">
//                         Service
//                       </NavLink>
//                     </li>
//                     <li className="nav-item">
//                       <NavLink to="/mission" className="nav-link">
//                         Mission
//                       </NavLink>
//                     </li>
//                     <li className="nav-item">
//                       <NavLink to="/contact" className="nav-link">
//                         Contact
//                       </NavLink>
//                     </li>
//                   </ul>

//                 </div>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </section>

//     </>
//   );
// }

// export default Header;
