import React, { Component } from "react";
import ReactMapboxGL, {
  Marker,
  GeolocateControl,
  Popup,
  FullscreenControl,
  NavigationControl
} from "react-map-gl";
import CampPin from "../UI/CampPin";
import { MAPBOX_ACCESS_TOKEN } from "../constants/index";
import * as UI from "../UI";
import styled from "@emotion/styled";
// import { fromJS } from "immutable"; do i still need this???
import CampInfo from "./CampInfo";

const CAMPSITES = [
  { id: 123, lat: 37.78, long: -122.45, text: "1" },
  { id: 456, lat: 38.78, long: -125.45, text: "2" },
  { id: 678, lat: 39.78, long: -121.45, text: "3" }
];

const fullscreenControlStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

const navStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px"
};

const geolocateStyle = {
  position: "absolute",
  top: 0,
  left: 750,
  margin: 10
};

export default class Mapbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: [null, null], // this be provided from search, or geo location.
      campsites: [], // array of array's of campsite locations..

      style: "mapbox://styles/mapbox/outdoors-v10",

      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: 37.785164,
        longitude: -122,
        zoom: 6.5,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null
    };
  }

  renderDataPoints() {
    // const CAMPSITES = [
    //   { id: 123, lat: 37.78, long: -122.45, text: "1" },
    //   { id: 456, lat: 38.78, long: -125.45, text: "2" },
    //   { id: 678, lat: 39.78, long: -121.45, text: "3" }
    // ];

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
  _onViewportChange(viewport) {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
  }

  _resize = () => {
    this._onViewportChange({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  _onStyleChange(mapStyle) {
    this.setState({ mapStyle });
  }

  _renderPopup() {
    const { popupInfo, CAMPSITES } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.long}
          latitude={popupInfo.lat}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CampInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    // console.log("campsite markers", this.state.campsites);
    const { viewport, style } = this.state;

    return (
      <div>
        <ReactMapboxGL
          {...viewport}
          mapStyle={style}
          onViewportChange={viewport => this._onViewportChange(viewport)}
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
        >
          {this.renderDataPoints()}
          <GeolocateControl
            style={geolocateStyle}
            positionOptions={{ enableHighAccuracy: false }}
            trackUserLocation={true}
          />

          {this._renderPopup()}

          <div className="fullscreen" style={fullscreenControlStyle}>
            <FullscreenControl />
          </div>
          <div className="nav" style={navStyle}>
            <NavigationControl />
          </div>
        </ReactMapboxGL>
      </div>
    );
  }
}
// onViewportChange={this._onViewportChange}
