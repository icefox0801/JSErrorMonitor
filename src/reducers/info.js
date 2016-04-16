'use strict';

import * as types from '../constants/actionType';

function infoReducer (state = { abstract: { browsers: [],  os: [] }, list: [] }, action) {
  switch(action.type) {
    case types.ARCHIVE_DETAIL:
      return Object.assign({}, state, {
        list: action.list,
        abstract: action.abstract
      });
    case types.ARCHIVE_UPDATE:
      let abstract = Object.assign({}, state.abstract, action.props);
      return Object.assign({}, state, { abstract });
    case types.ARCHIVE_DETAIL_MORE:
      let list = state.list.concat(action.list);
      return Object.assign({}, state, { list });
    default:
      return state;
  }
}

export default infoReducer;
