import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import HideDesktop from "../utils/HideDesktop";

// import BigButton from "../components/BigButton";

// import LittleButton from "../components/LittleButton";

// import InputField from "../components/InputField";
// import NameDisplay from "../components/NameDisplay";
// import GenericButton from "../components/GenericButton";
// import Geosuggest from "react-geosuggest";

import {
  PageContainer,
  PageHeader,
  PageBody,
  Button,
  MapContainer
} from "../UI";
import * as UI from "../UI";
import styled from "@emotion/styled";
import Mapbox from "../components/Mapbox";
import Hook from "../components/Hook";
import {
  Icon,
  Alert,
  Collapse,
  PageHeader as AntPageHeader,
  Button as AntButton
} from "antd";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Bob"
    };
  }

  clearName() {
    this.setState({
      name: null
    });
  }

  renderAboutContent() {
    return (
      <>
        <p>
          This community based platform is for sharing the best free campgrounds
          and camp sites you have discovered. Whether you enjoy tent camping,
          car camping or RV camping, our goal is to help you find the best
          places to go camping for free or at least very cheap.
        </p>
        <p>
          Free campgrounds can be hard to find. We makes it easy. We give you a
          simple, map based search engine to find free and cheap camping areas.
          Community reviews and ratings provide you with up to date information
          and help you select the best camp site for your next camping trip.
        </p>
        <p>
          Our focus is on public lands, since you own them and are entitled to
          use them. Forest Service land, BLM (Bureau of Land Management) areas,
          WMA's (Wildlife Management Areas) and county or city parks are all
          great. We are not actively seeking Wal-Marts, truck-stops or other
          parking lots. However, if a member of the community finds one of these
          locations to be useful and creates an entry, we may approve the
          listing.
        </p>
        <p>
          By sharing this information, we spend less time and money and more
          time camping. More contributions equals more fun. Let's get out there!
        </p>
      </>
    );
  }

  render() {
    const { Panel } = Collapse;
    return (
      <UI.PageContainer>
        <UI.PageHeader>
          <h1>Free Camping</h1>
          <h4>We've Got You Covered</h4>
          {/* <Alert
            showIcon
            message="Hello, you need to sign up to view more."
            type="warning"
          /> */}
        </UI.PageHeader>
        {/* <Hook /> */}
        <UI.PageBody>
          <HideDesktop>
            <Collapse accordion>
              <Panel header="About Us" key="1" id="HomeCollapse">
                {this.renderAboutContent()}
              </Panel>
            </Collapse>
          </HideDesktop>

          {/* how to get this stuff to show up in tablet and mobile  */}

          {this.renderAboutContent()}
          <UI.MapContainer id="mapbox-container">
            <Mapbox />
          </UI.MapContainer>
        </UI.PageBody>

        {/* <UI.Button>
          <AntButton type="primary">Primary</AntButton>
          <Link to="/NewCampsite">New Campsite</Link>
        </UI.Button> */}
        <AntButton href="/NewCampsite" type="primary">
          New Campsite
        </AntButton>
        {/* <AntPageHeader>
          <p>contact</p>
          <p>contact</p>
        </AntPageHeader> */}
      </UI.PageContainer>
    );
  }
}
