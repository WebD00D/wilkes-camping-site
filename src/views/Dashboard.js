import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import firebase from '../datastore';
import { WithAuth } from '../contexts/AuthContext';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    // this.componentDidMount = this.componentDidMount.bind(this);
    // this.stuff = this.stuff.bind(this);

    this.state = {};
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT - Dashboard ');
    // const userId = window.localStorage.getItem('CAMPSITE_uuid');
    // if (!userId) {
    //   this.setState({
    //     isAuthenticated: false
    //   });
    // } else {
    //   // console.log("photo", this.profilePhoto);
    //   this.setState({
    //     profilePhoto: window.localStorage.getItem('CAMPSITE_photo') || '',
    //     email: window.localStorage.getItem('CAMPSITE_email') || ''
    //   });
    // }
    // return;
  }

  signOutHandle() {
    this.props.authContext.logOutUser();
  }

  render() {
    const { name, email, isAuthenticated } = this.props.authContext;

    console.log(
      'this.props.authCotnext DASHBOARD',
      isAuthenticated,
      this.props.authContext
    );

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <h1>Dashboard</h1>
        <h4>{name}</h4>
        <div>{email}</div>
        <Link to="/NewPost">Add New Campsite</Link>
        <button onClick={() => this.signOutHandle()}>Sign Out</button>
      </div>
    );
  }
}

export default WithAuth(Dashboard);
