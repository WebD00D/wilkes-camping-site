import React, { Component } from 'react';
import InputField from '../components/InputField';
import firebase from '../datastore';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    // this.handleAuth = this.handleAuth.bind(this);
    // this.sortFunction = this.sortFunction.bind(this);

    this.getUsers = this.getUsers.bind(this);

    this.state = {
      // authenticated: false,
      users: [],
      name: '',
      age: ''
    };
  }

  // handleAuth() {
  //   this.setState({
  //     authenticated: true
  //   });
  // }

  // sortFunction() {
  //   const { authenticated, name } = this.state;

  //   if (authenticated) {
  //     return <div>You are already signed up!</div>;
  //   }

  //   if (!authenticated) {
  //     return <div>Please sign up</div>;
  //   }
  // }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    firebase
      .database()
      .ref('/users')
      .once('value')
      .then(snapshot => {
        // console.log('user', snapshot.val());
        this.setState({
          users: snapshot.val()
        });
      });
  }

  renderUser() {
    const { users } = this.state;

    let userEls;

    userEls =
      users &&
      Object.keys(users).map(c => {
        const user = users[c];
        console.log('SINGLE USER', user);

        return (
          <div>
            <h3>{users.name}</h3>
            <p>{users.age}</p>
            
          </div>
        );
      });

    return userEls;
  }

  render() {
    return (
       <div>
         {this.renderUser()}
        {/* <h1>sign up here</h1>
        <button onClick={this.handleAuth}>Sign Up</button> */}
      </div> 
    );
  }
}










// {
  /* <button onClick={() => this.setState({ renderNewRating: true })}>
            {' '}
            Rate this campsite{' '}
          </button> */
// }

// 1. Create a signup handler function which will fire when a button "Sign up" is clicked.
// 2. When the handler function runs, it should set a state property of "authenticated" to true.
// 3. If authenticated is true, don't display the form, show a message that says "you are signed up!"
