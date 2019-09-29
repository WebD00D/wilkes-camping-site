import React, { Component } from 'react';
import ReactMapboxGL, { Marker } from 'react-map-gl';
import { MAPBOX_ACCESS_TOKEN } from '../constants/index';
import * as UI from '../UI';
import styled from '@emotion/styled';
import { fromJS } from 'immutable';

const Mark = styled.div`
  background-color: red;
  height: 40px;
  width: 40px;
  border-radius: 50px;
`;

const mapStyle = fromJS({
  version: 8,
  sources: {
    points: {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [-122.45, 37.78] }
          }
        ]
      }
    }
  },
  layers: [
    {
      id: 'my-layer',
      type: 'circle',
      source: 'points',
      paint: {
        'circle-color': '#f00',
        'circle-radius': 40
      }
    }
  ]
});

export default class Mapbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: [null, null], // this be provided from search, or geo location.
      campsites: [], // array of array's of campsite locations..

      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0
      }
    };
  }



  renderDataPoints() {
    const CAMPSITES = [
      { id: 123, lat: 37.78, long: -122.45, text: '1' },
      { id: 456, lat: 38.78, long: -125.45,  text: '2' },
      { id: 678, lat: 39.78, long: -121.45, text: '3' }
    ];

    return Object.keys(CAMPSITES).map(k => {
    
      const campsite = CAMPSITES[k]
      return (
        <Marker
          key={`marker-${k}`}
          longitude={campsite.long}
          latitude={campsite.lat}
        >
          <a href={`/campsite/${campsite.id}`}><Mark /></a>
          {campsite.text}
        </Marker>
      );
    });
  }

  render() {
    console.log('campsite markers', this.state.campsites);

    const sources = {
      points: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: { type: 'Point', coordinates: [-122.45, 37.78] }
            }
          ]
        }
      }
    };

    return (
      <div>
        <ReactMapboxGL
          {...this.state.viewport}
          sources={sources}
          mapStyle={'mapbox://styles/mapbox/outdoors-v10'}
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          width="800px"
          height="600px"
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {this.renderDataPoints()}
        </ReactMapboxGL>
      </div>
    );
  }
}
