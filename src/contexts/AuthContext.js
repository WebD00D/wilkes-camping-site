import React, { Component } from 'react';

import { CHECK_FOR_CURRENT_USER } from '../utils/UserAuth';

export const AuthContext = React.createContext(null);

export class AuthProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: null,
      email: null,
      name: null,
      profilePhoto: null,
      isAuthenticated: true
    };

    this.actions = {
      getProfilePhoto: () => this.getProfilePhoto()
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

  logOutUser() {
    // runs the code to log the user out..
  }

  getProfilePhoto() {
    // Should return an img tag with the users
    // profile photo...

    return <img src={this.state.profilePhoto} />;
  }

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, ...this.actions }}
        {...this.props}
      />
    );
  }
}

export function WithAuth(AuthComponent) {
  return function makeAuthComponent(props) {
    return (
      <AuthContext.Consumer>
        {data => <AuthComponent {...props} authContext={data} />}
      </AuthContext.Consumer>
    );
  };
}

export default {
  AuthContext,
  AuthProvider,
  WithAuth
};
