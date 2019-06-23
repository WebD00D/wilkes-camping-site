import React, { Component } from 'react';
import InputField from '../components/InputField';
import firebase from '../datastore';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    // this.handleAuth = this.handleAuth.bind(this);
    // this.sortFunction = this.sortFunction.bind(this);

    this.getUsers = this.getUsers.bind(this);
    this.renderUser = this.renderUser.bind(this);
    this.handleSignup = this.handleSignup.bind(this);

    this.state = {
      // authenticated: false,
      name: null,
      email: null,
      password: null,
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
    console.log('users', users);

    let userEls;

    userEls =
      users &&
      Object.keys(users).map(c => {
        const user = users[c];
        console.log('SINGLE USER', user);

        return (
          <div key={c}>
            <h3>{user.name}</h3>
            <p>{user.age}</p>
          </div>
        );
      });

    console.log('user els', userEls);

    return userEls;
  }

  

  handleSignup() {
    const { email, password, name } = this.state;

    // TODO: VAlidate form fields aka check for empties

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(u => {
        console.log('the new user!', u.user.uid);

        // Now want to save that user to the database..

        // store the email and name

        const userUpdates = {};
        userUpdates[`users/${u.user.uid}/name`] = name;
        userUpdates[`users/${u.user.uid}/email`] = email;

        firebase
          .database()
          .ref()
          .update(userUpdates)
          .then(() => {
            this.getUsers();
          });
      })
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        // ..
      });
  }

  render() {
    return (
      <div>
        <h1>sign up here</h1>

        <label>name</label>
        <input onChange={e => this.setState({ name: e.target.value })} />
        <label>email</label>
        <input onChange={e => this.setState({ email: e.target.value })} />
        <label>password</label>
        <input
          type="password"
          onChange={e => this.setState({ password: e.target.value })}
        />
        <button onClick={() => this.handleSignup()}>Sign me up</button>

        {this.renderUser()}
        {/* <button onClick={this.handleAuth}>Sign Up</button> */}
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

// addUser() {
//   const {name, age} = this.state;

//   const updates = {};

//   const uniqueId = Date.now();
//   updates['/users/${uniqueId}/name'] = name;
//   updates['/users/${uniqueId}/age'] = age;

//   firebase
//     .database()
//     ref()
//     .update(updates)
//     .then(() => {
//       this.getUser();
//     });
// }

// <label>Add User</label>
// <input
//   onChange={e => this.setState({ name: e.target.value })}
//   placeholder="name"
// />
// <input
//   onChange={e => this.setState({ age: e.target.value })}
//   placeholder="age"
// />
// <button onClick={() => this.addUser()}>Add User</button>
