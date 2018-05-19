import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import Mapbox from "../components/Mapbox";

class Detail extends React.Component {
  state = {
    review: {}
  };

  componentDidMount() {
    API.getReview(this.props.match.params.id)
      .then(res => this.setState({ review: res.data }))
      .catch(err => console.log(err));
  }
  componentDidUpdate() {
    this.renderStar()
  }
  renderStar = () => {
    let numbers = this.state.review.rating

    let stars = [];
    for (let i = 0; i > numbers; i++) {
      stars.push(<i className="fa fa-fw fa-star"></i>);
    }
    return stars
  }
  
  render() {
    return (

      <Container fluid>
      <Row>
      <Col size="md-5">
      </Col>
      <Col size="md-2">
      <h2>More Information</h2>
      </Col>
      <Col size="md-5">
      </Col>
      </Row>
        <Row>
         <Col size="md-2">
      </Col>
          <Col size="md-4">


            <h2 className="featurette-heading">{this.state.review.experience}<br /><span className="text-muted">{this.renderStar()}</span></h2>
            <p className="lead">{this.state.review.feedback}</p>
            <p>Happened on {this.state.review.date} at {this.state.review.time}</p>
          </Col>
          <Col size="md-4">
         <Mapbox />
          </Col>
          <Col size="md-2">
      </Col>
        </Row>
      </Container>

    );
  }
}

export default Detail;
