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
//import { AntFooterStyle } from "../UI";

export default class AntFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: "Bob"
    };
  }

  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <UI.AntFooterStyle>
        <Layout>
          <Footer style={{ position: "sticky", bottom: "0" }}>
            <Link to="/Home">Home</Link>
            <li>Contact</li>
            <li>Legal</li>
          </Footer>
        </Layout>
      </UI.AntFooterStyle>
    );
  }
}
