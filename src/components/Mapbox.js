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
import Geocoder from "react-map-gl-geocoder";

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

      activeLat: null,
      activeLong: null,

      viewport: {
        width: "200px",
        height: "100px",
        latitude: 37.785164,
        longitude: -122,
        zoom: 6.5,
        bearing: 0,
        pitch: 0
      },
      showPopup: false,
      resize: false
    };
  }

  mapRef = React.createRef();

  renderDataPoints() {
    return Object.keys(CAMPSITES).map(k => {
      const campsite = CAMPSITES[k];
      return (
        <Marker
          key={`marker-${k}`}
          longitude={campsite.long}
          latitude={campsite.lat}
        >
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              this.setState({
                showPopup: true,
                activeLat: campsite.lat,
                activeLong: campsite.long
              });
            }}
          >
            <CampPin />
          </a>
          {campsite.text}
        </Marker>
      );
    });
  }

  renderPopup() {
    const { showPopup, activeLat, activeLong } = this.state;
    console.log("renderpopup", showPopup);
    if (showPopup) {
      return (
        <Popup
          latitude={activeLat}
          longitude={activeLong}
          closeButton={true}
          closeOnClick={false}
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
    console.log("map box view port", viewport);
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };

  handleViewportChange = viewport => {
    console.log("view port changed", viewport);

    this.setState({
      viewport: {
        ...this.state.viewport,
        latitude: viewport.latitude,
        longitude: viewport.longitude
      }
    });
  };

  // campsitePageSize() {
  //   const { resize } = this.state;

  //   if ((resize = false)) {
  //     return ();
  //   }
  // }

  render() {
    // console.log("campsite markers", this.state.campsites);
    const {
      viewport,
      style,
      showPopup,
      popupInfo,
      fitBoundsOptions
    } = this.state;

    return (
      <MapGL
        ref={this.mapRef}
        {...viewport}
        mapStyle={style}
        onViewportChange={viewport => this._onViewportChange(viewport)}
        mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
        scrollZoom={true}
        doubleClickZoom={true}
        maxZoom={13}
        minZoom={6}
        width={"100%"}
        height={"100%"}
      >
        {this.renderPopup()}
        {this.renderDataPoints()}

        {!this.props.hideLocator && (
          <React.Fragment>
            <GeolocateControl style={geolocateStyle} trackUserLocation={true} />
            <div className="nav" style={navStyle}>
              <NavigationControl />
            </div>
            <Geocoder
              id="MY_GEO_CODER"
              mapRef={this.mapRef}
              onViewportChange={this.handleViewportChange}
              mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
              onZoom={6}
            />
          </React.Fragment>
        )}
      </MapGL>
    );
  }
}
