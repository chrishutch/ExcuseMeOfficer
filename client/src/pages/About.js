import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () =>
  <div>
        <Hero backgroundImage="https://blackmattersus.com/wp-content/uploads/2017/09/stlouis.jpg">

      <h1>Excuse me Officer</h1>
      <h2>Reviews on Local Police Officers</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1 id="aboutpagetitle">Welcome To Excuse Me Officer!</h1>
        </Col>
        <br />
      </Row>
      <Row>
        <Col size="md-12">
          <p id="aboutstatement">
ExcuseMeOfficer is a WebApp created to record reviews of local
police officers in order to gain a better understanding of escalated situations
and in order to promote a system of Accountability for Officer conduct.
Our vision is to increase the desire among citizens to report heroism 
and misconduct within the police community - ultimately reducing police 
corruption and creating a thriving relationship between the community 
and the law enforcement officers who are there to serve and protect.
          </p>

          <p id="aboutstatement">
          This team was organized and received guidance from mentors 
          at Northwestern Coding BootCamp in Evanston, Illinois.
            </p>
        </Col>
      </Row>
    </Container>
  </div>;

export default About;
