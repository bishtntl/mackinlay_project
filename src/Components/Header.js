import React,{useState} from "react";
// import image1 from "./images/logo.png";
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
            <img src={logo} style={{width:"100px;"}} alt="not-found" onClick={() =>("/")} className="logo" />
          </a>
          <button
            className={`navbar-toggler ${isOpen ? "collapsed" : ""}`}
            type="button"
            onClick={toggleNavbar}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div  className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarSupportedContent">
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
            <form class="d-flex">
            <NavLink to="/signup">
            <button  className="sign-in-btn">Sign In</button></NavLink>  
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;


// import React from "react";
// // import image1 from "./images/logo.png";
// import {  NavLink, useNavigate } from "react-router-dom";
// import logo from "../Assetes/images/mackinlay_logo.png";
// import "../Css/header.css";

// const Header = () => {
//   const navi = useNavigate();
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg bg-light">
//         <div class="container customheader">
//           <a class="navbar-brand" href="/">
//             <img
//               src={logo}
//               style={{ width: "100px;" }}
//               alt="not-found"
//               onClick={() => "/"}
//               className="logo"
//             />
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-4 mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <NavLink className="nav-link active" aria-current="page" to="/">
//                   Home
//                 </NavLink>
//               </li>
//               <li class="nav-item">
//                 <NavLink class="nav-link" to="/discover">
//                   Discover
//                 </NavLink>
//               </li>

//               <li class="nav-item">
//                 <NavLink
//                   class="nav-link "
//                   to="/service"
//                   tabindex="-1"
//                   aria-disabled="true"
//                 >
//                   {" "}
//                   Service
//                 </NavLink>
//               </li>

//               <li class="nav-item">
//                 <NavLink
//                   class="nav-link"
//                   to="/mission"
//                   tabindex="-1"
//                   aria-disabled="true"
//                 >
//                   Mission
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   class="nav-link"
//                   to="/contact"
//                   tabindex="-1"
//                   aria-disabled="true"
//                 >
//                   Contact
//                 </NavLink>
//               </li>
//             </ul>
//             <form class="d-flex">
//               <button className="sign-in-btn" onClick={() => navi("/signup")}>
//                 Sign In
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//       {/* <nav class="navbar navbar-expand-lg navbar-light">
//         <div class="container customheader">
//           <a class="navbar-brand" href="#">
//           <img
//                     src={logo} width="100px;" alt="not-found" onClick={() => ("/")}
//                  />
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-4 mb-2 mb-lg-0">
//               <li class="nav-item">
//               <NavLink to="/" className="nav-link">
//                      Home
//                      </NavLink>
//               </li>
//               <li class="nav-item">
//               <NavLink to="/discover" className="nav-link">
//                          Discover
//                     </NavLink>
//               </li>

//               <li class="nav-item">
//               <NavLink to="/service" className="nav-link">
//                         Service
//                        </NavLink>
//               </li>
//               <li class="nav-item">
//               <NavLink to="/mission" className="nav-link">
//                         Mission
//                      </NavLink>
//               </li>
//               <li class="nav-item">
//               <NavLink to="/contact" className="nav-link">
//                        Contact
//                      </NavLink>
//               </li>
             
//             </ul>
//             <form class="d-flex">
//               <button className="sign-in-btn">Sign In</button>
//             </form>
//           </div>
//         </div>
//       </nav> */}
//     </div>
//   );
// };

// export default Header;



