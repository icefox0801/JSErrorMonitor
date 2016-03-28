'use strict';

import { combineReducers } from 'redux';

import { ARCHIVE_ERROR_LIST, MOST_ERROR_LIST, LATEST_ERROR_LIST } from '../actions';

function mostErrorList(state = [], action) {

  switch(action.type) {
    case MOST_ERROR_LIST:
      return Object.assign([], state, action.most);
    default:
      return state;
  }

}

function latestErrorList(state = [], action) {

  switch(action.type) {
    case LATEST_ERROR_LIST:
      return Object.assign([], state, action.latest);
    default:
      return state;
  }
}

function allErrorList(state = [], action) {

  switch(action.type) {
    case ARCHIVE_ERROR_LIST:
      return Object.assign([], state, action.list);
    default:
      return state;
  }

}

const jsErrorReducer = combineReducers ({
  all: allErrorList,
  most: mostErrorList,
  latest: latestErrorList
});

export default jsErrorReducer;
