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

// import React, { Component } from "react";
// import InputField from "../components/InputField";
// import firebase from "../datastore";
// import { Redirect, Link } from "react-router-dom";

// import { PageContainer, FormBackground, FormStyle } from "../UI";
// import * as UI from "../UI";

// import { Form, Icon, Input, Button, Checkbox } from "antd";

// class Login extends Component {
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log("Received values of form: ", values);
//       }
//     });
//   };

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <UI.FormBackground>
//         <UI.FormStyle>
//           <Form onSubmit={this.handleSubmit} className="login-form">
//             <Form.Item>
//               {getFieldDecorator("username", {
//                 rules: [
//                   { required: true, message: "Please input your username!" }
//                 ]
//               })(
//                 <Input
//                   prefix={
//                     <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
//                   }
//                   placeholder="Username"
//                 />
//               )}
//             </Form.Item>
//             <Form.Item>
//               {getFieldDecorator("password", {
//                 rules: [
//                   { required: true, message: "Please input your Password!" }
//                 ]
//               })(
//                 <Input
//                   prefix={
//                     <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
//                   }
//                   type="password"
//                   placeholder="Password"
//                 />
//               )}
//             </Form.Item>
//             <Form.Item>
//               {getFieldDecorator("remember", {
//                 valuePropName: "checked",
//                 initialValue: true
//               })(<Checkbox>Remember me</Checkbox>)}
//               <a className="login-form-forgot" href="">
//                 Forgot password
//               </a>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 className="login-form-button"
//               >
//                 Log in
//               </Button>
//               <a href="/Signup">Register Now </a>
//             </Form.Item>
//           </Form>
//         </UI.FormStyle>
//       </UI.FormBackground>
//     );
//   }
// }

// const WrappedLogin = Form.create({ name: "normal_login" })(Login);

// // ReactDOM.render(<WrappedLogin />, mountNode);

// export default WrappedLogin;
