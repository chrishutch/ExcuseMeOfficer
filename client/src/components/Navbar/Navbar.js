import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
    <container>
  <nav className="navbar navbar-default">
            <a className="logo" to="/">
        <img src={require('../../images/3.png')} width="250px" height="50px"/>
        </a>
       
      <div className="expand navbar-expand" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    <li
                        className={
                            window.location.pathname === "/" ||
                                window.location.pathname === "/about"
                                ? "active"
                                : ""
                        }
                    >
                        <Link to="/home">Home</Link>
                    </li>

                    <li
                        className={window.location.pathname === "/form" ? "active" : ""}>
                        <Link to="/form">Write a Review</Link>
                    </li>
                    <li className={window.location.pathname === "/about" ? "active" : ""}>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
    </div>
  </nav>
  </container>;


export default Navbar;
