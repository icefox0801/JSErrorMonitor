'use strict';

import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './home/MainComponent';
import Error from './error/MainComponent';

let AppRouter = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="error" component={Error} />
      <Redirect from="charts" to="home" />
      <Redirect from="statistics" to="home"/>
      <Redirect from="extras" to="home"/>
    </Route>
  </Router>
);

export default AppRouter;
