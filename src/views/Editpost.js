import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { CHECK_FOR_CURRENT_USER } from "../utils/UserAuth";

export default class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
      userId: null,
      profilePhoto: null,
      email: null
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
  }

  render() {
    if (!this.state.isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <button>edit</button>
        {/* // put same as newpost but add edit button on each section?? */}
      </div>
    );
  }
}
