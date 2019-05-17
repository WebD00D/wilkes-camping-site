import React, { Component } from 'react';

import BigButton from '../components/BigButton';
import InputField from '../components/InputField';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <InputField labelName="Username" inputType="email" />
        
        <BigButton text="Hello" color="red" />
        <BigButton text="Whats up" color="green" />
        <BigButton text="Click me" />
      </div>
    );
  }
}
