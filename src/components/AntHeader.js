import React, { Component } from "react";
import styled from "@emotion/styled";
import {
  Icon,
  Alert,
  Collapse,
  PageHeader as AntPageHeader,
  Button as AntButton,
  Layout
} from "antd";
import { Redirect, Link } from "react-router-dom";

import * as UI from "../UI";

export default class AntHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { Header } = Layout;
    {
      console.log("header comp loaded");
    }
    return (
      <UI.AntHeaderStyle>
        {/* <Layout>
          <Header> */}
        {/* <UI.NavBar>
          <div className="App">
            <ul>
              <Icon type="menu" className="mobile" />
              <li className="NavLeft">
                <Link to="/">Home</Link>
              </li>
              <li className="NavLeft">
                <Link to="/campsite">Campsite</Link>
              </li>
              <li className="NavRight">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="NavRight">
                <Link to="/login">Log In</Link>
              </li>
              <li className="NavRight">
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </UI.NavBar> */}
        {/* </Header>
        </Layout> */}
      </UI.AntHeaderStyle>
    );
  }
}
