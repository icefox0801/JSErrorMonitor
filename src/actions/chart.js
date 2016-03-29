'use strict';
import _ from 'lodash';
import { ERROR_TREND_CHART } from '../constants/actionType';

function errorTrendChart (json) {
  var x = [];
  var y = [];
  var data = _.fromPairs(json.result.map(item => [item._id.hourAgo, item.count]));

  for(var i = 0; i < 24; i++) {
    let j = 24 - i;
    x[i] = j + 'h';
    y[i] = data[j - 1] || 0;
  }

  return {
    type: ERROR_TREND_CHART,
    axis: {x, y}
  }
}

export function fetchErrorTrendChart (params) {
  return dispatch => {
    return fetch('/api/chart/error/trend')
      .then(response => response.json())
      .then(json => dispatch(errorTrendChart(json)))
  }
}
