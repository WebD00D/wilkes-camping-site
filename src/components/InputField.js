import React, { Component } from 'react';

export default class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      name: 'Hello',
    };
  }

  setValue(fieldValue) {
    this.setState({
      value: fieldValue
    });
  }

  signInUser() {
    alert(this.state.value);
  }

  render() {
    return (
      <div>
        <label>{this.props.labelName}</label>
        <input
          onChange={e => this.setValue(e.target.value)}
          type={this.props.inputType}
        />
        <button onClick={() => this.signInUser()}>Sign In</button>
      </div>
    );
  }
}
