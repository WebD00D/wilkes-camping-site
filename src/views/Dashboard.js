import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import firebase from "../datastore";
import { WithAuth } from "../contexts/AuthContext";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  signOutHandle() {
    this.props.authContext.logOutUser();
  }

  render() {
    const {
      name,
      profilePhoto,
      email,
      isAuthenticated
    } = this.props.authContext;

    console.log("dashboard name", this.props.authContext.name);
    console.log("dashboard email", this.props.authContext.email);
    console.log("dashboard profilePhoto", this.props.authContext.profilePhoto);

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <h1>Dashboard</h1>
        <h4>{name}</h4>
        <div>{email}</div>
        <h4>{profilePhoto}</h4>
        <Link to="/NewPost">Add New Campsite</Link>
        <button onClick={() => this.signOutHandle()}>Sign Out</button>
      </div>
    );
  }
}

export default WithAuth(Dashboard);
