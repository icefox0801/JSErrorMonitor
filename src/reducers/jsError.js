'use strict';

import { combineReducers } from 'redux';

import * as types from '../constants/actionType';

function listMostError(state = [], action) {

  switch(action.type) {
    case types.MOST_ERROR_LIST:
      return Object.assign([], action.most);
    default:
      return state;
  }

}

function listLatestError(state = [], action) {

  switch(action.type) {
    case types.LATEST_ERROR_LIST:
      return Object.assign([], action.latest);
    default:
      return state;
  }
}

function listAllError(state = { list: [], meta: {} }, action) {
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

function listArchiveError(state = { list: [], meta: {} }, action) {

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

function listBrowserError(state = { list: [], meta: {} }, action) {

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
  all: listAllError,
  archives: listArchiveError,
  browsers: listBrowserError,
  most: listMostError,
  latest: listLatestError
});

export default jsErrorReducer;
