'use strict';
import transformDate from '../utils/transformDate';
import * as types from '../constants/actionType';
import packOptions from '../utils/packOptions';

function listMostError (json) {
  return {
    type: types.MOST_ERROR_LIST,
    most: json.result.map(archive => Object.assign({}, archive, {
      earliest: transformDate(archive.earliest),
      latest: transformDate(archive.latest)
    }))
  };
}

function listLatestError (json) {
  return {
    type: types.LATEST_ERROR_LIST,
    latest: json.result.map(archive => Object.assign({}, archive, {
      earliest: transformDate(archive.earliest),
      latest: transformDate(archive.latest)
    }))
  };
}

function listAllError (json) {
  return {
    type: types.ALL_ERROR_LIST,
    list: json.result.map(jsError => Object.assign({}, jsError, {
      fromNow :transformDate(jsError.date)
    })),
    meta: json.meta
  };
}

function listArchiveError (json) {
  return {
    type: types.ARCHIVE_ERROR_LIST,
    list: json.result.map(archive => Object.assign({}, archive, {
      earliest: transformDate(archive.earliest),
      latest: transformDate(archive.latest)
    })),
    meta: json.meta
  };
}

function listPageError (json) {
  return {
    type: types.PAGE_ERROR_LIST,
    list: json.result.map(archive => Object.assign({}, archive, {
      earliest: transformDate(archive.earliest),
      latest: transformDate(archive.latest)
    })),
    meta: json.meta
  };
}

function listBrowserError (json) {
  return {
    type: types.BROWSER_ERROR_LIST,
    list: json.result,
    meta: json.meta
  };
}

function listOSError (json) {
  return {
    type: types.OS_ERROR_LIST,
    list: json.result,
    meta: json.meta
  };
}

function archiveErrorStatus (json, id) {
  return {
    type: types.ARCHIVE_ERROR_UPDATE,
    props: Object.assign(json.result, { id })
  };
}

export function fetchMostErrorList () {
  return dispatch => {
    //dispatch(loadingShow);
    return packOptions()
      .then(options => fetch('/api/error/list/most', options))
      .then(response => response.json())
      .then(json => dispatch(listMostError(json)));
  };
}

export function fetchLatestErrorList () {
  return dispatch => {
    //dispatch(loadingShow);
    return packOptions()
      .then(options => fetch('/api/error/list/latest', options))
      .then(response => response.json())
      .then(json => dispatch(listLatestError(json)));
  };
}

export function fetchAllErrorList (params) {
  return dispatch => {
    //dispatch(loadingShow);
    return packOptions(params)
      .then(options => fetch('/api/error/list/all/' + params.page, options))
      .then(response => response.json())
      .then(json => dispatch(listAllError(json)));
  };
}

export function fetchArchiveErrorList (params) {
  return dispatch => {
    //dispatch(loadingShow);
    return packOptions(params)
      .then(options => fetch('/api/error/list/archive/' + params.page, options))
      .then(response => response.json())
      .then(json => dispatch(listArchiveError(json)));
  };
}

export function fetchPageErrorList (params) {
  return dispatch => {
    //dispatch(loadingShow);
    return packOptions(params)
      .then(options => fetch('/api/error/list/page/' + params.page, options))
      .then(response => response.json())
      .then(json => dispatch(listPageError(json)));
  };
}

export function fetchBrowserErrorList (params) {
  return dispatch => {
    //dispatch(loadingShow);
    return packOptions(params)
      .then(options => fetch('/api/error/list/browser/', options))
      .then(response => response.json())
      .then(json => dispatch(listBrowserError(json)));
  };
}

export function fetchOSErrorList (params) {
  return dispatch => {
    //dispatch(loadingShow);
    return packOptions(params)
      .then(options => fetch('/api/error/list/os/', options))
      .then(response => response.json())
      .then(json => dispatch(listOSError(json)));
  };
}

export function updateArchiveErrorStatus (id, status) {
  return dispatch => {
    //dispatch(loadingShow);
    return fetch(`/api/archive/update/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({status}),
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(json => dispatch(archiveErrorStatus(json, id)));
  }
}
