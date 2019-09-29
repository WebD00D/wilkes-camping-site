import React, { Component } from 'react';
import Rating from '../components/Rating';


export default class Campsite extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log("this.props", this.props);

    // we are looking for the campsiteId param.. for which you
   // will use to then query your firebase db.. 
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
