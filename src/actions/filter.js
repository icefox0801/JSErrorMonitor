'use strict';

import _ from 'lodash';
import * as types from '../constants/actionType';

function setFilter (params) {
  return {
    type: types.FILTER_SET,
    filter: params
  }
}

function resetFilter () {
  return {
    type: types.FILTER_RESET
  }
}

export function setFilterProps (key, value) {
  var params = {};
  _.set(params, key, value);

  return dispatch => {
    return dispatch(setFilter(params));
  };
}

export function resetFilterProps () {

  return dispatch => {
    return dispatch(resetFilter());
  }
}
