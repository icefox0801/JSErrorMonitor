'use strict';

import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { jsErrorReducer, chartReducer } from '../reducers'

export default function configureStore(history, initialState) {

  const createStoreWithMiddleWare = compose(
    applyMiddleware(
      thunkMiddleware,
      createLogger(),
      routerMiddleware(history)
    )
  )(createStore);

  const reducer = combineReducers({
    jsError: jsErrorReducer,
    chart: chartReducer,
    routing: routerReducer
  });

  const store = createStoreWithMiddleWare(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
