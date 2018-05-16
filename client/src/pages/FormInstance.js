import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn, Address, State, City, FormRow, Zip, Evidence, Witness, DateCollected, TimeCollected} from "../components/Form";
import Rating from "../components/Form";
class Reviews extends Component {
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
      feedback: ""
  };

  componentDidMount() {
    this.loadReviews();
  }

  loadReviews = () => {
    API.getReviews()
      .then(res =>
        this.setState({ reviews: res.data, date: "", time: "", street: "", city: "", state:"IL", zipcode: "", officerName: "", officerBadge: "", ticketNumber: "", experience: "", feedback: "", rating: "", witness: "" }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.feedback && this.state.city) {
      API.saveReview({
        date: this.state.date,
        time: this.state.time,
        street: this.state.street,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode,
        experience: this.state.experience,
        rating: this.state.rating,
        feedback: this.state.feedback,
        evidence: this.state.evidence,
        witness: this.state.witness,
        officerName: this.state.officerName,
        officerBadge: this.state.officerBadge,
        ticketNumber: this.state.ticketNumber 
      })
        .then(/*window.location.href={ThankYou}*/)
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
      <Container fluid>
        <Row>
        <Col size="md-3">
        </Col>
          <Col size="md-6">
              <h1>Leave Officer Feedback</h1>
              <br />
            <form>
            <h5>When did this happen?</h5>
            <DateCollected
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
              />
              <TimeCollected
                value={this.state.time}
                onChange={this.handleInputChange}
                name="time"
              />
              <h5>Where did this happen?</h5>
              <Address
                value={this.state.street}
                onChange={this.handleInputChange}
                name="street"
                placeholder="1234 Michigan Street (required)"
              />
              <FormRow>
              <City
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                placeholder="City (required)"
              />
              <State
                value={this.state.state}
                onChange={this.handleInputChange}
                name="state"
              />
              <Zip
                value={this.state.zipcode}
                onChange={this.handleInputChange}
                name="zipcode"
                placeholder="60202"
              />
              </FormRow>
              <h5>Describe your experience.</h5>
              <Input
                value={this.state.experience}
                onChange={this.handleInputChange}
                name="experience"
              />
              <h5>Rate your experience.</h5>
              {/*<Rating/>*/}
              <Rating/>
              <br/>
              <br/>
              <h5>What happened?</h5>
              <h6>Tell us your story.</h6>
              <TextArea
                value={this.state.feedback}
                onChange={this.handleInputChange}
                name="feedback"
                placeholder="Excuse me officer, ..."
              />
              <Evidence
                value={this.state.evidence}
                onChange={this.handleInputChange}
                name="evidence"
              />
              
              <br/>
              <hr/>
              <h2>Additional Information</h2>
              <hr/>
              <h5>Were you a witness?</h5>
              <Witness
                value={this.state.witness}
                onChange={this.handleInputChange}
                name="witness"
              />
              <br />
              <h5>Officer Name(s):</h5>
               <Input
                value={this.state.officerName}
                onChange={this.handleInputChange}
                name="officerName"
              />
              <h5>Officer Badge Number(s):</h5>
               <Input
                value={this.state.officerBadge}
                onChange={this.handleInputChange}
                name="officerBadge"
              />
              <h5>Ticket/Citation Numbers:</h5>
               <Input
                value={this.state.ticketNumber}
                onChange={this.handleInputChange}
                name="ticketNumber"
              />
              <br/>
              <FormBtn
                // disabled={!(this.state.city && this.state.feedback)}
                onClick={this.handleFormSubmit}

              >
                Submit Feedback
              </FormBtn>
            </form>
          </Col>
          <Col size="md-3">
        </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Reviews;
