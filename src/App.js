import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import Home from './views/Home';
import Campsite from './views/Campsite';
import Signup from './views/Signup';

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
            <Link to="/ signup">Sign Up</Link>
          </li>
        </ul>

        <Route path="/" exact component={Home} />
        <Route path="/campsite" exact component={Campsite} />
        <Route path="/signup" exact component={Signup} />
      </div>
    </Router>
  );
}

export default App;
