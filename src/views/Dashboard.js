import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import firebase from "../datastore";
import { WithAuth } from "../contexts/AuthContext";

import styled from "@emotion/styled";
import * as UI from "../UI";
import {
  Layout,
  Form,
  Icon,
  Input,
  Button as AntButton,
  Rate,
  Radio,
  Upload,
  DatePicker
} from "antd";

// import AntFooter from "../components/AntFooter";

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
      <div>
        <Layout>
          <UI.FormBackground>
            <UI.FormStyle>
              <UI.PageHeader>
                <h1>Dashboard</h1>
                <img src={profilePhoto} />
                <h4>{name}</h4>
              </UI.PageHeader>
              <AntButton type="link">
                <Link to="/Profile">Edit Profile</Link>
              </AntButton>
              <AntButton type="link">
                <Link to="/EditPost">Change Campsite Info</Link>
              </AntButton>
              <AntButton type="primary" onClick={() => this.signOutHandle()}>
                Sign Out
              </AntButton>
            </UI.FormStyle>
          </UI.FormBackground>
        </Layout>
      </div>
    );
  }
}

export default WithAuth(Dashboard);
