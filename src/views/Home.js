import React, { Component } from 'react';

import BigButton from '../components/BigButton';
import InputField from '../components/InputField';
import NameDisplay from '../components/NameDisplay';
import GenericButton from '../components/GenericButton';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Bob'
    };
  }

  clearName() {
    this.setState({
      name: null
    });
  }

  alertNumber() {
    alert(2);
  }

  alertText() {
    alert('Some text')
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <GenericButton
          handleClick={() => this.alertNumber()}
          buttonName="Number Alerter"
        />
        <GenericButton
          handleClick={() => this.alertText()}
          buttonName="Text Alerter"
        />
        
        {/* <NameDisplay
          handleClick={() => this.clearName()}
          displayName={this.state.name}
        /> */}
        {/* <InputField labelName="Username" inputType="email" />
        <BigButton text="Hello" color="red" />
        <BigButton text="Whats up" color="green" />
        <BigButton text="Click me" /> */}
      </div>
    );
  }
}
