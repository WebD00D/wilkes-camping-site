import React, { Component } from "react";
import InputField from "../components/InputField";
import firebase from "../datastore";
import { Redirect, Link } from "react-router-dom";
import { WithAuth } from "../contexts/AuthContext";

import AntFooter from "../components/AntFooter";

import {
  PageContainer,
  PageHeader,
  PageBody,
  // Button,
  FormBackground,
  FormStyle
} from "../UI";
import * as UI from "../UI";
import styled from "@emotion/styled";

import { Form, Icon, Input, Button, Checkbox } from "antd";

import { VALIDATE_FIELDS } from "../utils/index";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.getUsers = this.getUsers.bind(this);
    this.addUser = this.addUser.bind(this);
    this.renderUser = this.renderUser.bind(this);
    this.handleSignup = this.handleSignup.bind(this);

    this.state = {
      isAuthenticated: false,
      name: null,
      email: null,
      password: null,
      users: [],
      age: ""
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    firebase
      .database()
      .ref("/users")
      .once("value")
      .then(snapshot => {
        // console.log('user', snapshot.val());
        this.setState({
          users: snapshot.val()
        });
      });
  }

  renderUser() {
    const { users } = this.state;
    console.log("users", users);

    let userEls;

    userEls =
      users &&
      Object.keys(users).map(c => {
        const user = users[c];
        console.log("SINGLE USER", user);

        return (
          <div key={c}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        );
      });

    console.log("user els", userEls);

    return userEls;
  }

  addUser() {
    const { name, email } = this.state;

    const updates = {};

    const uniqueId = Date.now();
    updates[`/users/${uniqueId}/name`] = name;
    updates[`/users/${uniqueId}/email`] = email;

    firebase
      .database()
      .ref()
      .update(updates)
      .then(() => {
        this.getUsers();
      });
  }

  handleSignup() {
    const { email, password, name } = this.state;

    //TODO: VAlidate form fields aka check for empties
    const validatedFields = VALIDATE_FIELDS([
      { email: email },
      { password: password },
      { name: name },
      { age: -1 }
    ]);

    this.setState({ isAuthenticated: true });
    // console.log("validated fields", validatedFields);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(u => {
        console.log("the new user!", u.user.uid);

        const userUpdates = {};
        userUpdates[`users/${u.user.uid}/name`] = name;
        userUpdates[`users/${u.user.uid}/email`] = email;

        firebase
          .database()
          .ref()
          .update(userUpdates)
          .then(() => {
            this.getUsers();
          });
      })
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        // ..
      });
    console.log("new state email", this.state.email);
    console.log("auth context props", this.state.isAuthenticated);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isAuthenticated } = this.state;

    if (isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div>
        <UI.FormBackground>
          <UI.FormStyle>
            <h1>Register</h1>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator("name", {
                  rules: [
                    { required: true, message: "Please input your name!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Name"
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("email", {
                  rules: [
                    { required: true, message: "Please input your email!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Email"
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("remember", {
                  valuePropName: "checked",
                  initialValue: true
                })(<Checkbox>Remember me</Checkbox>)}
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={() => this.handleSignup()}
                >
                  Register Now
                </Button>
              </Form.Item>
            </Form>
          </UI.FormStyle>
        </UI.FormBackground>
        <AntFooter></AntFooter>
      </div>
    );
  }
}

const WrappedSignup = Form.create({ name: "normal_signup" })(WithAuth(Signup));

export default WrappedSignup;
