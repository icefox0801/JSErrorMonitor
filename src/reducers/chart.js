'use strict';

import { combineReducers } from 'redux';

import { ERROR_TREND_CHART } from '../constants/actionType';

function errorTrend(state = {}, action) {

  switch(action.type) {
    case ERROR_TREND_CHART:
      return Object.assign({}, state, action.axis);
    default:
      return state;
  }

}

const chartReducer = combineReducers ({
  trend: errorTrend
});

export default chartReducer;
