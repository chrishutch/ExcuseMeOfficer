import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

const Navbar = props =>

        <nav id="navbar" className="navbar navbar-light bg-light secondnav">
         
            <a className="navbar-brand" id="navlogo" href="/home">
                <img src={require('../../images/2.png')} width="100px" height="50px" to="/about"/>
            </a>
            <div className="d-flex justify-content-end">
            <form id="searchnav">

            <div className="input-group">
          
                    <input
                        value={props.search}
                        onChange={props.handleInputChange}
                        name="breed"
                        list="breeds"
                        type="text"
                        className="form-control"
                        placeholder="Type in a location to search"
                        id="searchinput"
                        size="50"
                    />
                    <div className="input-group-append">
               
                        <button
                            type="submit"
                            onClick={props.handleFormSubmit}
                            className="btn btn-success"
                            id="searchsubmit">
                            <i className="fa fa-search"></i>
                        </button>
               
                    </div>   
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
 

          
          

    
     
            {/*
                <nav class="navbar navbar-light bg-light">

            <form class="form-inline" id="form1">
            <div class="input-group mb-1" id= "div1">
                  <a className="navbar-brand" id="navlogo" to="/">
                        <img src={require('../../images/2.png')} width="100px" height="50px" />
                    </a>
            <input type="text" placeholder="Search.." name="search" id="input1"/>
            <span class="input-group-btn" id="span1">
                    <button
                        type="submit"
                        onClick={props.handleFormSubmit}
                        className="btn btn-success"
                        id="searchsubmit">
                        <i class="fa fa-search"></i>
                    </button>    
            </span>
            </div>
            </form>
                </nav>

                  */}




            {/* <div class="input-group mb-2">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">Button</button>
                </div>
            </div>
            */}




        </nav>







export default Navbar;
