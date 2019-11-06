import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { WithAuth } from "../contexts/AuthContext";

import InputField from "../components/InputField";
import firebase from "../datastore";

import { VALIDATE_FIELDS } from "../utils/index";

import {
  PageContainer,
  PageHeader,
  PageBody,
  Button,
  FormBackground,
  FormStyle
} from "../UI";
import * as UI from "../UI";
import styled from "@emotion/styled";

class Login extends Component {
  constructor(props) {
    super(props);

    // this.signInUser = this.signInUser.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      user: {},
      isAuthenticated: false,
      email: "",
      password: ""
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

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { isAuthenticated } = this.props.authContext;

    if (isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <UI.FormBackground>
        <UI.FormStyle>
          <h1>Log In</h1>
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
          <button
            onClick={() =>
              this.props.authContext.signInUser(
                this.state.email,
                this.state.password
              )
            }
          >
            Sign In
          </button>
        </UI.FormStyle>
      </UI.FormBackground>
    );
  }
}

export default WithAuth(Login);
