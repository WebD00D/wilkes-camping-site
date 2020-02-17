import React, { Component } from "react";
import InputField from "../components/InputField";
import { Redirect, Link } from "react-router-dom";
import { WithAuth } from "../contexts/AuthContext";

import { CHECK_FOR_CURRENT_USER } from "../utils/UserAuth";

// import styled from "@emotion/styled";
// import {
//   PageContainer,
//   PageHeader,
//   PageBody,
//   Button,
//   FormStyle,
//   FormBackground,
//   ProfileStyle
// } from "../UI";
import * as UI from "../UI";

import {
  Form,
  Icon,
  Input,
  Button as AntButton,
  Upload,
  Checkbox,
  Select
} from "antd";
import AntFooter from "../components/AntFooter";
const { Option } = Select;

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
    const { Option } = Select;
    return (
      <div>
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
                      <Icon type="form" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="text"
                    placeholder="Tagline"
                  />
                )}
              </Form.Item>

              <Form.Item label="" hasFeedback>
                {getFieldDecorator("select", {
                  rules: [{ required: false, message: "I Travel" }]
                })(
                  <Select placeholder="I travel">
                    <Option value="full-time">Full Time</Option>
                    <Option value="seasonally">Seasonally</Option>
                    <Option value="weekend">Weekends and Holidays</Option>
                  </Select>
                )}
              </Form.Item>

              <Form.Item label="" hasFeedback>
                {getFieldDecorator("select", {
                  rules: [{ required: false, message: "My Rig" }]
                })(
                  <Select placeholder="My Rig">
                    <Option value="(RV)ClassA">(RV) Class A</Option>
                    <Option value="(RV)ClassB">(RV) Class B</Option>
                    <Option value="(RV)ClassC">(RV) Class C</Option>
                    <Option value="(RV)5thWheel">(RV) Fifth Wheel</Option>
                    <Option value="(RV)Trailer">(RV) Trailer</Option>
                    <Option value="(RV)Skoolie">(RV) Skoolie</Option>
                    <Option value="(RV)PassengerVehicle">
                      (RV) Passenger Vehicle
                    </Option>
                    <Option value="(RV)PopUpTrailer">(RV)Pop-Up Trailer</Option>
                    <Option value="(Tent)Bicycle">(Tent) Bicycle</Option>
                    <Option value="(Tent)Feet">(Tent) Feet</Option>
                    <Option value="(Tent)Motorcycle">(Tent) Motorcycle</Option>
                    <Option value="(Tent)PassengerVehicle">
                      (Tent) Passenger Vehicle
                    </Option>
                  </Select>
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
                      <Icon
                        type="facebook"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
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
                      <Icon
                        type="instagram"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
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
                      <Icon
                        type="twitter"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
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
