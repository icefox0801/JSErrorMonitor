'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from '../stores/configureStore';

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

const store = configureStore(browserHistory);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

let AppRouter = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="/home" />
        <Route path="home" component={Home} />
        <Route path="error" component={Error} >
          <IndexRedirect to="/error/list" />
          <Route path="list" component={ErrorList}>
            <IndexRedirect to="/error/list/all" />
            <Route path="all" component={ErrorListError} />
            <Route path="archive" component={ErrorListArchive}/>
            <Route path="page" component={ErrorListPage} />
            <Route path="browser" component={ErrorListBrowser} />
            <Route path="system" component={ErrorListSystem} />
          </Route>
          <Route path="detail/:errorId" component={ErrorDetail} />
        </Route>
        <Redirect from="*" to="home" />
      </Route>
    </Router>
  </Provider>
);

export default AppRouter;
