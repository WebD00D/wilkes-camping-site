import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import firebase from "../datastore";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
    this.signOutUser = this.signOutUser.bind(this);

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
    const { email, name, profilePhoto } = this.state;
    // const profilePhoto: this.state;

    console.log("user id", userId);

    if (!userId) {
      this.setState({
        isAuthenticated: false
      });
    } else {
      // console.log("photo", this.profilePhoto);
      this.setState({
        profilePhoto: window.localStorage.getItem("CAMPSITE_profilePhoto"),
        email: window.localStorage.getItem("CAMPSITE_email")
      });
      console.log("email", this.email);
      console.log("photo", this.profilePhoto);
    }

    return;
  }

  signOutUser() {
    const { email, password } = this.state;

    firebase
      .auth()
      .signOut(email, password)
      .then(() => {
        // Sign-out successful.
        this.setState({
          isAuthenticated: false
        });
      })
      .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("error", errorCode, errorMessage);
        // An error happened.
      });
  }

  render() {
    if (!this.state.isAuthenticated) {
      return <Redirect to="/login" />;
    }

    // this.componentDidMount();
    // causes update depth error

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
