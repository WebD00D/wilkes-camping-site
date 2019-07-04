import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import InputField from '../components/InputField';
import firebase from '../datastore';

import { VALIDATE_FIELDS } from '../utils/index';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false
    };
  }

  //   getMeSomeData() {
  //     this.getUser().then(user => {
  //       // data now has all the user data we want..

  //       this.getUsersCampsites(user.id).then(campsites => {
  //         console.log('campsites', campsites);

  //         // THIS IS A CODE SNIFF
  //         this.doSomething().then(response => {});
  //       });
  //     });
  //   }

  signInUser() {
    const userId = `7s9YssJiJ1QAkDYy6evfjZYC1ah1`; // Firebase user..

    console.log('user id', userId);

    // 1. Take user id, and grab info from our "users" endpoint..

    firebase
      .database()
      .ref(`/users/${userId}`)
      .once('value')
      .then(snapshot => {
        console.log('authenticated user', snapshot.val());

        const { email, name, profilePhoto } = snapshot.val();

        window.localStorage.setItem('CAMPSITE_uuid', userId);
        window.localStorage.setItem('CAMPSITE_name', name);
        window.localStorage.setItem('CAMPSITE_email', email);
        window.localStorage.setItem('CAMPSITE_photo', profilePhoto);

        this.setState({
          shouldRedirect: true
        });

        //  window.localStorage.getItem()
        //  window.localStorage.removeItem()
      });

    /// ------ FOR YOU TO FIX ---- ///

    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then(resp => {

    // SIGN IN STUFF SHOULD HAPPEN HERE...

    //   })
    //   .catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // ...
    //   });
  }

  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to="/Dashboard" />;
    }

    return (
      <div>
        <h1>Log In</h1>
        <InputField labelName="Email" inputType="email" />
        <InputField labelName="Password" inputType="password" />
        <button onClick={() => this.signInUser()}>Sign In</button>
      </div>
    );
  }
}
