import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchForm from "../components/SearchForm";

const Review = () =>
  <div>
       

      {/* First Row */}
      <Row className="searchresults">
        <Col size="md-12">
          <h1>Search Results!</h1>
        </Col>
            </Row>

      <Row>


            {/* Reviews */}
            <div class="col-7 reviewpane">
             
                <p>
            <h3>Reviews</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at
            et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
            gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis
            mi sollicitudin turpis semper, et interdum risus lobortis.

          </p>

                </div>
            {/* Map */}
            
            <div class="col-5 mappane">
                <h3>Map</h3>
                <img src={require('../images/map.PNG')} width="520px" height="200px" />

             </div>

      
  
        </Row>

  </div>;

export default Review;
