import React, { Component } from 'react';
import InputField from '../components/InputField';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      name: 'Bob'
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.sortFunction = this.sortFunction.bind(this);
  }

  handleAuth() {
    this.setState({
      authenticated: true
    });
  }

  // cannot get this to actually change state - get errors

  sortFunction() {
    const { authenticated, name } = this.state;

    if (authenticated) {
      return <div>You are already signed up!</div>;
    }

    if (!authenticated) {
      return <div>Please sign up</div>;
    }
  }

  // change this to mirror rating page -- two functions referenced in two if statements inside function
  //    if parametes reference boolean props value

  // why will only one run?

  render() {
    return (
      <div>
        {this.sortFunction()}
        <h1>sign up here</h1>
        <button onClick={this.handleAuth}>Sign Up</button>
      </div>
    );
  }
}

{
  /* <button onClick={() => this.setState({ renderNewRating: true })}>
            {' '}
            Rate this campsite{' '}
          </button> */
}

// 1. Create a signup handler function which will fire when a button "Sign up" is clicked.
// 2. When the handler function runs, it should set a state property of "authenticated" to true.
// 3. If authenticated is true, don't display the form, show a message that says "you are signed up!"
