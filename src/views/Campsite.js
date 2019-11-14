import React, { Component } from "react";
import Rating from "../components/Rating";
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
  ImgSection
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
      <UI.FormBackground>
        <UI.CampsitePageContainer id="CampsitePageContainer">
          <CampViewSection>
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
                  Lenghty Description. Thundercats you probably haven't heard of
                  them umami literally, iceland skateboard artisan swag +1 pok
                  pok. Lenghty Description. Thundercats you probably haven't
                  heard of them umami literally, iceland skateboard artisan swag
                  +1 pok pok.
                </p>
              </div>

              <CampMapContainer id="Mobile">
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
          <CampViewSection id="Desktop">
            <CampMapContainer id="Desktop">
              <Mapbox hideLocator />
            </CampMapContainer>
            <div id="Update_Info" id="Desktop">
              <p>Submitted by ____.</p>
              <p>Last update on ____.</p>
            </div>
          </CampViewSection>
          {/* <ImgSection>
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
          </ImgSection> */}
        </UI.CampsitePageContainer>
      </UI.FormBackground>
    );
  }
}
