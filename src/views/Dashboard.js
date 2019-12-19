import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import firebase from "../datastore";
import { WithAuth } from "../contexts/AuthContext";

import styled from "@emotion/styled";
import { PageContainer, PageHeader, PageBody, Button } from "../UI";
import * as UI from "../UI";

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

    // console.log("dashboard name", this.props.authContext.name);
    // console.log("dashboard email", this.props.authContext.email);
    console.log("dashboard profilePhoto", this.props.authContext.profilePhoto);

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <UI.PageContainer>
        <UI.PageHeader>
          <h1>Dashboard</h1>
          <h4>{name}</h4>
          <h4>{email}</h4>
          <img src={profilePhoto} />
        </UI.PageHeader>
        <UI.Button>
          <Link to="/Profile">Profile</Link>
          <Link to="/EditPost">Change Campsite Info</Link>
        </UI.Button>
        <button onClick={() => this.signOutHandle()}>Sign Out</button>
      </UI.PageContainer>
    );
  }
}

export default WithAuth(Dashboard);
