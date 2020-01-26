import React, { Component } from "react";
import styled from "@emotion/styled";
import {
  Icon,
  Alert,
  Collapse,
  PageHeader as AntPageHeader,
  Button as AntButton,
  Layout
} from "antd";

import * as UI from "../UI";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "../views/Home";
import Campsite from "../views/Campsite";
import Signup from "../views/Signup";
import Login from "../views/Login";
import NewCampsite from "../views/NewCampsite";
import EditPost from "../views/EditPost";
import Profile from "../views/Profile";
import Dashboard from "../views/Dashboard";

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <UI.NavBar>
          <div className="App">
            <ul>
              <Icon type="menu" className="mobile" />
              <li className="NavLeft">
                <Link to="/">Home</Link>
              </li>
              <li className="NavLeft">
                <Link to="/campsite">Campsite</Link>
              </li>
              <li className="NavRight">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="NavRight">
                <Link to="/login">Log In</Link>
              </li>
              <li className="NavRight">
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </UI.NavBar>
        <div className="App">
          <Route path="/" exact component={Home} />
          {/* <Route path="/campsite/:campsiteId" exact component={Campsite} /> */}
          <Route path="/campsite" exact component={Campsite} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/newcampsite" exact component={NewCampsite} />
          <Route path="/editpost" exact component={EditPost} />
          <Route path="/profile" exact component={Profile} />
          {/* <Route path="/database" exact component={DataSandbox} />
          <Route path="/numbers" exact component={Numbers} /> */}
          <Route path="/Dashboard" exact component={Dashboard} />
        </div>
      </Router>
    );
  }
}
