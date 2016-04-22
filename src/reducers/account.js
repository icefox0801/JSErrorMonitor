'use strict';

import * as types from '../constants/actionType';

function accountReducer (state = { username: '', isLogin: false, errMsg: '' }, action) {
  switch(action.type) {
    case types.ACCOUNT_LOGIN:
    case types.ACCOUNT_LOGOUT:
    case types.ACCOUNT_AUTHENTICATED:
      return Object.assign({}, state, action.account);
    default:
      return state;
  }
}

export default accountReducer;
