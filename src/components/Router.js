'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, Redirect, hashHistory } from 'react-router';
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
import ErrorListOS from './error/list/OsComponent';
import Archive from './archive/MainComponent';
import ArchiveDetail from './archive/DetailComponent';
import Live from './live/MainComponent';
import Chart from './chart/MainComponent';
import ChartTrend from './chart/data/TrendComponent';
import ChartCategory from './chart/data/CategoryComponent';

const store = configureStore(hashHistory);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store);

let AppRouter = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="/home" />
        <Route path="home" component={Home} />
        <Route path="error" component={Error} >
          <IndexRedirect to="/error/list" />
          <Route path="list" component={ErrorList}>
            <IndexRedirect to="/error/list/archive" />
            <Route path="all">
              <IndexRedirect to="/error/list/all/1" />
              <Route path=":page" component={ErrorListError} />
            </Route>
            <Route path="archive">
              <IndexRedirect to="/error/list/archive/1" />
              <Route path=":page" component={ErrorListArchive} />
            </Route>
            <Route path="page">
              <IndexRedirect to="/error/list/page/1" />
              <Route path=":page" component={ErrorListPage} />
            </Route>
            <Route path="browser" component={ErrorListBrowser} />
            <Route path="os" component={ErrorListOS} />
          </Route>
        </Route>
        <Route path="archive" component={Archive}>
          <Route path="detail/:archiveId" component={ArchiveDetail} />
        </Route>
        <Route path="live" component={Live} />
        <Route path="chart" component={Chart} >
          <IndexRedirect to="/chart/trend" />
          <Route path="trend" component={ChartTrend} />
          <Route path="category" component={ChartCategory} />
        </Route>
        <Redirect from="*" to="home" />
      </Route>
    </Router>
  </Provider>
);

export default AppRouter;
