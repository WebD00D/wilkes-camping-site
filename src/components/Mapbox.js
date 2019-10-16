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
      popupInfo: null
    };
  }

  mapRef = React.createRef();

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
  // _onViewportChange(viewport) {
  //   this.setState({
  //     viewport: { ...this.state.viewport, ...viewport }
  //   });
  // }

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

  // geoZoom() {
  //   const { viewport } = this.state;

  //   this.setState({ viewport: this.zoom(4) });
  // }

  // handleOnResult = event => {
  //   console.log(event.result);
  //   this.setState({
  //     searchResultLayer: new GeoJsonLayer({
  //       id: "search-result",
  //       data: event.result.geometry,
  //       getFillColor: [255, 0, 0, 128],
  //       getRadius: 1000,
  //       pointRadiusMinPixels: 10,
  //       pointRadiusMaxPixels: 10
  //     })
  //   });
  // };

  _onViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };

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
    const { viewport, style, settings } = this.state;

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
          {this._renderPopup()}

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
// onViewportChange={this._onViewportChange}
