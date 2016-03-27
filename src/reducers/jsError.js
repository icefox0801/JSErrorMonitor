'use strict';

import { combineReducers } from 'redux';

import { ACHIEVED_ERROR_LIST } from '../actions';

function errorList(state = [], action) {

  switch(action.type) {
    case ACHIEVED_ERROR_LIST:
      return Object.assign([], state, action.list);
    default:
      return state;
  }

}

const jsErrorReducer = combineReducers ({
  all: errorList
});

export default jsErrorReducer;
