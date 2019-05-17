import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <button
        onClick={() => this.incrementCount()}
        className="button"
        style={{ backgroundColor: this.props.color }}
      >
        {this.props.text} {this.state.count}
      </button>
    );
  }
}
