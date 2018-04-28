import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import Hero from "../components/Hero";
import Background from '../images/images5.jpg';
import { Link } from "react-router-dom";


var sectionStyle = {
    width: "100%",
    backgroundSize: 'cover',
    overflow: 'hidden',
    height: "600px",
    backgroundImage: `url(${Background})`

};

class Search extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getBaseBreedsList()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
      return (
   /*Navbar*/
          <section style={sectionStyle}>
              <div className="homeContainer" id="homeContainer">
                  <nav className="navbar navbar-default">

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





                              <div className="expand navbar-expand" id="navbarSupportedContent">
                                  <ul className="navbar-nav mr-auto">
                                      <li
                                          className={window.location.pathname === "/discover" ? "active" : ""}>
                                          <Link to="/home">Login</Link>
                                      </li>
                                      <button className={window.location.pathname === "/search" ? "active" : ""} class="btn btn-light" id="signup">
                                          <Link to="/home">Sign Up</Link>
                                      </button>
                                  </ul>
                              </div>
                          </nav>
                       

              {/*End Navbar*/}
              <br /><br /><br /><br />

      <Container style={{ minHeight: "80%" }}>
                  <h1 className="text-center"><img src={require('../images/3.png')} width="500px" height="110px"/></h1>
                  <Alert
          type="danger"
          style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
        >
          {this.state.error}
        </Alert>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          breeds={this.state.breeds}
        />
        <SearchResults results={this.state.results} />


      </Container>
      </div>;
          </section>
    );
  }
}


export default Search;
