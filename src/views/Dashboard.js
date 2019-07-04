import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
      profilePhoto: '',
      userName: ''
    };
  }

  componentDidMount() {
    const userId = window.localStorage.getItem('CAMPSITE_uuid');

    if (!userId) {
      this.setState({
        isAuthenticated: false
      });
    } else {
      this.setState({
        profilePhoto: window.localStorage.getItem('CAMPSITE_photo'),
        userName: window.localStorage.getItem('CAMPSITE_name')
      });
    }
  }

  render() {
    if (!this.state.isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <h1>Dashboard</h1>
        <h4>{this.state.userName}</h4>
        <img src={this.state.profilePhoto} />
      </div>
    );
  }
}
