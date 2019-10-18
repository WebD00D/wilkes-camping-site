import React, { Component } from "react";
import MapGL, {
  Marker,
  GeolocateControl,
  Popup,
  NavigationControl
} from "react-map-gl";
import CampPin from "../UI/CampPin";
import { MAPBOX_ACCESS_TOKEN } from "../constants/index";
import * as UI from "../UI";
import styled from "@emotion/styled";
// import { fromJS } from "immutable"; do i still need this???
import CampInfo from "./CampInfo";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import * as Geocoder from "react-map-gl-geocoder";

const CAMPSITES = [
  { id: 123, lat: 37.78, long: -122.45, text: "1" },
  { id: 456, lat: 38.78, long: -125.45, text: "2" },
  { id: 678, lat: 39.78, long: -121.45, text: "3" }
];

const navStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px"
};

const geolocateStyle = {
  position: "absolute",
  top: 0,
  left: 0,
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
      settings: {
        scrollZoom: true,
        touchZoom: true,
        touchRotate: true,
        keyboard: true,
        doubleClickZoom: true,
        minZoom: 7,
        maxZoom: 12,
        minPitch: 0,
        maxPitch: 85
      },
      showPopup: true
    };
  }

  // mapRef = React.createRef();

  renderDataPoints() {
    return Object.keys(CAMPSITES).map(k => {
      const campsite = CAMPSITES[k];
      return (
        <Marker
          key={`marker-${k}`}
          longitude={campsite.long}
          latitude={campsite.lat}
        >
          {/* how to href without rerendering? */}
          <a onclick={this.renderPopup()}>
            <CampPin />
          </a>
          {campsite.text}
        </Marker>
      );
    });
  }

  renderPopup() {
    const { showPopup } = this.state;
    console.log("renderpopup", showPopup);
    if (showPopup) {
      return (
        <Popup
          latitude={38.78} //link to campsites -- abstract
          longitude={-125.45} //link to campsites -- abstract
          closeButton={true}
          closeOnClick={false} //`campsite/:${campsiteId}`?????
          onClose={() => this.setState({ showPopup: false })}
          anchor="top"
        >
          <div>Camp Info</div>
        </Popup>
      );
    }
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

  _onViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };

  render() {
    // console.log("campsite markers", this.state.campsites);
    const { viewport, style, showPopup, settings, popupInfo } = this.state;

    return (
      <div>
        <MapGL
          // ref={this.mapRef}
          {...viewport}
          mapStyle={style}
          onViewportChange={viewport => this._onViewportChange(viewport)}
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
        >
          {this.renderDataPoints()}
          {/* how only load data points that are in viewport?? */}
          <GeolocateControl
            style={geolocateStyle}
            positionOptions={{
              enableHighAccuracy: false
            }}
            trackUserLocation={true}
            fitBoundsOptions={{ maxZoom: 6 }}
          />
          <div className="nav" style={navStyle}>
            <NavigationControl />
          </div>
          {/* <Geocoder
            mapRef={this.mapRef}
            onViewportChange={this.handleViewportChange}
            mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          /> */}
        </MapGL>
      </div>
    );
  }
}
