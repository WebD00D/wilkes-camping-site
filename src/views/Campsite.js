import React, { Component } from "react";
import Rating from "../components/Rating";
import {
  PageContainer,
  PageHeader,
  PageBody,
  Button,
  MapContainer,
  CampMapContainer,
  CampsitePageContainer,
  CampViewSection,
  CampTitle,
  CampInfo
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
        <UI.CampsitePageContainer>
          <CampViewSection>
            <UI.PageHeader>
              <UI.CampTitle>
                <h1>Camp Name</h1>
                <Rating id="rating"></Rating>
                <h4>This is a ___ campsite.</h4>
                <h4>State/County</h4>
              </UI.CampTitle>
            </UI.PageHeader>
            <UI.CampInfo>
              <div id="Address">
                <h2>Address</h2>
                <p>GPS: 123.56, 78.9</p>
                <a href="https://www.google.com/maps">Get Directions</a>
                <h2>Management</h2>
                <p>Public - State Forrest</p>
                <p>Call (503)337-3258</p>
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

              <div>
                <h3>Amenities</h3>
                <ul>
                  <li>Fun Shit</li>
                  <li>Fun Shit</li>
                  <li>Fun Shit</li>
                </ul>
              </div>
              <div>
                <h3>Activities</h3>
                <ul>
                  <li>Nice Shit</li>
                  <li>Nice Shit</li>
                  <li>Nice Shit</li>
                </ul>
              </div>
            </UI.CampInfo>

            <UI.PageBody id="PAGE_BODY">
              {/* <h3>Description</h3>
              <p>
                Lenghty Description. Thundercats you probably haven't heard of
                them umami literally, iceland skateboard artisan swag +1 pok
                pok.
              </p>

              <div>
                <h3>Amenities</h3>
                <ul>
                  <li>Fun Shit</li>
                  <li>Fun Shit</li>
                  <li>Fun Shit</li>
                </ul>
              </div>
              <div>
                <h3>Activities</h3>
                <ul>
                  <li>Nice Shit</li>
                  <li>Nice Shit</li>
                  <li>Nice Shit</li>
                </ul>
              </div> */}
            </UI.PageBody>
          </CampViewSection>
          <CampViewSection>
            <CampMapContainer>
              <Mapbox hideLocator />
            </CampMapContainer>
            <div>
              <p>Submitted by ____.</p>
              <p>Last update on ____.</p>
            </div>
          </CampViewSection>
        </UI.CampsitePageContainer>
      </UI.FormBackground>
    );
  }
}
