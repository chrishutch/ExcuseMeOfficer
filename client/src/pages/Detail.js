import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

class Detail extends Component {
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

              <h1>
                {this.state.review.rating} star experience in {this.state.review.zipcode}
              </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.review.feedback}
              </p>
            </article>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
