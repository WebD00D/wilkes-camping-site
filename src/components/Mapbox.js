import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import { MAPBOX_ACCESS_TOKEN } from '../constants/index';

import styled from '@emotion/styled'

const Mark = styled.div`
  background-color: red;
  height: 40px;
  width: 40px;
  border-radius: 50px;
`

const Map = ReactMapboxGl({
  accessToken: MAPBOX_ACCESS_TOKEN
});

export default class Mapbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: '500px',
            width: '500px'
          }}
        >
          <Layer
            type="symbol"
            id="marker"
            layout={{ 'icon-image': 'marker-15' }}
          >
            {/* <Feature coordinates={[-0.481747846041145, 51.3233379650232]} /> */}

            <Marker coordinates={[37.5247764,-77.5633018]} anchor="bottom">
              <Mark />
            </Marker>
          </Layer>
        </Map>
      </div>
    );
  }
}
