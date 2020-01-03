import React, { Component } from "react";
import InputField from "../components/InputField";
import { Redirect, Link } from "react-router-dom";
import { WithAuth } from "../contexts/AuthContext";

import { CHECK_FOR_CURRENT_USER } from "../utils/UserAuth";

import styled from "@emotion/styled";
import {
  PageContainer,
  PageHeader,
  PageBody,
  Button,
  FormStyle,
  FormBackground,
  ProfileStyle
} from "../UI";
import * as UI from "../UI";

import { Form, Icon, Input, Button as AntButton, Upload, Checkbox } from "antd";
import AntFooter from "../components/AntFooter";

class Profile extends Component {
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

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    if (!this.state.isAuthenticated) {
      return <Redirect to="/login" />;
    }

    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        {/* <UI.FormBackground>
          <UI.FormStyle>
            <h1>Profile</h1>
            <div>{this.state.userId}</div>
            <InputField placeholder="First Name" inputType="text" />
            <InputField placeholder="Last Name" inputType="text" />
            <InputField placeholder="Username" inputType="text" />
            display name
            <h1>Social Media</h1>
            <InputField placeholder="Website" inputType="link" />
            <InputField placeholder="Twitter" inputType="link" />
            <InputField placeholder="Facebook" inputType="link" />
            <InputField placeholder="Instagram" inputType="link" />
            <InputField placeholder="Pinterest" inputType="link" />
        <InputField placeholder="LinkedIn" inputType="link" />
            <h1>Profile</h1>
            <InputField placeholder="Bio" inputType="text" />
            <InputField placeholder="I go to..." inputType="text" />
            <InputField placeholder="Rig Type" inputType="text" />
            fix this ^ need selector bar
            <h1>Preferences</h1>
            <button type="radio">Receive Email Udates</button>
            why doesnt this work???
            <button onClick=<Link to="/">Home</Link>> hello </button>
            fix this
            <h1>Change Password</h1>
            <InputField placeholder="Old Password" inputType="password" />
            <InputField placeholder="New Password" inputType="password" />
            is this correct?
          </UI.FormStyle>
        </UI.FormBackground> */}

        <UI.FormBackground>
          <UI.ProfileStyle>
            <h1>Profile</h1>
            <h3>Details</h3>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator("name", {
                  rules: [{ required: true, message: "First Name" }]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="First Name"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("name", {
                  rules: [{ required: true, message: "Last Name" }]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Last Name"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("nickname", {
                  rules: [{ required: false, message: "Nickname" }]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Nickname"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("email", {
                  rules: [{ required: true, message: "Email" }]
                })(
                  <Input
                    prefix={
                      <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Email"
                  />
                )}
              </Form.Item>

              <Form.Item label="Profile Picture">
                {getFieldDecorator("dragger", {
                  valuePropName: "fileList",
                  getValueFromEvent: this.normFile
                })(
                  <Upload.Dragger name="files" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload.
                    </p>
                  </Upload.Dragger>
                )}
              </Form.Item>

              <h3>Description</h3>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [{ required: false, message: "Tagline" }]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="text"
                    placeholder="Tagline"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [{ required: false, message: "I Travel...." }]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="text"
                    placeholder="I travel...Checkbox"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [{ required: true, message: "Type of Rig" }]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="text"
                    placeholder="My Rig is...checkbox"
                  />
                )}
              </Form.Item>

              <h3>Social</h3>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: false, message: "Please input your Password!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="link"
                    placeholder="Facebook"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: false, message: "Please input your Password!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="link"
                    placeholder="Instagram"
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
                    type="link"
                    placeholder="Twitter"
                  />
                )}
              </Form.Item>
              <Form.Item>
                <AntButton
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  {/* <Icon type="save" style={{ color: "white" }} /> */}
                  Save
                </AntButton>
              </Form.Item>
            </Form>
          </UI.ProfileStyle>
        </UI.FormBackground>
        <AntFooter></AntFooter>
      </div>
    );
  }
}

const WrappedProfile = Form.create({ name: "normal_profile" })(
  WithAuth(Profile)
);

export default WrappedProfile;
