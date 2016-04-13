'use strict';

import _ from 'lodash';

import transformDate from '../utils/transformDate';
import * as types from '../constants/actionType';

function getErrorDetail (json) {
  return {
    type: types.ERROR_DETAIL,
    list: json.result.map(jsError => _.update(jsError, 'date', date => transformDate(date))),
    abstract: _.chain(json.abstract).update('earliest', (date => transformDate(date))).update('latest', (date => transformDate(date))).value()
  };
}

function getErrorDetailMore (json) {
  return {
    type: types.ERROR_DETAIL_MORE,
    list: json.result.map(jsError => _.update(jsError, 'date', date => transformDate(date)))
  };
}

function setErrorProps (json) {
  return {
    type: types.ERROR_UPDATE,
    props: json.result
  };
}

export function fetchErrorDetail (id) {
  return dispatch => {
    //dispatch(loadingShow);
    return fetch(`/api/error/detail/${id}`)
      .then(response => response.json())
      .then(json => dispatch(getErrorDetail(json)));
  }
}

export function fetchErrorDetailMore (id, skip) {
  return dispatch => {
    //dispatch(loadingShow);
    return fetch(`/api/error/detail/${id}/${skip}`)
      .then(response => response.json())
      .then(json => dispatch(getErrorDetailMore(json)));
  }
}

export function updateErrorStatus (id, status) {
  return dispatch => {
    //dispatch(loadingShow);
    return fetch(`/api/error/detail/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status })
    })
      .then(response => response.json())
      .then(json => dispatch(setErrorProps(json)));
  }
}
