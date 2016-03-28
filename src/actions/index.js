"use strict";
import transformDate from '../utils/transformDate';
import _ from 'lodash';

export const ARCHIVE_ERROR_LIST = 'ARCHIVE_ERROR_LIST';
export const ERROR_TREND_CHART = 'ERROR_TREND_CHART';
export const MOST_ERROR_LIST = 'MOST_ERROR_LIST';
export const LATEST_ERROR_LIST = 'LATEST_ERROR_LIST';

function mostErrorList (json) {
  return {
    type: MOST_ERROR_LIST,
    most: json.result.map((jsError) => ({
      message: jsError._id.message,
      url: jsError._id.url,
      count: jsError.value.count,
      earliest: transformDate(jsError.value.earliest),
      latest: transformDate(jsError.value.latest)
    }))
  };
}

function latestErrorList (json) {
  return {
    type: LATEST_ERROR_LIST,
    latest: json.result.map((jsError) => ({
      message: jsError._id.message,
      url: jsError._id.url,
      count: jsError.value.count,
      earliest: transformDate(jsError.value.earliest),
      latest: transformDate(jsError.value.latest)
    }))
  };
}

function archiveErrorList (json) {
  return {
    type: ARCHIVE_ERROR_LIST,
    list: json.result.map((jsError) => Object.assign(jsError, {
      fromNow :transformDate(jsError.date)
    }))
  };
}

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

export function fetchMostErrorList (params) {
  return dispatch => {
    //dispatch(loadingShow);
    return fetch('/api/error/list/most')
      .then(response => response.json())
      .then(json => dispatch(mostErrorList(json)))
  };
}

export function fetchLatestErrorList (params) {
  return dispatch => {
    //dispatch(loadingShow);
    return fetch('/api/error/list/latest')
      .then(response => response.json())
      .then(json => dispatch(latestErrorList(json)))
  };
}

export function fetchArchiveErrorList (params) {
  return dispatch => {
    //dispatch(loadingShow);
    return fetch('/api/error/list/all')
      .then(response => response.json())
      .then(json => dispatch(archiveErrorList(json)))
  };
}

export function fetchErrorTrendChart (params) {
  return dispatch => {
    return fetch('/api/chart/error/trend')
      .then(response => response.json())
      .then(json => dispatch(errorTrendChart(json)))
  }
}
