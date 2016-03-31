'use strict';

import * as types from '../constants/actionType';

function globalReducer (state = { timeRange: 1, business: 'all', platform: 'pc'}, action) {
  switch(action.type) {
    case types.GLOBAL_GET:
      return Object.assign({}, state, action.global);
    case types.GLOBAL_SET:
      return Object.assign({}, state, action.global);
    default:
      return state;
  }
}

export default globalReducer;
