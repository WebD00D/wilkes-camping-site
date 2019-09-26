import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import { MAPBOX_ACCESS_TOKEN } from "../constants/index";

import styled from "@emotion/styled";

const Mark = styled.div`
  background-color: red;
  height: 40px;
  width: 40px;
  border-radius: 50px;
`;

const Map = ReactMapboxGl({
  accessToken: MAPBOX_ACCESS_TOKEN
});

export default class Mapbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: [null, null], // this be provided from search, or geo location.
      campsites: [] // array of array's of campsite locations..
    };
  }

  renderCampsiteMarkers() {
    const { campsites } = this.state;
    const campsiteMarkers = Object.keys(campsites).map(k => {
      const campsite = campsites[k];
      return (
        <Marker
          coordinates={[campsite.latitude, campsite.longitude]}
          anchor="bottom"
        >
          <Mark />
        </Marker>
      );
    });

    return campsiteMarkers;
  }

  render() {
    return (
      <div>
        <Map
          center={[-122.4194, 37.7749]}
          zoom={[6]}
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            width: "900px",
            height: "500px",
            position: "center"
          }}
        >
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          >
            <Feature coordinates={[-121.4194, 37.7749]} />

            {this.renderCampsiteMarkers()}
          </Layer>
        </Map>
      </div>
    );
  }
}
