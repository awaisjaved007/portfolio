import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {createBrowserHistory}  from 'history'
import { Router, Switch, Route } from "react-router-dom";
import Jokes from './components/Jokes';
import Header from './components/Header';

ReactDOM.render(
  <Router history= {createBrowserHistory()}>
    <Switch>
      <Route exact path="/" render={()=><Header><App /></Header>}  />
      <Route path="/jokes" render={()=><Header><Jokes /></Header>} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
