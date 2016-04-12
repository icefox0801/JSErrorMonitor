'use strict';

import _ from 'lodash';
import * as types  from '../constants/actionType';
import packOptions from '../utils/packOptions';

function errorTrendChart (json) {
  return {
    type: types.ERROR_TREND_CHART,
    plots: json.result,
    meta: json.meta
  }
}

function errorBrowserChart (json) {
  return {
    type: types.ERROR_BROWSER_CHART,
    plots: json.result.map(browser => _.chain(browser).omit('count').set('y', browser.count).value())
  }
}

function errorOsChart (json) {
  return {
    type: types.ERROR_OS_CHART,
    plots: json.result.map(os => _.chain(os).omit('count').set('y', os.count).value())
  }
}

function errorBusinessChart (json) {
  return {
    type: types.ERROR_BUSINESS_CHART,
    plots: json.result.map(business => _.chain(business).omit('count').set('y', business.count).value())
  }
}

function errorPlatformChart (json) {
  return {
    type: types.ERROR_PLATFORM_CHART,
    plots: json.result.map(platform => _.chain(platform).omit('count').set('y', platform.count).value())
  }
}

export function fetchErrorTrendChart (params) {
  //dispatch(loadingShow);
  return dispatch => {
    return packOptions(params)
      .then(options => fetch('/api/chart/error/trend', options))
      .then(response => response.json())
      .then(json => dispatch(errorTrendChart(json)))
  }
}

export function fetchErrorBrowserChart (params) {
  //dispatch(loadingShow);
  return dispatch => {
    return packOptions(params)
      .then(options => fetch('/api/chart/error/browser', options))
      .then(response => response.json())
      .then(json => dispatch(errorBrowserChart(json)))
  }
}

export function fetchErrorOsChart (params) {
  //dispatch(loadingShow);
  return dispatch => {
    return packOptions(params)
      .then(options => fetch('/api/chart/error/os', options))
      .then(response => response.json())
      .then(json => dispatch(errorOsChart(json)))
  }
}

export function fetchErrorBusinessChart (params) {
  //dispatch(loadingShow);
  return dispatch => {
    return packOptions(params)
      .then(options => fetch('/api/chart/error/business', options))
      .then(response => response.json())
      .then(json => dispatch(errorBusinessChart(json)))
  }
}

export function fetchErrorPlatformChart (params) {
  //dispatch(loadingShow);
  return dispatch => {
    return packOptions(params)
      .then(options => fetch('/api/chart/error/platform', options))
      .then(response => response.json())
      .then(json => dispatch(errorPlatformChart(json)))
  }
}
