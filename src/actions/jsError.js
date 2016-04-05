'use strict';
import transformDate from '../utils/transformDate';
import * as types from '../constants/actionType';
import packOptions from '../utils/packOptions';

function listMostError (json) {
  return {
    type: types.MOST_ERROR_LIST,
    most: json.result.map((jsError) => ({
      message: jsError._id.message,
      url: jsError._id.url,
      count: jsError.value.count,
      earliest: transformDate(jsError.value.earliest),
      latest: transformDate(jsError.value.latest)
    }))
  };
}

function listLatestError (json) {
  return {
    type: types.LATEST_ERROR_LIST,
    latest: json.result.map((jsError) => ({
      message: jsError._id.message,
      url: jsError._id.url,
      count: jsError.value.count,
      earliest: transformDate(jsError.value.earliest),
      latest: transformDate(jsError.value.latest)
    }))
  };
}

function listAllError (json) {
  return {
    type: types.ALL_ERROR_LIST,
    list: json.result.map(jsError => Object.assign(jsError, {
      fromNow :transformDate(jsError.date)
    })),
    meta: json.meta
  };
}

function listArchiveError (json) {
  return {
    type: types.ARCHIVE_ERROR_LIST,
    list: json.result.map(archive => ({
      message: archive._id.message,
      url: archive._id.url,
      status: archive.status || 'open',
      count: archive.count,
      earliest: transformDate(archive.earliest),
      latest: transformDate(archive.latest)
    }))
  };
}

function listBrowserError (json) {
  return {
    type: types.BROWSER_ERROR_LIST,
    list: json.result.map(browser => ({
      name: browser._id.name,
      count: browser.count,
      min: browser.min,
      max: browser.max
    }))
  };
}

export function fetchMostErrorList () {
  return dispatch => {
    //dispatch(loadingShow);
    return packOptions()
      .then(options => fetch('/api/error/list/most', options))
      .then(response => response.json())
      .then(json => dispatch(listMostError(json)))
  };
}

export function fetchLatestErrorList () {
  return dispatch => {
    //dispatch(loadingShow);
    return packOptions()
      .then(options => fetch('/api/error/list/latest', options))
      .then(response => response.json())
      .then(json => dispatch(listLatestError(json)))
  };
}

export function fetchAllErrorList (params) {
  return dispatch => {
    //dispatch(loadingShow);
    return packOptions(params)
      .then(options => fetch('/api/error/list/all/' + params.page, options))
      .then(response => response.json())
      .then(json => dispatch(listAllError(json)))
  };
}


export function fetchArchiveErrorList (params) {
  return dispatch => {
    //dispatch(loadingShow);
    return packOptions()
      .then(options => fetch('/api/error/list/archive/' + params.page, options))
      .then(response => response.json())
      .then(json => dispatch(listArchiveError(json)))
  };
}

export function fetchBrowserErrorList (params) {
  return dispatch => {
    //dispatch(loadingShow);
    return fetch('/api/error/list/browser/' + params.page)
      .then(response => response.json())
      .then(json => dispatch(listBrowserError(json)))
  };
}
