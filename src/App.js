import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import * as UI from "./UI";
import { NavBar } from "./UI";

import Home from "./views/Home";
import Campsite from "./views/Campsite";
import Signup from "./views/Signup";
import Login from "./views/Login";
import NewCampsite from "./views/NewCampsite";
import EditPost from "./views/EditPost";
import Profile from "./views/Profile";

import Dashboard from "./views/Dashboard";
import "mapbox-gl/dist/mapbox-gl.css";

function App() {
  // const { getProfilePhoto } = this.props.authContext;

  return (
    <Router>
      <UI.NavBar>
        <div className="App">
          <ul>
            <li className="NavLeft">
              <Link to="/">Home</Link>
            </li>
            <li className="NotInNav">
              <Link to="/campsite">Campsite</Link>
            </li>
            <li className="NotInNav">
              <Link to="/NewCampsite">New Campsite</Link>
            </li>
            <li className="NotInNav">
              <Link to="/EditPost">Edit Post</Link>
            </li>
            {/* <li>
              <Link to="/database">Data Store</Link>
            </li>
            <li>
              <Link to="/Numbers">Numbers</Link>
            </li> */}
            <li className="NotInNav">
              <Link to="/Profile">Profile</Link>
            </li>
            <li className="NavRight">
              <Link to="/Dashboard">Dashboard</Link>
            </li>
            <li className="NavRight">
              <Link to="/login">Log In</Link>
            </li>
            <li className="NavRight">
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>

          <Route path="/" exact component={Home} />
          <Route path="/campsite/:campsiteId" exact component={Campsite} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/newcampsite" exact component={NewCampsite} />
          <Route path="/editpost" exact component={EditPost} />
          <Route path="/profile" exact component={Profile} />
          {/* <Route path="/database" exact component={DataSandbox} />
          <Route path="/numbers" exact component={Numbers} /> */}
          <Route path="/Dashboard" exact component={Dashboard} />
        </div>
      </UI.NavBar>
    </Router>
  );
}

export default App;
