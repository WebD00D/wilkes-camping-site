import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

import "mapbox-gl/dist/mapbox-gl.css";

import "antd/dist/antd.css";

import Routes from "./components/Routes";
import AntFooter from "./components/AntFooter";
import AntHeader from "./components/AntHeader";

import { Icon, Layout } from "antd";
import { isUserWhitespacable, isPatternLike } from "@babel/types";

function App() {
  // const { getProfilePhoto } = this.props.authContext;

  return (
    <div>
      <Routes>
        <AntHeader></AntHeader>
        <AntFooter></AntFooter>
      </Routes>
    </div>
  );
}

export default App;
