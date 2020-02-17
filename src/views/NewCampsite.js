import React, { Component } from "react";
import InputField from "../components/InputField";
import GenericButton from "../components/GenericButton";
import { Redirect, Link } from "react-router-dom";

import { WithAuth } from "../contexts/AuthContext";

import { GENERATE_ID } from "../utils/index";
import firebase from "../datastore";

import { PageContainer, PageHeader, PageBody, Button } from "../UI";
import * as UI from "../UI";
import styled from "@emotion/styled";

import AntFooter from "../components/AntFooter";

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

class NewCampsite extends Component {
  constructor(props) {
    super(props);

    this.getCamp = this.getCamp.bind(this);

    this.state = {
      campsites: null,
      campName: null,
      numberOfSpots: null,
      state: null
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

  componentDidMount() {
    console.log("NEW CAMPSITE MOUNTED");
  }

  getCamp() {
    firebase
      .database()
      .ref("/campsites")
      .once("value")
      .then(snapshot => {
        console.log("campsites", snapshot.val());
        this.setState({
          campsites: snapshot.val()
        });
      });
  }

  addCamp() {
    const { campName, state, numberOfSpots, userId } = this.state;

    const newId = GENERATE_ID();

    const updates = {};
    updates[`/campsites/${newId}/name`] = campName;
    updates[`/campsites/${newId}/state`] = state;
    updates[`/campsites/${newId}/spotCount`] = numberOfSpots;
    updates[`/campsites/${newId}/associatedUserId`] = userId;

    updates[`/users/${userId}/campsites/${newId}/name`] = campName;
    updates[`/users/${userId}/campsites/${newId}/campsiteId`] = newId;

    firebase
      .database()
      .ref()
      .update(updates)
      .then(() => {
        // this.getCamp();
      });
  }

  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isAuthenticated } = this.props.authContext;
    const { TextArea } = Input;
    const { RangePicker } = DatePicker;

    const { value } = this.state;

    console.log("NEW CAMPSITE", isAuthenticated);
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <Layout>
        <UI.FormBackground>
          <UI.AddCampsite>
            <h1>Add A Campsite</h1>
            <Form onSubmit={this.addCamp} className="login-form">
              <Form.Item>
                {getFieldDecorator("name", {
                  rules: [{ required: true, message: "Please input a name" }]
                })(
                  <Input
                    prefix={
                      <Icon
                        type="pushpin"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    placeholder="Campsite Name"
                  />
                )}
                {getFieldDecorator("description", {
                  rules: [
                    { required: true, message: "Please input a description" }
                  ]
                })(
                  <TextArea
                    value={value}
                    onChange={this.onChange}
                    placeholder="Controlled autosize"
                    autoSize={{ minRows: 5, maxRows: 8 }}
                    style={{ height: 75 }}
                  />
                )}
              </Form.Item>

              <Form.Item label="Rate">
                {getFieldDecorator("rate", {
                  initialValue: 3.5,
                  rules: [{ required: true, message: "Please input a rating" }]
                })(<Rate />)}
              </Form.Item>

              <Form.Item label="Radio.Group">
                {getFieldDecorator("radio-group", {
                  rules: [{ required: true, message: "Please input a price" }]
                })(
                  <Radio.Group>
                    <Radio value="a">- $10</Radio>
                    <Radio value="b">$10-$20</Radio>
                    <Radio value="c">+ $20</Radio>
                  </Radio.Group>
                )}
              </Form.Item>

              <Form.Item label="Ownership?">
                {getFieldDecorator("radio-group", {
                  rules: [
                    { required: true, message: "Please input the ownership" }
                  ]
                })(
                  <Radio.Group>
                    <Radio value="a">Private</Radio>
                    <Radio value="b">Public</Radio>
                  </Radio.Group>
                )}
              </Form.Item>

              <Form.Item label="Officialy Approved?">
                {getFieldDecorator("radio-group", {
                  rules: [
                    { required: true, message: "Please input the approval" }
                  ]
                })(
                  <Radio.Group>
                    <Radio value="a">Yes</Radio>
                    <Radio value="b">No</Radio>
                  </Radio.Group>
                )}
              </Form.Item>

              <Form.Item label="Pictues">
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

              <h3>Details</h3>
              <h5>Optional</h5>

              <Form.Item>
                {getFieldDecorator("name", {
                  rules: [{ required: false }]
                })(
                  <Input
                    prefix={
                      <Icon
                        type="pushpin"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    placeholder="Maximum Allowed Stay"
                  />
                )}
                {getFieldDecorator("name", {
                  rules: [{ required: false }]
                })(
                  <Input
                    prefix={
                      <Icon
                        type="pushpin"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    placeholder="Estimated Dates Open"
                  />
                )}
              </Form.Item>

              <Form.Item label="How Many Campsites?">
                {getFieldDecorator("radio-group")(
                  <Radio.Group>
                    <Radio value="a">1-5</Radio>
                    <Radio value="b">5-10</Radio>
                    <Radio value="b">10-20</Radio>
                    <Radio value="b">20+</Radio>
                  </Radio.Group>
                )}
              </Form.Item>

              <Form.Item label="Maximum RV Length?">
                {getFieldDecorator("radio-group")(
                  <Radio.Group>
                    <Radio value="a">15 feet</Radio>
                    <Radio value="b">25 feet</Radio>
                    <Radio value="b">35 feet</Radio>
                    <Radio value="b">45 feet</Radio>
                    <Radio value="b">Unlimited</Radio>
                  </Radio.Group>
                )}
              </Form.Item>

              <Form.Item label="Road Type?">
                {getFieldDecorator("radio-group")(
                  <Radio.Group>
                    <Radio value="a">Paved</Radio>
                    <Radio value="b">Gravel</Radio>
                    <Radio value="b">Dirt</Radio>
                    <Radio value="b">4x4</Radio>
                  </Radio.Group>
                )}
              </Form.Item>

              <h3>Contact Information</h3>
              <h5>Optional</h5>

              <Form.Item>
                {getFieldDecorator("name", {
                  rules: [
                    { required: false, message: "Please input your email!" }
                  ]
                })(
                  <>
                    <Input
                      prefix={
                        <Icon
                          type="pushpin"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Name"
                    />
                    <Input
                      prefix={
                        <Icon
                          type="pushpin"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Street Address"
                    />
                    <Input
                      prefix={
                        <Icon
                          type="pushpin"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Phone"
                    />
                    <Input
                      prefix={
                        <Icon
                          type="pushpin"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Email"
                    />
                  </>
                )}
              </Form.Item>

              <Form.Item>
                <AntButton
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Add it!
                </AntButton>
              </Form.Item>
            </Form>
          </UI.AddCampsite>
        </UI.FormBackground>
        <AntFooter></AntFooter>
      </Layout>
    );
  }
}

const WrappedNewCampsite = Form.create({ name: "new_campsite" })(
  WithAuth(NewCampsite)
);

// ReactDOM.render(<WrappedLogin />, mountNode);

export default WrappedNewCampsite;

// "</UI.PageHeader>
//         <div>{this.state.userId}</div>
//         {/* {getProfilePhoto()} */}
//         <InputField
//           setValue={val => this.setState({ campName: val })}
//           labelName="Campsite Name"
//           inputType="text"
//         />
//         <InputField
//           setValue={val => this.setState({ numberOfSpots: val })}
//           labelName="Number of Spots"
//           inputType="text"
//         />
//         <InputField
//           setValue={val => this.setState({ state: val })}
//           labelName="State"
//           inputType="text"
//         />

//         {/* <h2>Star Rating</h2>
//       <button>1</button>
//       <button>2</button>
//       <button>3</button>
//       <button>4</button>
//       <button>5</button>
//       <h2>Campsite Cost</h2>
//       <GenericButton buttonName="Free?" />
//       <GenericButton buttonName="Pay ($12 or less)" />
//       <GenericButton buttonName="Permit Required" />
//       <h2>Public or Private?</h2>
//       <GenericButton buttonName="Private" />
//       <GenericButton buttonName="Public" />
//       <h2>Officially Approved?</h2>
//       <GenericButton buttonName="Yes" />
//       <GenericButton buttonName="No" /> */}

//         <label>Finished?</label>
//         <button onClick={() => this.addCamp()}>Publish this Camp!</button>

//         {/* <h3>{this.state.campsites}</h3> */}"
