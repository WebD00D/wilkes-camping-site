import React, { Component } from "react";
import ReactMapboxGL, { Marker } from "react-map-gl";
import CampPin from "../UI/CampPin";
import { MAPBOX_ACCESS_TOKEN } from "../constants/index";
import * as UI from "../UI";
import styled from "@emotion/styled";
import { fromJS } from "immutable";

export default class Mapbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapStyle: "mapbox://styles/mapbox/outdoors-v10",

      userLocation: [null, null], // this be provided from search, or geo location.
      campsites: [], // array of array's of campsite locations..

      viewport: {
        latitude: 37.785164,
        longitude: -122,
        zoom: 6,
        bearing: 0,
        pitch: 0
      }
    };
  }

  renderDataPoints() {
    const CAMPSITES = [
      { id: 123, lat: 37.78, long: -122.45, text: "1" },
      { id: 456, lat: 38.78, long: -125.45, text: "2" },
      { id: 678, lat: 39.78, long: -121.45, text: "3" }
    ];

    return Object.keys(CAMPSITES).map(k => {
      const campsite = CAMPSITES[k];
      return (
        <Marker
          key={`marker-${k}`}
          longitude={campsite.long}
          latitude={campsite.lat}
        >
          <a href={`/campsite/${campsite.id}`}>
            <CampPin />
          </a>
          {campsite.text}
        </Marker>
      );
    });
  }

  onViewportChange(viewport) {
    this.setState({ viewport });
  }
  _onStyleChange(mapStyle) {
    this.setState({ mapStyle });
  }

  render() {
    // console.log("campsite markers", this.state.campsites);
    const { viewport, mapStyle } = this.state;

    return (
      <div>
        <ReactMapboxGL
          {...viewport}
          mapStyle={mapStyle}
          onViewportChange={this._onViewportChange}
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          width="800px"
          height="600px"
        >
          {this.renderDataPoints()}
        </ReactMapboxGL>
      </div>
    );
  }
}
