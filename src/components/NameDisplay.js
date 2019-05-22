import React, { Component } from 'react';

export default class NameDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <label>{this.props.displayName}</label>
        <button onClick={() => this.props.handleClick()}>Clear Name</button>
      </div>
    );
  }
}
