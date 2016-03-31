'use strict';

import * as types from '../constants/actionType';

function filterReducer (state = {}, action) {
  switch(action.type) {
    case types.FILTER_SET:
      return Object.assign({}, state, action.filter);
    default:
      return state;
  }
}

export default filterReducer;
