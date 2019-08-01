import React, { Component } from "react";

import BigButton from "../components/BigButton";
import InputField from "../components/InputField";
import NameDisplay from "../components/NameDisplay";
import GenericButton from "../components/GenericButton";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Bob"
    };
  }

  clearName() {
    this.setState({
      name: null
    });
  }

  alertNumber() {
    alert(2);
  }

  alertText() {
    alert("Some text");
  }

  updateRating(rating) {
    this.setState({
      currentRating: rating
    });
  }

  render() {
    return (
      <div>
        <h1>Free Camping</h1>
        <h4>We Have Got You Covered</h4>
        <p>
          We’ve Got You Covered This community based platform is for sharing the
          best free campgrounds and camp sites you have discovered. Whether you
          enjoy tent camping, car camping or RV camping, our goal is to help you
          find the best places to go camping for free or at least very cheap.
        </p>

        <p>
          Free campgrounds can be hard to find. We makes it easy. We give you a
          simple, map based search engine to find free and cheap camping areas.
          Community reviews and ratings provide you with up to date information
          and help you select the best camp site for your next camping trip.
        </p>

        <p>
          By sharing camping information freely, we can all spend less time
          researching campgrounds, spend less money, and more time camping. More
          contributions equals more fun.
        </p>

        <p>
          Our focus is on public lands. You own these lands and you are entitled
          to use them. We especially like Forest Service land, BLM (Bureau of
          Land Management) areas, WMA's (Wildlife Management Areas) and county
          or city parks. We are not actively seeking Wal-Marts, truck-stops or
          other parking lots. You can find those other places. However, if a
          member of the community finds one of these locations to be useful and
          creates an entry, we may approve the listing.
        </p>

        {/* 
        <GenericButton
          handleClick={() => this.alertText()}
          buttonName="Hello World"
        />
        <GenericButton
          handleClick={() => this.alertNumber()}
          buttonName="Number Alerter"
        />
        <GenericButton
          handleClick={() => this.alertText()}
          buttonName="Text Alerter"
        /> */}

        {/* <NameDisplay
          handleClick={() => this.clearName()}
          displayName={this.state.name}
        /> */}
        {/* <InputField labelName="Username" inputType="email" />
        <BigButton text="Hello" color="red" />
        <BigButton text="Whats up" color="green" />
        <BigButton text="Click me" /> */}
      </div>
    );
  }
}
