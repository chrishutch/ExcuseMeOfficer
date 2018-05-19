import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchForm from "../../components/SearchForm";


const Navbar = props =>

        <nav id="navbar" className="navbar navbar-light secondnav">
         
            <a className="navbar-brand" id="navlogo" href="/home">
                <img alt="" src={require('../../images/2.png')} width="100px" height="60px" to="/about"/>
            </a>
            <div className="d-flex justify-content-end">
            <form id="searchnav">
            <div className="input-group">          
                    <SearchForm/>
            </div>
            </form>

        </div>        
                <div className="expand navbar-expand">
                    <ul className="navbar-nav mr-auto">

                        <li
                            className={window.location.pathname === "/form" ? "active" : ""}>
                            <Link to="/form">Write a Review</Link>
                        </li>

                        <li className={window.location.pathname === "/about" ? "active" : ""}>
                            <Link to="/about">Login</Link>
                        </li>
                    </ul>
                </div>
        </nav>







export default Navbar;
