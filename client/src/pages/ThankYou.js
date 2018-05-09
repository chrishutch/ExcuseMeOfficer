import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

class ThankYou extends Component {
  state = {
    review: {}
  };

  componentDidMount() {
    API.getReview(this.props.match.params.id)
      .then(res => this.setState({ review: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
  <Container fluid>
    <Row>
      <Col size="md-12">
          <h1>Thank you for your feedback!</h1>
      </Col>
    </Row>

        <Row>
          <Col size="md-12">
            
              <h1>
                {this.state.review.experience} in {this.state.review.city}
              </h1>
    
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Feedback</h1>
              <p>
                {this.state.review.feedback}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ThankYou;