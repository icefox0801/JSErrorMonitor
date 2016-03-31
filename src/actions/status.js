'use strict';

import _ from 'lodash';
import * as types from '../constants/actionType';

export function setStatus (value) {
  return {
    type: types.STATUS_SET,
    status: value
  }
}
