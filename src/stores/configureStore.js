'use strict';

import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as reducers from '../reducers';

var middlewareList = [thunkMiddleware, routerMiddleware(history)];

if(WEBPACK_ENV === 'development') middlewareList.push(createLogger());

export default function configureStore(history, initialState) {

  const createStoreWithMiddleWare = compose(
    applyMiddleware(...middlewareList)
  )(createStore);

  const reducer = combineReducers({
    account: reducers.account,
    global: reducers.global,
    filter: reducers.filter,
    status: reducers.status,
    jsError: reducers.jsError,
    info: reducers.info,
    chart: reducers.chart,
    routing: routerReducer
  });

  const store = createStoreWithMiddleWare(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(reducers.global);
      store.replaceReducer(reducers.filter);
      store.replaceReducer(reducers.jsError);
      store.replaceReducer(reducers.chart);
    })
  }

  return store
}
