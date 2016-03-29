'use strict';
import transformDate from '../utils/transformDate';
import { MOST_ERROR_LIST, LATEST_ERROR_LIST, ALL_ERROR_LIST, ARCHIVE_ERROR_LIST } from '../constants/actionType';

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

function allErrorList (json) {
  return {
    type: ALL_ERROR_LIST,
    list: json.result.map(jsError => Object.assign(jsError, {
      fromNow :transformDate(jsError.date)
    }))
  };
}

function archiveErrorList (json) {
  return {
    type: ARCHIVE_ERROR_LIST,
    list: json.result.map(jsError => ({
      message: jsError._id.message,
      url: jsError._id.url,
      status: jsError.status || 'open',
      count: jsError.count,
      earliest: transformDate(jsError.earliest),
      latest: transformDate(jsError.latest)
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
    return fetch('/api/error/list/all')
      .then(response => response.json())
      .then(json => dispatch(allErrorList(json)))
  };
}


export function fetchArchiveErrorList (params) {
  return dispatch => {
    //dispatch(loadingShow);
    return fetch('/api/error/list/archive')
      .then(response => response.json())
      .then(json => dispatch(archiveErrorList(json)))
  };
}
