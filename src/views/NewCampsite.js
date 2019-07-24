import React, { Component } from "react";
import InputField from "../components/InputField";
import GenericButton from "../components/GenericButton";
import { Redirect, Link } from "react-router-dom";
import { CHECK_FOR_CURRENT_USER } from "../utils/UserAuth";
import firebase from "../datastore";

export default class NewCampsite extends Component {
  constructor(props) {
    super(props);

    this.getCamp = this.getCamp.bind(this);

    this.state = {
      isAuthenticated: true,
      profilePhoto: null,
      email: null,
      userId: null,
      campsites: null,
      campName: null,
      numberOfSpots: null,
      state: null
    };
  }

  componentDidMount() {
    const { userId, profilePhoto, email } = CHECK_FOR_CURRENT_USER();

    this.setState({
      userId,
      profilePhoto,
      email,
      isAuthenticated: userId ? true : false
    });
    console.log("userid", userId);
  }

  getCamp() {
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

  addCamp() {
    const { campName, state, numberOfSpots } = this.state;
    const updates = {};
    updates[`/campsites/name`] = campName;
    updates[`/campsites/state`] = state;
    updates[`/campsites/spotCount`] = numberOfSpots;

    // hmmmm^

    firebase
      .database()
      .ref()
      .update(updates)
      .then(() => {
        this.getCamp();
      });
  }

  render() {
    if (!this.state.isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <h1>Add A Campsite</h1>
        <div>{this.state.userId}</div>
        <InputField labelName="Campsite Name" inputType="text" />
        <InputField labelName="Number of Spots" inputType="text" />
        <InputField labelName="State" inputType="text" />

        {/* <h2>Star Rating</h2>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <h2>Campsite Cost</h2>
        <GenericButton buttonName="Free?" />
        <GenericButton buttonName="Pay ($12 or less)" />
        <GenericButton buttonName="Permit Required" />
        <h2>Public or Private?</h2>
        <GenericButton buttonName="Private" />
        <GenericButton buttonName="Public" />
        <h2>Officially Approved?</h2>
        <GenericButton buttonName="Yes" />
        <GenericButton buttonName="No" /> */}

        <label>Finished?</label>
        <button onClick={() => this.addCamp()}>Publish this Camp!</button>

        {/* <h3>{this.state.campsites}</h3> */}
      </div>
    );
  }
}
