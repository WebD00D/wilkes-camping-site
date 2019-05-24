import React, { Component } from 'react';
import InputField from '../components/InputField';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };
  }

  render() {
    return (
      <div>
        <h1>sign up here</h1>
        <InputField labelName="Email" inputType="email" />
        <InputField labelName="Password" inputType="password" />
      </div>
    );
  }
}

// 1. Create a signup handler function which will fire when a button "Sign up" is clicked.
// 2. When the handler function runs, it should set a state property of "authenticated" to true.
// 3. If authenticated is true, don't display the form, show a message that says "you are signed up!"
