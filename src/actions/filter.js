'use strict';

import _ from 'lodash';
import * as types from '../constants/actionType';

function setFilter (params) {
  return {
    type: types.FILTER_SET,
    filter: params
  }
}

export function setFilterProps (key, value) {
  var param = {};
  _.set(param, key, value);

  return dispatch => {
    //dispatch(loadingShow);
    return dispatch(setFilter(param));
  };
}
