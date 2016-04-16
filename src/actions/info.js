'use strict';

import _ from 'lodash';

import transformDate from '../utils/transformDate';
import * as types from '../constants/actionType';

function getArchiveDetail (json) {
  return {
    type: types.ARCHIVE_DETAIL,
    list: json.result.map(jsError => _.update(jsError, 'date', date => transformDate(date))),
    abstract: _.chain(json.abstract).update('earliest', (date => transformDate(date))).update('latest', (date => transformDate(date))).value()
  };
}

function getArchiveDetailMore (json) {
  return {
    type: types.ARCHIVE_DETAIL_MORE,
    list: json.result.map(jsError => _.update(jsError, 'date', date => transformDate(date)))
  };
}

function setArchiveProps (json) {
  return {
    type: types.ARCHIVE_UPDATE,
    props: json.result
  };
}

export function fetchArchiveDetail (id) {
  return dispatch => {
    //dispatch(loadingShow);
    return fetch(`/api/archive/detail/${id}`)
      .then(response => response.json())
      .then(json => dispatch(getArchiveDetail(json)));
  }
}

export function fetchArchiveDetailMore (id, skip) {
  return dispatch => {
    //dispatch(loadingShow);
    return fetch(`/api/archive/detail/${id}/${skip}`)
      .then(response => response.json())
      .then(json => dispatch(getArchiveDetailMore(json)));
  }
}

export function updateArchiveStatus (id, status) {
  return dispatch => {
    //dispatch(loadingShow);
    return fetch(`/api/archive/update/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status })
    })
      .then(response => response.json())
      .then(json => dispatch(setArchiveProps(json)));
  }
}
