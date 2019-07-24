import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
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
        profilePhoto: window.localStorage.getItem("CAMPSITE_photo") || "",
        email: window.localStorage.getItem("CAMPSITE_email") || ""
      });
    }

    return;
  }

  signOutUser() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.

        // NOTE: Clear the local storage items..

        window.localStorage.removeItem("CAMPSITE_photo");
        window.localStorage.removeItem("CAMPSITE_email");
        window.localStorage.removeItem("CAMPSITE_name");
        // do i need to do theses 3 as well??^
        window.localStorage.removeItem("CAMPSITE_uuid");

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
        <div>{this.state.email}</div>
        <Link to="/NewPost">Add New Campsite</Link>
        <button onClick={() => this.signOutUser()}>Sign Out</button>
      </div>
    );
  }
}
