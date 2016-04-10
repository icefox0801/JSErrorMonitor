'use strict';
import _ from 'lodash';
import { ERROR_TREND_CHART } from '../constants/actionType';
import packOptions from '../utils/packOptions';

function errorTrendChart (json) {
  return {
    type: ERROR_TREND_CHART,
    plots: json.result,
    meta: json.meta
  }
}

export function fetchErrorTrendChart (params) {
  return dispatch => {
    return packOptions()
      .then(options => fetch('/api/chart/error/trend', options))
      .then(response => response.json())
      .then(json => dispatch(errorTrendChart(json)))
  }
}
