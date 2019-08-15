import React, { Component } from "react";
import InputField from "../components/InputField";
import { Redirect, Link } from "react-router-dom";

import { CHECK_FOR_CURRENT_USER } from "../utils/UserAuth";

import styled from "@emotion/styled";
import {
  PageContainer,
  PageHeader,
  PageBody,
  Button,
  FormStyle,
  FormBackground
} from "../UI";
import * as UI from "../UI";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
      userId: null,
      profilePhoto: null,
      email: null
    };
  }

  componentDidMount() {
    const { userId, profilePhoto, email } = CHECK_FOR_CURRENT_USER();

    this.setState({
      userId,
      profilePhoto,
      email,
      isAuthenticated: userId ? true : false // using ternary
    });
  }

  render() {
    if (!this.state.isAuthenticated) {
      return <Redirect to="/login" />;
    }
    return (
      <UI.FormBackground>
        <UI.FormStyle>
          <h1>Profile</h1>
          {/* <div>{this.state.userId}</div> */}
          <InputField placeholder="First Name" inputType="text" />
          <InputField placeholder="Last Name" inputType="text" />
          <InputField placeholder="Username" inputType="text" />
          {/* display name */}
          <h1>Social Media</h1>
          <InputField placeholder="Website" inputType="link" />
          <InputField placeholder="Twitter" inputType="link" />
          <InputField placeholder="Facebook" inputType="link" />
          <InputField placeholder="Instagram" inputType="link" />
          {/* <InputField placeholder="Pinterest" inputType="link" />
        <InputField placeholder="LinkedIn" inputType="link" /> */}
          <h1>Profile</h1>
          <InputField placeholder="Bio" inputType="text" />
          <InputField placeholder="I go to..." inputType="text" />
          <InputField placeholder="Rig Type" inputType="text" />
          {/* fix this ^ need selector bar */}
          <h1>Preferences</h1>
          <button type="checkbox">Receive Email Udates</button>
          <button type="checkbox">Share Your Travel Map</button>
          <button type="checkbox">Delay Updates to Profile?</button>
          {/* <button onClick=<Link to="/">Home</Link>> hello </button> */}
          {/* fix this */}
          <h1>Change Password</h1>
          <InputField placeholder="Old Password" inputType="password" />
          <InputField placeholder="New Password" inputType="password" />
          {/* is this correct? */}
        </UI.FormStyle>
      </UI.FormBackground>
    );
  }
}
