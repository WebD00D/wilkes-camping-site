import React, { Component } from "react";

import firebase from "../datastore";

import InputField from "../components/InputField";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.addCampsite = this.addCampsite.bind(this);
    this.getCampsites = this.getCampsites.bind(this);

    this.state = {
      campsites: [],
      numberOfSpots: 0,
      name: "",
      state: ""
    };
  }

  componentDidMount() {
    this.getCampsites();
  }

  getCampsites() {
    firebase
      .database()
      .ref("/campsites")
      .once("value")
      .then(snapshot => {
        console.log("campsites", snapshot.val());
        this.setState({
          campsites: snapshot.val()
        });
      });
  }

  addCampsite() {
    const { name, state, numberOfSpots } = this.state;

    // TODO: Save this campsite to the database..
    const updates = {};

    const uniqueId = Date.now();
    updates[`/campsites/${uniqueId}/name`] = name;
    updates[`/campsites/${uniqueId}/state`] = state;
    updates[`/campsites/${uniqueId}/spotCount`] = numberOfSpots;

    firebase
      .database()
      .ref()
      .update(updates)
      .then(() => {
        // Make a call to Firebase to get new records..
        this.getCampsites();
      });
  }

  renderCampsites() {
    const { campsites } = this.state;

    let campsiteEls;

    campsiteEls =
      campsites &&
      Object.keys(campsites).map(c => {
        const campsite = campsites[c];
        // console.log('SINGLE CAMPSITE', campsite);

        return (
          <div>
            <h3>{campsite.name}</h3>
            <p>{campsite.state}</p>
            {/* {campsite.spotCount ? (
              <p># of spots: {campsite.spotCount}</p>
            ) : null} */}

            <hr />
          </div>
        );
      });

    return campsiteEls;
  }

  render() {
    return (
      <div>
        <h1>Datastore Sandbox</h1>

        <label>Add Campsite</label>
        <input
          onChange={e => this.setState({ name: e.target.value })}
          placeholder="name"
        />
        <input
          onChange={e => this.setState({ state: e.target.value })}
          placeholder="state"
        />
        <input
          onChange={e => this.setState({ numberOfSpots: e.target.value })}
          placeholder="# of spots"
        />
        <button onClick={() => this.addCampsite()}>Add Campsite</button>
        {this.renderCampsites()}
      </div>
    );
  }
}
