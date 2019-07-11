import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import firebase from "../datastore";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
      profilePhoto: "",
      userName: "",
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    const userId = window.localStorage.getItem("CAMPSITE_uuid");

    if (!userId) {
      this.setState({
        isAuthenticated: false
      });
    } else {
      this.setState({
        profilePhoto: window.localStorage.getItem("CAMPSITE_photo"),
        userName: window.localStorage.getItem("CAMPSITE_name")
      });
    }
  }

  signOutUser() {
    const { email, password } = this.state;

    firebase
      .auth()
      .signOut(email, password)
      .then(() => {
        // Sign-out successful.
      })
      .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        // An error happened.
      });
  }

  render() {
    if (!this.state.isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <h1>Dashboard</h1>
        <h4>{this.state.userName}</h4>
        <img src={this.state.profilePhoto} />
        <button onClick={() => this.signOutUser()}>Sign Out</button>
      </div>
    );
  }
}
