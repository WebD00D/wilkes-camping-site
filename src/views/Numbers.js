import React, { Component } from "react";
import firebase from "../datastore";
import InputField from "../components/InputField";

import { MULT_NUMBER } from "../utils/index";

export default class Numbers extends Component {
  constructor(props) {
    super(props);

    // this.clickCounter = this.clickCounter.bind(this);
    this.getClicks = this.getClicks.bind(this);
    this.utilCounter = this.utilCounter.bind(this);

    this.state = {
      totalClicks: 0,
      clicksPerSession: 0
    };
  }

  componentDidMount() {
    this.getClicks();
  }

  getClicks() {
    firebase
      .database()
      .ref("/wilkes-numbers/totalClicks")
      .once("value")
      .then(snapshot => {
        console.log("totalClicks", snapshot.val());
        this.setState({
          totalClicks: snapshot.val()
        });
      });
  }

  addClicks() {
    const { totalClicks } = this.state;

    const updates = {};

    // const uniqueId = Date.now();
    // updates[`/wilkes-numbers/${uniqueId}/totalClicks`] = totalClicks + 1;
    updates[`/wilkes-numbers/totalClicks`] = totalClicks + 1;

    firebase
      .database()
      .ref()
      .update(updates)
      .then(() => {
        this.getClicks();
      });
  }

  clickCounter() {
    const { clicksPerSession } = this.state;

    let clicksOnPage;
    clicksOnPage = this.setState({ clicksPerSession: clicksPerSession + 1 });
    console.log("this session", clicksPerSession);
    return clicksPerSession;
  }

  utilCounter() {
    const { totalClicks } = this.state;

    const addNumber = MULT_NUMBER(totalClicks);
    return addNumber;
  }

  render() {
    return (
      <div>
        <button onClick={() => this.clickCounter()}>Clicks this Session</button>
        <h3>{this.state.clicksPerSession}</h3>
        <button onClick={() => this.addClicks()}>
          Total Clicks Since Forever
        </button>
        <h3>{this.state.totalClicks}</h3>
        <h3>Utility Function</h3>
        <h3>{this.utilCounter()}</h3>
      </div>
    );
  }
}
