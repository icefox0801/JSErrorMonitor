'use strict';

import * as types from '../constants/actionType';

function accountReducer (state = { username: '', isLogin: false }, action) {
  switch(action.type) {
    case types.ACCOUNT_LOGIN:
      return Object.assign({}, state, action.account);
    case types.ACCOUNT_LOGOUT:
      return Object.assign({}, state, action.account);
    default:
      return state;
  }
}

export default accountReducer;
