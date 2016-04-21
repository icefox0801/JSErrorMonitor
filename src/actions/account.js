'use strict';

import * as types from '../constants/actionType';

function loginAccount (json) {
  return {
    type: types.ACCOUNT_LOGIN,
    account: {
      username: json.result.username,
      isLogin: json.message === 'ok'
    }
  };
}

function logoutAccount (json) {
  return {
    type: types.ACCOUNT_LOGOUT,
    account: {
      username: '',
      isLogin: json.message !== 'ok'
    }
  };
}

function authenticated (json) {
  return {
    type: types.ACCOUNT_AUTHENTICATED,
    account: {
      username: json.result.username,
      isLogin: json.message === 'ok'
    }
  };
}

export function doLoginAccount (params) {
  return dispatch => {
    //dispatch(loadingShow);
    return fetch('/api/account/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params),
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(json => dispatch(loginAccount(json)));
  };
}

export function doLogoutAccount () {
  return dispatch => {
    //dispatch(loadingShow);
    return fetch('/api/account/logout/', {
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(json => dispatch(logoutAccount(json)));
  };
}

export function isAuthenticated () {
  return dispatch => {
    //dispatch(loadingShow);
    return fetch('/api/account/authenticated/', {
      credentials: 'same-origin'
    })
      .then(response => response.json(), response => response.json())
      .then(json => dispatch(authenticated(json)));
  };
}
