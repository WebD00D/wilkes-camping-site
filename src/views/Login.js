import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import InputField from '../components/InputField';
import firebase from '../datastore';

import { VALIDATE_FIELDS } from '../utils/index';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.signInUser = this.signInUser.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      user: {},
      shouldRedirect: false,

      email: '',
      password: ''
    };
  }

  getMeSomeData() {
    this.getUser().then(user => {
      // data now has all the user data we want..

      this.getUsersCampsites(user.id).then(campsites => {
        // console.log("campsites", campsites);

        // THIS IS A CODE SNIFF
        this.doSomething().then(response => {});
      });
    });
  }

  signInUser() {
    // const userId = `7s9YssJiJ1QAkDYy6evfjZYC1ah1`; // Firebase user..
    const { profilePhoto, email, password } = this.state;
    const userId = this.state.user;

    /// ------ FOR YOU TO FIX ---- ///

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(u => {
        console.log('user', u);

        // Step 1. Look up the user by the userId in our database...

        firebase
          .database()
          .ref(`/users/${u.user.uid}`)
          .once('value')
          .then(snapshot => {
            console.log('snapshot from user', snapshot.val());

            const { email, name, profilePhoto } = snapshot.val();

            // 1. Set the user details on our auth context
            this.props.authContext.setUser(
              u.user.uid,
              profilePhoto,
              email,
              name
            );

            // 2. Once those details are set, you're safe to redirect the user elsewhere..
            this.setState({
              shouldRedirect: true
            });
          });

        // this.setState({
        //   profilePhoto: window.localStorage.getItem("CAMPSITE_profilePhoto"),
        //   email: window.localStorage.getItem("CAMPSITE_email"),
        //   name: window.localStorage.getItem("CAMPSITE_name"),
        //   shouldRedirect: true
        // });

        // console.log("should redirect state?", this.state.shouldRedirect);

        // console.log("photo", profilePhoto);

        // window.localStorage.getItem("CAMPSITE_profilePhoto");
        // window.localStorage.getItem("CAMPSITE_name");
      })

      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
  //   console.log("user id", userId);

  // 1. Take user id, and grab info from our "users" endpoint..

  //   firebase
  //     .database()
  //     .ref(`/users/${userId}`)
  //     .once("value")
  //     .then(snapshot => {
  //       console.log("authenticated user", snapshot.val());

  //       const { email, name, profilePhoto } = snapshot.val();

  //       window.localStorage.setItem("CAMPSITE_uuid", userId);
  //       window.localStorage.setItem("CAMPSITE_name", name);
  //       window.localStorage.setItem("CAMPSITE_email", email);
  //       window.localStorage.setItem("CAMPSITE_photo", profilePhoto);

  //       this.setState({
  //         shouldRedirect: true
  //       });

  //       //  window.localStorage.getItem()
  //       //  window.localStorage.removeItem()
  //     });

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    // if (this.state.shouldRedirect) {
    //   return <Redirect to="/Dashboard" />;
    // }

    const { isAuthenticated } = this.props.authContext;

    if (isAuthenticated) {
      return <Redirect to="/Dashboard" />;
    }

    return (
      <div>
        <h1>Log In</h1>
        {/* <InputField labelName="Email" inputType="email" />
        <InputField labelName="Password" inputType="password" /> */}
        <input
          value={this.state.email}
          onChange={this.handleChange}
          type="email"
          name="email"
          placeholder="Enter Email"
        />
        <input
          value={this.state.password}
          onChange={this.handleChange}
          type="password"
          name="password"
          placeholder="Enter Password"
        />
        <button onClick={() => this.signInUser()}>Sign In</button>
      </div>
    );
  }
}

// line 72 then -- .then(resp => {
