'use strict';

import * as types from '../constants/actionType';

function statusReducer (state = 'open', action) {
  switch(action.type) {
    case types.STATUS_SET:
      return action.status;
    default:
      return state;
  }
}

export default statusReducer;
