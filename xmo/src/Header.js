import React, { Component} from 'react'
import {Grid, Row, Col, PageHeader} from 'react-bootstrap'
class Header extends React.Component{
    constructor(props){
      super(props);
    }
    render () {
      return (
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
                  <PageHeader>
                      Officer Feedback
                  </PageHeader>
              </Col>
          </Row>
       </Grid> 
         
      );
    }
  }

export default Header;