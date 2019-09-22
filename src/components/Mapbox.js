import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature } from "mapbox-gl/dist/mapbox-gl.js";

export default class Mapbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
  mapboxgl.accessToken = 'pk.eyJ1IjoiYm9vdGhhdyIsImEiOiJjazA0aHh0bHowMGt0M2NteDl5dTRzbWUwIn0.gW2S6ibbZgo9WPtk27SYYQ';
  var map = new mapboxgl.Map({
container: 'YOUR_CONTAINER_ELEMENT_ID',
style: 'mapbox://styles/mapbox/streets-v11'
});

  // Map() {
  //   ReactMapboxGl({
  //     accessToken:
  //       "pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A"
  //   });
  // }

  // < Map
  //   style="mapbox://styles/mapbox/streets-v9"
  //   containerStyle={{
  //     height: "100vh",
  //     width: "100vw"
  //   }}
  // >
  //   <Layer
  //     type="symbol"
  //     id="marker"
  //     layout={{ "icon-image": "marker-15" }}
  //   >
  //     <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
  //   </Layer>
  // </Map>

  render() {
    return (
      <div>
        <ReactMapboxGl>marker here</ReactMapboxGl>
      </div>
    );
  }
}
