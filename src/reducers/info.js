'use strict';

import * as types from '../constants/actionType';

function infoReducer (state = { abstract: { browsers: [],  os: [] }, list: [] }, action) {
  switch(action.type) {
    case types.ERROR_DETAIL:
      return Object.assign({}, state, {
        list: action.list,
        abstract: action.abstract
      });
    case types.ERROR_UPDATE:
      let abstract = Object.assign({}, state.abstract, action.props);
      return Object.assign({}, state, { abstract });
    default:
      return state;
  }
}

export default infoReducer;
