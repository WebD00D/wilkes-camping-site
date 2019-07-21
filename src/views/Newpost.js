import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import InputField from '../components/InputField';
import GenericButton from '../components/GenericButton';

export default class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
      profilePhoto: null,
      email: null,
      userId: null
    };
  }

  componentDidMount() {
    const userId = window.localStorage.getItem('CAMPSITE_uuid');
    const { email, name, profilePhoto } = this.state;
    // const profilePhoto: this.state;

    console.log('user id', userId);

    if (!userId) {
      this.setState({
        isAuthenticated: false
      });
    } else {
      // console.log("photo", this.profilePhoto);

      this.setState({
        userId,
        profilePhoto: window.localStorage.getItem('CAMPSITE_photo') || '',
        email: window.localStorage.getItem('CAMPSITE_email') || ''
      });
    }

    return;
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
        <InputField labelName="Description" inputType="text" />
        <h2>Star Rating</h2>
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
        {/* where does labelName go? Why is it not showing up? */}
        <h2>Officially Approved?</h2>
        <GenericButton buttonName="Yes" />
        <GenericButton buttonName="No" />
        {/* need to add upload link for pics and map view/googlemaps api */}
      </div>
    );
  }
}
