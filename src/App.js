import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import Home from './views/Home';
import Campsite from './views/Campsite';

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
        </ul>

        <Route path="/" exact component={Home} />
        <Route path="/campsite" exact component={Campsite} />
      </div>
    </Router>
  );
}

export default App;
