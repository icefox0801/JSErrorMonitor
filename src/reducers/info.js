'use strict';

import * as types from '../constants/actionType';

function infoReducer (state = { abstract: { browsers: [],  os: [] }, list: [] }, action) {
  switch(action.type) {
    case types.ERROR_DETAIL:
      return Object.assign({}, state, {
        list: action.list,
        abstract: action.abstract
      });
    default:
      return state;
  }
}

export default infoReducer;
