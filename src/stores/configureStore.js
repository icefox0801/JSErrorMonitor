"use strict";

import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { jsErrorReducer } from '../reducers'

const createStoreWithMiddleWare = compose(
  applyMiddleware(
    thunkMiddleware,
    createLogger(),
    routerMiddleware(history)
  )
)(createStore);

export default function configureStore(history, initialState) {

  const reducer = combineReducers({
    jsError: jsErrorReducer,
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
