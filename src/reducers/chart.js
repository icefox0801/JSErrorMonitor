'use strict';

import { combineReducers } from 'redux';
import * as types from '../constants/actionType';

function errorTrend(state = { plots: [], meta: {} }, action) {

  switch(action.type) {
    case types.ERROR_TREND_CHART:
      return Object.assign({}, state, {
        plots: action.plots,
        meta: action.meta
      });
    default:
      return state;
  }

}

function browserCategory(state = { plots: [] }, action) {

  switch(action.type) {
    case types.ERROR_BROWSER_CHART:
      return Object.assign({}, state, {
        plots: action.plots
      });
    default:
      return state;
  }

}

function osCategory(state = { plots: [] }, action) {

  switch(action.type) {
    case types.ERROR_OS_CHART:
      return Object.assign({}, state, {
        plots: action.plots
      });
    default:
      return state;
  }

}

function businessCategory(state = { plots: [] }, action) {

  switch(action.type) {
    case types.ERROR_BUSINESS_CHART:
      return Object.assign({}, state, {
        plots: action.plots
      });
    default:
      return state;
  }

}

function platformCategory(state = { plots: [] }, action) {

  switch(action.type) {
    case types.ERROR_PLATFORM_CHART:
      return Object.assign({}, state, {
        plots: action.plots
      });
    default:
      return state;
  }

}

const chartReducer = combineReducers ({
  trend: errorTrend,
  browser: browserCategory,
  os: osCategory,
  business: businessCategory,
  platform: platformCategory
});

export default chartReducer;
