import React, { Component } from "react";
import InputField from "../components/InputField";
import { Redirect } from "react-router-dom";

import { CHECK_FOR_CURRENT_USER } from "../utils/UserAuth";

import styled from "@emotion/styled";
import { PageContainer, PageHeader, PageBody, Button } from "../UI";
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
      <UI.PageContainer>
        <h1>Profile</h1>
        <div>{this.state.userId}</div>
        <InputField labelName="First Name" inputType="text" />
        <InputField labelName="Last Name" inputType="text" />
        <InputField labelName="Username" inputType="text" />
        <InputField labelName="Email" inputType="email" />
        {/* display name */}
        <h1>Social Media</h1>
        <InputField labelName="Website" inputType="link" />
        <InputField labelName="Twitter" inputType="link" />
        <InputField labelName="Facebook" inputType="link" />
        <InputField labelName="Instagram" inputType="link" />
        <InputField labelName="Pinterest" inputType="link" />
        <InputField labelName="LinkedIn" inputType="link" />
        <h1>Profile</h1>
        <InputField labelName="Tagline/Quote" inputType="text" />
        <InputField labelName="I camp/travel" inputType="text" />
        <InputField labelName="Type of Rig" inputType="text" />
        {/* fix this ^ need selector bar */}
        <h1>Preferences</h1>
        <button type="checkbox">Receive Email Udates</button>
        <button type="checkbox">Share Your Travel Map</button>
        <button type="checkbox">Delay Updates to Profile?</button>
        {/* fix this */}
        <h1>Change Password</h1>
        <InputField labelName="New Password" inputType="password" />
        <InputField labelName="Old Password" inputType="password" />
        {/* is this correct? */}
      </UI.PageContainer>
    );
  }
}
