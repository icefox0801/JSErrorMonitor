'use strict';

import React from 'react';
import { Router, Route, IndexRedirect, Redirect, browserHistory } from 'react-router';
import App from './App';
import Home from './home/MainComponent';
import Error from './error/MainComponent';
import ErrorList from './error/ListComponent';
import ErrorListPage from './error/list/PageComponent';
import ErrorListError from './error/list/ErrorComponent';
import ErrorListArchive from './error/list/ArchiveComponent';
import ErrorListBrowser from './error/list/BrowserComponent';
import ErrorListSystem from './error/list/SystemComponent';
import ErrorDetail from './error/DetailComponent';

let AppRouter = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/home" />
      <Route path="home" component={Home} />
      <Route path="error" component={Error} >
        <IndexRedirect to="/error/list" />
        <Route path="list" component={ErrorList}>
          <IndexRedirect to="/error/list/all" />
          <Route path="all" component={ErrorListError} />
          <Route path="archive" component={ErrorListArchive} />
          <Route path="page" component={ErrorListPage} />
          <Route path="browser" component={ErrorListBrowser} />
          <Route path="system" component={ErrorListSystem} />
        </Route>
        <Route path="detail/:errorId" component={ErrorDetail} />
      </Route>
      <Redirect from="*" to="home" />
    </Route>
  </Router>
);

export default AppRouter;
