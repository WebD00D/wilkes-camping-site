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
  Checkbox,
  Rate,
  Radio
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

    const { Header, Footer, Content } = Layout;
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

  componentDidMount() {}

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

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isAuthenticated } = this.props.authContext;

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <Layout>
        <UI.FormBackground>
          <UI.FormStyle>
            <h1>Add A Campsite</h1>
            <Form onSubmit={this.addCamp} className="login-form">
              <Form.Item>
                {getFieldDecorator("name", {
                  rules: [
                    { required: true, message: "Please input your email!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Campsite Name"
                  />
                )}
              </Form.Item>

              <Form.Item>
                {getFieldDecorator("description", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="form" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="text"
                    placeholder="Description"
                  />
                )}
              </Form.Item>

              <Form.Item label="Rate">
                {getFieldDecorator("rate", {
                  initialValue: 3.5
                })(<Rate />)}
              </Form.Item>

              <Form.Item label="Radio.Group">
                {getFieldDecorator("radio-group")(
                  <Radio.Group>
                    <Radio value="a">- $10</Radio>
                    <Radio value="b">$10-$20</Radio>
                    <Radio value="c">+ $20</Radio>
                  </Radio.Group>
                )}
              </Form.Item>

              <Form.Item>
                {getFieldDecorator("remember", {
                  valuePropName: "checked",
                  initialValue: true
                })(<Checkbox>Remember me</Checkbox>)}
                <AntButton
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Add it!
                </AntButton>
              </Form.Item>
            </Form>
          </UI.FormStyle>
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
