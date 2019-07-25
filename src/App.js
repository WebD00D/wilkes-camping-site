import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./views/Home";
import Campsite from "./views/Campsite";
import Signup from "./views/Signup";
import Login from "./views/Login";
import NewCampsite from "./views/NewCampsite";
import EditPost from "./views/Editpost";
import Profile from "./views/Profile";
import DataSandbox from "./views/DataSandbox";
import Numbers from "./views/Numbers";

import Dashboard from "./views/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/campsite">Campsite</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/NewCampsite">New Campsite</Link>
          </li>
          <li>
            <Link to="/EditPost">Edit Post</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/database">Data Store</Link>
          </li>
          <li>
            <Link to="/Numbers">Numbers</Link>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
        </ul>

        <Route path="/" exact component={Home} />
        <Route path="/campsite" exact component={Campsite} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/newcampsite" exact component={NewCampsite} />
        <Route path="/editpost" exact component={EditPost} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/database" exact component={DataSandbox} />
        <Route path="/numbers" exact component={Numbers} />
        <Route path="/Dashboard" exact component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
