import React, { Component } from 'react';
import FieldGroup from '../components/Form/FieldGroup';

import { Checkbox, 
  Radio, 
  ControlLabel, 
  FormGroup, 
  FormControl, 
  Button,
  Grid, 
  Row, 
  Col,
  ProgressBar,
  PageHeader
} from 'react-bootstrap';





  class FormInstance extends Component {
    render() {
      return (
      <Grid>
        <form>
        
            <Row className="show-grid">
              <Col xs={12} md={8}>
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="First, when did the interaction happen?*"
                  placeholder="Enter text"
                />
              </Col>
            </Row>
          
            <Row className="show-grid">
              <Col xs={12} md={3}>
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Where did it happen? "
                  placeholder="Enter Street Address here"
                />
              </Col>
              <Col xs={12} md={3}>
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="    "
                  placeholder="City"
                />
              </Col>
              <Col xs={12} md={3}>
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="    "
                  placeholder="zip Code"
                />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} md={6}>  
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>What Happened?</ControlLabel>
                  <FormControl componentClass="textarea" placeholder="Write what happened here" />
                </FormGroup>
              </Col>
            </Row>

          <Row className='show-grid'>
            <Col xs={12} md={6}>
              <FieldGroup
                id="formControlsFile"
                type="file"
                label="File"
                help="Evidence Locker."
              />
            </Col>
          </Row>

          <Row className='show-grid'>
            <Col xs={12} md={6}>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Describ you Experience</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="1">Great Service</option>
                <option value="2">Heroic</option>
                <option value="3">Averge</option>
                <option value="4">Racial Discrimination</option>
                <option value="5">Sexual Harrassment</option>
                <option value="6">LGBT Inequality</option>
              </FormControl>
            </FormGroup>
            </Col>
          </Row>

          <ProgressBar now={100} />
            <PageHeader>
              <small>Additional Information</small>
            </PageHeader>
          <ProgressBar now={100} />

          <Row className="show-grid">
            <Col xs={12} md={3}>
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Officiers Name"
                placeholder="Enter text"
              />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={3}>
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Offiers Badge No."
                placeholder="Enter text"
              />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={3}>
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Tickect/Citation No."
                placeholder="Enter text"
              />
            </Col>
          </Row>

          <Row className='show-grid'>
            <Col xs={12} md={12}>
              <code>Did the interaction happen while part of?</code>
              <FormGroup>
                <Checkbox inline>RideSharing</Checkbox> <Checkbox inline>School Campus</Checkbox>{' '}
                <Checkbox inline>Event/Protest</Checkbox>
              </FormGroup>
            </Col>
          </Row>
          <FieldGroup 
          id="formControlsPassword" 
          label="Password" 
          type="password" />
          
         
          <Checkbox checked readOnly>
            Checkbox
          </Checkbox>
          <Radio checked readOnly>
            Radio
          </Radio>
          <FormGroup>
            <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox>{' '}
            <Checkbox inline>3</Checkbox>
          </FormGroup>
          <FormGroup>
            <Radio name="radioGroup" inline>
              1
            </Radio>{' '}
            <Radio name="radioGroup" inline>
              2
            </Radio>{' '}
            <Radio name="radioGroup" inline>
              3
            </Radio>
          </FormGroup>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formControlsSelectMultiple">
            <ControlLabel>Multiple select</ControlLabel>
            <FormControl componentClass="select" multiple>
              <option value="select">select (multiple)</option>
              <option value="other">...</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Textarea</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Static text</ControlLabel>
            <FormControl.Static>email@example.com</FormControl.Static>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </form>
      </Grid>
      )
    }
}
export default FormInstance;