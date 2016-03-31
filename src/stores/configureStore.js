'use strict';

import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as reducers from '../reducers'

export default function configureStore(history, initialState) {

  const createStoreWithMiddleWare = compose(
    applyMiddleware(
      thunkMiddleware,
      createLogger(),
      routerMiddleware(history)
    )
  )(createStore);

  const reducer = combineReducers({
    global: reducers.global,
    filter: reducers.filter,
    jsError: reducers.jsError,
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
