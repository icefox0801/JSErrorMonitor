'use strict';

import * as types from '../constants/actionType';

function getGlobal (params) {
  return {
    type: types.GLOBAL_GET,
    global: params
  };
}

function setGlobal (params) {
  return {
    type: types.GLOBAL_SET,
    global: params
  }
}

export function getGlobalProps () {
  var promise = new Promise(function (resolve, reject) {

    try {
      const timeRange = localStorage.getItem('timeRange');
      const business = localStorage.getItem('business');
      const platform = localStorage.getItem('platform');
      resolve({ timeRange, business, platform })
    } catch (err) {
      reject(err);
    }

  });
  return dispatch => {
    //dispatch(loadingShow);
    return promise.then(params => dispatch(getGlobal(params)))
  };
}

export function setGlobalProps (key, value) {
  var param = {};
  var promise = new Promise(function (resolve, reject) {

    try {
      localStorage.setItem(key, value);
      param[key] = value;
      resolve(param);
    } catch (err) {
      reject(err);
    }

  });

  return dispatch => {
    //dispatch(loadingShow);
    return promise.then(params => dispatch(setGlobal(params)))
  };
}
