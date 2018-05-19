import React, { Component } from "react";
import API from "../utils/API";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { Col, Row, Container } from "../components/Grid";
import Mapbox from "../components/Mapbox";

class Review extends Component {
state = {
      reviews: [],
      date: "",
      time: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      officerName: "",
      officerBadge: "", 
      experience: "",
      ticketNumber: "",
      witness: "",
      evidence: "",   
      rating: "",
      filename: "",
      feedback: "",
    };
  

  componentDidMount() {
    this.loadReviews();
    // this.loadReviewsByZip();
  }

  loadReviews = () => {
    console.log(this.props.match.params.selected)
    API.getReviews()
      .then(res =>
        this.setState({ reviews: res.data, date: "", time: "", street: "", city: "", state:"IL", zipcode: "", officerName: "", officerBadge: "", ticketNumber: "", experience: "", filename: "", feedback: "", rating: "", witness: "" }))
      .catch(err => console.log(err));
  };

    loadReviewsByZip = (zip) => {
   
    API.getReviewsByZip(this.props.match.params.zip)
      .then(res => {
        console.log('res', res.data)
        console.log(this.props)  
        this.setState(
          { 
            reviews: res.data, date: "", time: "", street: "", city: "", state:"IL", zipcode: "", officerName: "", officerBadge: "", ticketNumber: "", experience: "", filename: "", feedback: "", rating: "", witness: ""
        //     date: res.data.date,
        // time: res.data.time,
        // street: res.data.street,
        // city: res.data.city,
        // state: res.data.state,
        // zipcode: res.data.zipcode,
        // experience: res.data.experience,
        // rating: res.data.rating,
        // feedback: res.data.feedback,
        // evidence: res.data.evidence,
        // witness: res.data.witness,
        // officerName: res.data.officerName,
        // officerBadge: res.data.officerBadge,
        // ticketNumber: res.data.ticketNumber
          }) 
      }
      )
      .catch(err => console.log(err));
  };
         render() {
    return (
      <div>
      <Container fluid>
      {/* First Row */}
      <Row className="searchresults">
        <Col size="md-12">
          <br />
        </Col>
            </Row>

      <Row>


            {/* Review */}
            <div className="col-7 reviewpane">
             
                
             <Col size="md-8 sm-12">
              

            {this.state.reviews.length ? (
              <List>
                {this.state.reviews.map(review => (
                  <ListItem key={review._id}>
                    <Link to={"/reviews/" + review._id}>
                      <strong>
                        {review.experience} in {review.rating}
                      </strong>
                    </Link>
                    {/*<DeleteBtn onClick={() => this.deleteReview(review._id)} />*/}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Reviews for this Zip Code</h3>
              // <Link to="/form">Write a Review</Link>
            )}
          </Col>

                </div>
            {/* Map */}
            <div className="col-5 mappane">
            <Mapbox />

</div>
  
        </Row>
</Container>
<br />
  </div>
      );
  }
}

export default Review;
