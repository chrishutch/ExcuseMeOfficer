import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import Background from '../images/4.png';
import { Link } from "react-router-dom";

var sectionStyle = {
    width: "100%",
    backgroundSize: 'cover',
    overflow: 'hidden',
    height: "500px"


};


const Search = () => (

          /*Navbar*/
          <section style={sectionStyle}>
              <div className="homeContainer" id="homeContainer">
                  <nav className="navbar navbar-default">

                      <div className="expand navbar-expand" id="navbarSupportedContent">
                          <ul className="navbar-nav mr-auto">

                              <li
                                  className={window.location.pathname === "/form" ? "active" : ""}>
                                  <Link to="/form">Write a Review</Link>
                              </li>
                              <li
                                  className={
                                      window.location.pathname === "/" ||
                                          window.location.pathname === "/guide"
                                          ? "active"
                                          : ""
                                  }
                              >
                                  <Link to="/review">Reviews</Link>
                              </li>
                              <li className={window.location.pathname === "/guide" ? "active" : ""}>
                                  <Link to="/guide">Guide</Link>
                              </li>
                          </ul>
                      </div>

                      <div className="expand navbar-expand" id="navbarSupportedContent">
                          <ul className="navbar-nav mr-auto">
                              <li
                                  className={window.location.pathname === "/discover" ? "active" : ""}>
                                  <Link to="/home">Login</Link>
                              </li>
                              <button className={window.location.pathname === "/search" ? "active" : ""} className="btn btn-light" id="signup">
                                  <Link to="/home">Sign Up</Link>
                              </button>
                          </ul>
                      </div>
                  </nav>
                       

                  {/*End Navbar*/}

                  <br /><br />


  

      <Container style={{ minHeight: "95%" }}>
                <h1 className="text-center"><img src={require('../images/4.png')} width="250px" height="250px"/></h1>

        <SearchForm/>
  


      </Container>
      </div>;
          </section>
    );


export default Search;
