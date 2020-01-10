import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import * as UI from "./UI";
import { NavBar, AntFixes } from "./UI";

import Home from "./views/Home";
import Campsite from "./views/Campsite";
import Signup from "./views/Signup";
import Login from "./views/Login";
import NewCampsite from "./views/NewCampsite";
import EditPost from "./views/EditPost";
import Profile from "./views/Profile";

import Dashboard from "./views/Dashboard";
import "mapbox-gl/dist/mapbox-gl.css";

import "antd/dist/antd.css";

import AntFooter from "./components/AntFooter";
import AntHeader from "./components/AntFooter";

import { Icon, Layout } from "antd";
import { isUserWhitespacable, isPatternLike } from "@babel/types";

import Routes from "./components/Routes";

function App() {
  // const { getProfilePhoto } = this.props.authContext;
  // const { Header, Footer, Content } = Layout;

  return (
    <div>
      <UI.AntFixes>
        <Routes>
          <AntHeader></AntHeader>
          <AntFooter></AntFooter>
        </Routes>
      </UI.AntFixes>
    </div>
  );
}

export default App;
