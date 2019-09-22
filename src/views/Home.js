import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import BigButton from "../components/BigButton";

import LittleButton from "../components/LittleButton";

import InputField from "../components/InputField";
import NameDisplay from "../components/NameDisplay";
import GenericButton from "../components/GenericButton";

import { PageContainer, PageHeader, PageBody, Button } from "../UI";
import * as UI from "../UI";
import styled from "@emotion/styled";
import Mapbox from "../components/Mapbox";

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

  alertNumber() {
    alert(2);
  }

  alertText() {
    alert("Some text");
  }

  updateRating(rating) {
    this.setState({
      currentRating: rating
    });
  }

  // Map() {
  //   ReactMapboxGl({
  //     accessToken:
  //       "pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A"
  //   });
  // }

  // mapbox() {
  //   const Map = ReactMapboxGl({
  //     accessToken:
  //       "pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A"
  //   });
  // }

  // mapboxgl.accessToken =
  // `pk.eyJ1IjoiYm9vdGhhdyIsImEiOiJjazA0aTR2a2IwMHc1M21scW5yYWVpenRmIn0.biHPkY42pl9LYR4rXDW1fw`;

  // mapbox() {
  //   let map = new mapboxgl.Map({
  //     container: "camp-map",
  //     style: "mapbox://styles/mapbox/streets-v11"
  //   });
  // }

  render() {
    return (
      <UI.PageContainer>
        <UI.PageHeader>
          <h1>Free Camping</h1>
          <h4>We've Got You Covered</h4>
        </UI.PageHeader>
        <UI.PageBody>
          <p>
            This community based platform is for sharing the best
            free campgrounds and camp sites you have discovered. Whether you
            enjoy tent camping, car camping or RV camping, our goal is to help
            you find the best places to go camping for free or at least very
            cheap.
          </p>

          <p>
            Free campgrounds can be hard to find. We makes it easy. We give you
            a simple, map based search engine to find free and cheap camping
            areas. Community reviews and ratings provide you with up to date
            information and help you select the best camp site for your next
            camping trip.
          </p>
          <p>
            Our focus is on public lands, since you own them and are entitled to
            use them. Forest Service land, BLM (Bureau of Land Management)
            areas, WMA's (Wildlife Management Areas) and county or city parks
            are all great. We are not actively seeking Wal-Marts, truck-stops or
            other parking lots. However, if a member of the community finds one
            of these locations to be useful and creates an entry, we may approve
            the listing.
          </p>
          <p>
            By sharing this information, we spend less time and money and more
            time camping. More contributions equals more fun. Let's get out
            there!
          </p>
        </UI.PageBody>
        <UI.Button>
          <Link to="/NewCampsite">New Campsite</Link>
        </UI.Button>
      </UI.PageContainer>
    );
  }
}

// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

// mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
// var map = new mapboxgl.Map({
// container: 'YOUR_CONTAINER_ELEMENT_ID',
// style: 'mapbox://styles/mapbox/streets-v11'
// });
