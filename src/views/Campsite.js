import React, { Component } from "react";
import Rating from "../components/Rating";
import { Card } from "antd";

import {
  PageHeader,
  PageBody,
  Button,
  MapContainer,
  CampMapContainer,
  CampsitePageContainer,
  CampViewSection,
  CampTitle,
  CampInfo,
  ImgSection,
  ReviewSection
} from "../UI";
import * as UI from "../UI";
import styled from "@emotion/styled";
import Mapbox from "../components/Mapbox";

export default class Campsite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("this.props", this.props.match.params.campsiteId);
    // we are looking for the campsiteId param.. for which you
    // will use to then query your firebase db..
  }

  render() {
    return (
      <UI.FormBackground id="FormBackground">
        <UI.CampsitePageContainer id="CampsitePageContainer">
          <UI.FlexWrapper>
            {/* Checkout this in the UI styles folder for MQ */}
            <CampViewSection id="CampViewSection">
              <UI.PageHeader>
                <h1>Camp Name</h1>
                <UI.CampTitle>
                  <div id="TitleInfo">
                    <ul>
                      <li>This is a ___ campsite.</li>
                      <li>County, State.</li>
                    </ul>
                  </div>
                  <Rating></Rating>
                </UI.CampTitle>
              </UI.PageHeader>
              <UI.CampInfo>
                <div id="Address">
                  <h2>Address</h2>
                  <li>GPS: 123.56, 78.9</li>
                  <a href="https://www.google.com/maps">Get Directions</a>
                </div>
                <div id="Mgmt">
                  <h2>Management</h2>
                  <li>Public - State Forrest</li>
                  <li>Call (503)337-3258</li>
                </div>
                <div id="Description">
                  <h2>Description</h2>
                  <p>
                    Lenghty Description. Thundercats you probably haven't heard
                    of them umami literally, iceland skateboard artisan swag +1
                    pok pok. Lenghty Description. Thundercats you probably
                    haven't heard of them umami literally, iceland skateboard
                    artisan swag +1 pok pok.
                  </p>
                </div>

                <CampMapContainer id="left">
                  <Mapbox hideLocator />
                </CampMapContainer>

                <div id="Amenities">
                  <h3>Amenities</h3>
                  <ul>
                    <li>Fire Pit</li>
                    <li>Shower</li>
                    <li>Pit Toilets</li>
                    <li>Fun</li>
                    <li>Fun</li>
                    <li>Fun</li>
                    <li>Close to Stores</li>
                  </ul>
                </div>
                <div id="Activities">
                  <h3>Activities</h3>
                  <ul>
                    <li>Wildlife Viewing</li>
                    <li>Hunting</li>
                    <li>OHV</li>
                    <li>Boating</li>
                    <li>Swimming</li>
                    <li>Fishing</li>
                  </ul>
                </div>
              </UI.CampInfo>
              {/* <UI.PageBody id="PAGE_BODY">
            </UI.PageBody> */}
            </CampViewSection>

            <CampViewSection id="right">
              <CampMapContainer>
                <Mapbox hideLocator />
              </CampMapContainer>
              <div id="Update_Info">
                <p>Submitted by ____.</p>
                <p>Last update on ____.</p>
              </div>
            </CampViewSection>
          </UI.FlexWrapper>

          <ImgSection>
            <h2>Images</h2>
            <img
              alt="campsite "
              src="https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2447&q=80"
              id="UserCampImg"
            ></img>
            <img
              alt="campsite "
              src="https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2447&q=80"
              id="UserCampImg"
            ></img>
            <img
              alt="campsite "
              src="https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2447&q=80"
              id="UserCampImg"
            ></img>
            <img
              alt="campsite "
              src="https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2447&q=80"
              id="UserCampImg"
            ></img>
            <img
              alt="campsite "
              src="https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2447&q=80"
              id="UserCampImg"
            ></img>
          </ImgSection>
          <UI.ReviewSection>
            <h2>Reviews</h2>
            <Card
              title="Review Title"
              extra={<a href="#">More</a>}
              style={{ width: 920 }}
            >
              <p>Content</p>
              <p>Content -- needs to be 100%, have img option and stars</p>
              <p>-- possible make seperate component to import</p>
              <p>research limiting characters/size</p>
            </Card>
            <Card
              title="Review Title"
              extra={<a href="#">More</a>}
              style={{ width: 920 }}
            >
              <p>Content</p>
              <p>Content -- needs to be 100%, have img option and stars</p>
              <p>-- possible make seperate component to import</p>
              <p>research limiting characters/size</p>
            </Card>
            <Card
              title="Review Title"
              extra={<a href="#">More</a>}
              style={{ width: 920 }}
            >
              <p>Content</p>
              <p>Content -- needs to be 100%, have img option and stars</p>
              <p>-- possible make seperate component to import</p>
              <p>research limiting characters/size</p>
            </Card>
          </UI.ReviewSection>
        </UI.CampsitePageContainer>
      </UI.FormBackground>
    );
  }
}

// import React, { Component } from "react";
// import InputField from "../components/InputField";
// import firebase from "../datastore";
// import { Redirect, Link } from "react-router-dom";
// import { WithAuth } from "../contexts/AuthContext";
// import { PageContainer, FormBackground, FormStyle } from "../UI";
// import * as UI from "../UI";

// import { Form, Icon, Input, Button, Checkbox } from "antd";
// // import { WithAuth } from "../contexts/AuthContext";

// class Campsite extends Component {
//   constructor(props) {
//     super(props);

//     this.handleChange = this.handleChange.bind(this);
//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log("Received values of form: ", values);
//         const { email, password } = values;
//         console.log(this.props);
//         this.props.authContext.signInUser(email, password);
//       }
//     });
//   };

//   getMeSomeData() {
//     this.getUser().then(user => {
//       // data now has all the user data we want..

//       this.getUsersCampsites(user.id).then(campsites => {
//         // console.log("campsites", campsites);

//         // THIS IS A CODE SNIFF
//         this.doSomething().then(response => {});
//       });
//     });
//   }

//   handleChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     const { isAuthenticated } = this.props.authContext;

//     // = this.props.authContext; Change isAuth... back to this

//     if (isAuthenticated) {
//       return <Redirect to="/dashboard" />;
//     }

//     return (
//       <UI.FormBackground>
//         <UI.FormStyle>
//           <Form onSubmit={this.handleSubmit} className="login-form">
//             <Form.Item>
//               {getFieldDecorator("email", {
//                 rules: [{ required: true, message: "Please input your email!" }]
//               })(
//                 <Input
//                   prefix={
//                     <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
//                   }
//                   placeholder="Email"
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
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 className="login-form-button"
//               >
//                 Log in
//               </Button>
//               <a className="login-form-forgot" href="">
//                 Forgot password
//               </a>
//               <a href="/Signup">Register Now </a>
//             </Form.Item>
//           </Form>
//         </UI.FormStyle>
//       </UI.FormBackground>
//     );
//   }
// }

// const WrappedCampsite = Form.create({ name: "normal_login" })(
//   WithAuth(Campsite)
// );

// // ReactDOM.render(<WrappedLogin />, mountNode);

// export default WrappedCampsite;
