import React, { Component } from "react";
import ReactMapboxGL from "react-map-gl";
import { MAPBOX_ACCESS_TOKEN } from "../constants/index";
import * as UI from "../UI";
import styled from "@emotion/styled";
import { fromJS } from "immutable";

// const Mark = styled.div`
//   background-color: red;
//   height: 40px;
//   width: 40px;
//   border-radius: 50px;
// `;

// const mapStyle = fromJS({
//   version: 8,
//   sources: {
//     points: {
//       type: "geojson",
//       data: {
//         type: "FeatureCollection",
//         features: [
//           {
//             type: "Feature",
//             geometry: { type: "Point", coordinates: [-122.45, 37.78] }
//           }
//         ]
//       }
//     }
//   },
//   layers: [
//     {
//       id: "my-layer",
//       type: "circle",
//       source: "points",
//       paint: {
//         "circle-color": "#f00",
//         "circle-radius": 40
//       }
//     }
//   ]
// });

export default class Mapbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: [null, null], // this be provided from search, or geo location.
      campsites: [], // array of array's of campsite locations..

      viewport: {
        width: "800px",
        height: "600px",
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      }
    };
  }

  // renderCampsiteMarkers() {
  //   const { campsites } = this.state;
  //   const campsiteMarkers = Object.keys(campsites).map(k => {
  //     const campsite = campsites[k];
  //     return (
  //       <Marker
  //         coordinates={[campsite.latitude, campsite.longitude]}
  //         anchor="bottom"
  //       >
  //         <Mark />
  //       </Marker>
  //     );
  //   });

  //   return campsiteMarkers;
  // }

  render() {
    return (
      <div>
        <ReactMapboxGL
          mapStyle={"mapbox://styles/mapbox/outdoors-v10"}
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
        />
      </div>
    );
  }
}
