'use strict';

import { combineReducers } from 'redux';

import * as types from '../constants/actionType';

function mostErrorList(state = [], action) {

  switch(action.type) {
    case types.MOST_ERROR_LIST:
      return Object.assign([], state, action.most);
    default:
      return state;
  }

}

function latestErrorList(state = [], action) {

  switch(action.type) {
    case types.LATEST_ERROR_LIST:
      return Object.assign([], state, action.latest);
    default:
      return state;
  }
}

function allErrorList(state = { list: [], meta: {} }, action) {

  switch(action.type) {
    case types.ALL_ERROR_LIST:
      return Object.assign({}, state, {
        list: action.list,
        meta: action.meta
      });
    default:
      return state;
  }

}

function archiveErrorList(state = { list: [], meta: {} }, action) {

  switch(action.type) {
    case types.ARCHIVE_ERROR_LIST:
      return Object.assign({}, state, {
        list: action.list,
        meta: action.meta
      });
    default:
      return state;
  }

}

function browserErrorList(state = { list: [], meta: {} }, action) {

  switch(action.type) {
    case types.BROWSER_ERROR_LIST:
      return Object.assign({}, state, {
        list: action.list,
        meta: action.meta
      });
    default:
      return state;
  }

}

const jsErrorReducer = combineReducers ({
  all: allErrorList,
  archives: archiveErrorList,
  browsers: browserErrorList,
  most: mostErrorList,
  latest: latestErrorList
});

export default jsErrorReducer;
