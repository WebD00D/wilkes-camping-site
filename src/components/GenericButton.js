import React, { Component } from 'react';

export default class NameDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.handleClick()}>{this.props.buttonName}</button>
      </div>
    );
  }
}
