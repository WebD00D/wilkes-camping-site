import React, { Component } from "react";
import InputField from "../components/InputField";
import firebase from "../datastore";
import { Redirect, Link } from "react-router-dom";
import { WithAuth } from "../contexts/AuthContext";
import { PageContainer, FormBackground, FormStyle } from "../UI";
import * as UI from "../UI";

import AntFooter from "../components/AntFooter";

import { Form, Icon, Input, Button, Checkbox } from "antd";

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const { email, password } = values;
        console.log(this.props);
        this.props.authContext.signInUser(email, password);
      }
    });
  };

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
    const { getFieldDecorator } = this.props.form;
    const { isAuthenticated } = this.props.authContext;

    // = this.props.authContext; Change isAuth... back to this

    if (isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div>
        <UI.FormBackground>
          <UI.FormStyle>
            <h1>Log In</h1>
            <Form onSubmit={this.handleSubmit} className="login-form">
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
                >
                  Log in
                </Button>
                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
                <a href="/Signup">Register Now </a>
              </Form.Item>
            </Form>
          </UI.FormStyle>
        </UI.FormBackground>
        <AntFooter></AntFooter>
      </div>
    );
  }
}

const WrappedLogin = Form.create({ name: "normal_login" })(WithAuth(Login));

// ReactDOM.render(<WrappedLogin />, mountNode);

export default WrappedLogin;

/* <UI.FormBackground>
  <UI.FormStyle>
    <h1>Sign Up</h1>
    <label>name</label>
    <input onChange={e => this.setState({ name: e.target.value })} />
    <label>email</label>
    <input onChange={e => this.setState({ email: e.target.value })} />
    <label>password</label>
    <input
      type="password"
      onChange={e => this.setState({ password: e.target.value })}
    />
    <button onClick={() => this.handleSignup()}>Sign me up</button>
  </UI.FormStyle>
</UI.FormBackground>; */
