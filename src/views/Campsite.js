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
  CampViewSection
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
            Left
          </CampViewSection>
          <CampViewSection>
            <CampMapContainer>
              <Mapbox hideLocator />
            </CampMapContainer>
          </CampViewSection>

          {/* <UI.PageHeader>
            <h1>Camp Name</h1>
            <h3>This is a ___ campsite.</h3>
            <h3>State/County</h3>
            <Rating />
            <div>
              <h2>Address</h2>
              <p>Road St Ave.</p>
              <p>City, State</p>
              <p>GPS: 123.56, 78.9</p>
              <a href="https://www.google.com/maps">Get Directions</a>
    
            </div>
          </UI.PageHeader>  */}

          {/* // <UI.CampMapContainer id="CAMP_CONTAINER">
          //   <Mapbox />
          // </UI.CampMapContainer>

          // <UI.PageBody id="PAGE_BODY">
          //   <h3>Description</h3>
          //   <p>
          //     Lenghty Description. Thundercats you probably haven't heard of
          //     them umami literally, iceland skateboard artisan swag +1 pok pok.
          //   </p>

          //   <div>
          //     <h3>Amenities</h3>
          //     <ul>
          //       <li>Fun Shit</li>
          //       <li>Fun Shit</li>
          //       <li>Fun Shit</li>
          //     </ul>
          //   </div>
          //   <div>
          //     <h3>Activities</h3>
          //     <ul>
          //       <li>Nice Shit</li>
          //       <li>Nice Shit</li>
          //       <li>Nice Shit</li>
          //     </ul>
          //   </div>
          // </UI.PageBody>
          // <div>
          //   <p>Submitted by ____.</p>
          //   <p>Last update on ____.</p>
          // </div> */}
        </UI.CampsitePageContainer>
      
      </UI.FormBackground>
    );
  }
}
