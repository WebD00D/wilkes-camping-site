import React, { Component } from "react";
import InputField from "../components/InputField";
import firebase from "../datastore";
import { Redirect, Link } from "react-router-dom";

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

import { VALIDATE_FIELDS, SAY_MY_NAME } from "../utils/index";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.getUsers = this.getUsers.bind(this);
    this.addUser = this.addUser.bind(this);
    this.renderUser = this.renderUser.bind(this);
    this.handleSignup = this.handleSignup.bind(this);

    this.state = {
      authenticated: false,
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
            <p>{user.age}</p>
          </div>
        );
      });

    console.log("user els", userEls);

    return userEls;
  }

  addUser() {
    const { name, age } = this.state;

    const updates = {};

    const uniqueId = Date.now();
    updates[`/users/${uniqueId}/name`] = name;
    updates[`/users/${uniqueId}/age`] = age;

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

    // TODO: VAlidate form fields aka check for empties
    const validatedFields = VALIDATE_FIELDS([
      { email: email },
      { password: password },
      { name: name },
      { age: -1 }
    ]);

    this.setState({ authenticated: true });
    console.log("validated fields", validatedFields);

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
  }

  render() {
    return (
      <UI.FormBackground>
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
      </UI.FormBackground>
    );
  }
}

// import { PageContainer, FormBackground, FormStyle } from "../UI";
// import * as UI from "../UI";

// import { Form, Icon, Input, Button, Checkbox } from "antd";
// // import { UI } from "winjs";

// class Signup extends Component {
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
//               <a href="http://www.facebook.com">Register Now </a>
//             </Form.Item>
//           </Form>
//         </UI.FormStyle>
//       </UI.FormBackground>
//     );
//   }
// }

// const WrappedSignup = Form.create({ name: "normal_login" })(Signup);

// // ReactDOM.render(<WrappedSignup />, mountNode);

// export default WrappedSignup;
