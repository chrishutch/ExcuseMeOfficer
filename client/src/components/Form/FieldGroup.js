import React, { Component } from 'react';
import { 
    FormGroup, 
    ControlLabel, 
    FormControl, 
    help, 
    HelpBlock
} from 'react-bootstrap';
const FieldGroup = ({ id, label, help, ...props }) => (
    <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} />
    {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
)
export default FieldGroup;