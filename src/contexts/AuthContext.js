import React, { Component } from "react";
import { CHECK_FOR_CURRENT_USER } from "../utils/UserAuth";
import firebase from "../datastore";
export const AuthContext = React.createContext(null);

export class AuthProvider extends Component {
  constructor(props) {
    super(props);

    // this.signInUser = this.signInUser.bind(this);

    this.state = {
      user: {},
      userId: false,
      email: "",
      name: false,
      password: "",
      profilePhoto: null,
      isAuthenticated: false
    };

    this.actions = {
      signInUser: (email, password) => this.signInUser(email, password),
      getProfilePhoto: () => this.getProfilePhoto(),
      logOutUser: () => this.logOutUser(),
      handleChange: () => this.handleChange(),
      setUser: (userId, name, email, profilePhoto) =>
        this.setUser(userId, name, email, profilePhoto)
    };
  }

  componentDidMount() {
    const { userId, profilePhoto, email, name } = CHECK_FOR_CURRENT_USER();
    this.setState({
      name,
      userId,
      profilePhoto,
      email,
      isAuthenticated: userId ? true : false
    });
  }

  // handleChange(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  setUser(userId, name, email, profilePhoto) {
    window.localStorage.setItem("CAMPSITE_uuid", userId);
    window.localStorage.setItem("CAMPSITE_name", name);
    window.localStorage.setItem("CAMPSITE_email", email);
    window.localStorage.setItem("CAMPSITE_photo", profilePhoto);

    // 1. Then set the authcontext state (name.. userId.. etc.)

    this.setState({
      userId: window.localStorage.getItem("CAMPSITE_uuid"),
      name: window.localStorage.getItem("CAMPSITE_name"),
      email: window.localStorage.getItem("CAMPSITE_email"),
      profilePhoto: window.localStorage.getItem("CAMPSITE_photo")
    });

    // 2. Set isAuthenticated to true...
  }

  signInUser(email, password) {
    console.log("[AuthContext.SignInUser]", email, password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(u => {
        console.log("user", u);

        firebase
          .database()
          .ref(`/users/${u.user.uid}`)
          .once("value")
          .then(snapshot => {
            console.log("snapshot from user", `/users/${u.user.uid}`);

            const { name, email, profilePhoto } = snapshot.val();

            // 1. Set the user details on our auth context
            this.setUser(u.user.uid, name, email, profilePhoto);

            // 2. Once those details are set, you're safe to redirect the user elsewhere..
            this.setState({
              isAuthenticated: true
            });
          });
      });
  }

  logOutUser() {
    // runs the code to log the user out..
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.

        // NOTE: Clear the local storage items..

        window.localStorage.removeItem("CAMPSITE_photo");
        window.localStorage.removeItem("CAMPSITE_email");
        window.localStorage.removeItem("CAMPSITE_name");
        window.localStorage.removeItem("CAMPSITE_uuid");

        this.setState({
          isAuthenticated: false,
          userId: null,
          email: null,
          name: null,
          profilePhoto: null
        });
        console.log("auth context status", this.state.isAuthenticated);
      })
      .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("error", errorCode, errorMessage);
        // An error happened.
      });
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
