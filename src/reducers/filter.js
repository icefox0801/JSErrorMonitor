'use strict';

import * as types from '../constants/actionType';

function filterReducer(state = {}, action) {
  var nextState = {};
  switch (action.type) {
    case types.FILTER_SET:
      nextState = Object.assign({}, state, action.filter);
      break;
    case types.FILTER_RESET:
      nextState = {};
      break;
    default:
      nextState = state;
      break;
  }
  return nextState;
}

export default filterReducer;
