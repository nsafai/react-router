import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Forecast from './Forecast';

import './App.css';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/weather">Forecast</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/weather" component={Forecast}/>
    </div>
  </Router>
)
export default BasicExample