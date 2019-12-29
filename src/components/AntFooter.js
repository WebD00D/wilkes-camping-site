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
          <Footer style={{ position: "sticky", bottom: "0" }}>Footer</Footer>
        </Layout>
      </UI.AntFooterStyle>
    );
  }
}
