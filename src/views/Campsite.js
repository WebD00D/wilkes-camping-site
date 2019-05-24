import React, { Component } from 'react';
import Rating from '../components/Rating';


export default class Campsite extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <h1>Campsite!!!!!!!</h1>
        <Rating />
      </div>
    );
  }
}
