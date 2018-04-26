import React, { Component } from 'react';
import Header from './Header';
import Grid from 'react-bootstrap';
import FormInstance from './FormInstance';

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <FormInstance />
      </div>
    );
  }
}
export default App;