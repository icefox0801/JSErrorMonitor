'use strict';
import transformDate from '../utils/transformDate';
import * as types from '../constants/actionType';

function mostErrorList (json) {
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

function latestErrorList (json) {
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

function allErrorList (json) {
  return {
    type: types.ALL_ERROR_LIST,
    list: json.result.map(jsError => Object.assign(jsError, {
      fromNow :transformDate(jsError.date)
    })),
    meta: json.meta
  };
}

function archiveErrorList (json) {
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

function browserErrorList (json) {
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

export function fetchAllErrorList (params) {
  return dispatch => {
    //dispatch(loadingShow);
    return fetch('/api/error/list/all/' + params.page)
      .then(response => response.json())
      .then(json => dispatch(allErrorList(json)))
  };
}


export function fetchArchiveErrorList (params) {
  return dispatch => {
    //dispatch(loadingShow);
    return fetch('/api/error/list/archive/' + params.page)
      .then(response => response.json())
      .then(json => dispatch(archiveErrorList(json)))
  };
}

export function fetchBrowserErrorList (params) {
  return dispatch => {
    //dispatch(loadingShow);
    return fetch('/api/error/list/browser/' + params.page)
      .then(response => response.json())
      .then(json => dispatch(browserErrorList(json)))
  };
}
