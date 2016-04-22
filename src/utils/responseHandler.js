'use strict';

import nprogress from 'nprogress';
import { push } from 'react-router-redux';

export default dispatch => response => response.json()
  .then(json => new Promise(function (resolve, reject) {
    switch (response.status) {
      case 401:
        reject(new Error(json.message));
        nprogress.done();
        dispatch(push('/login'));
        break;
      default:
        resolve(json);
    }
  }), error => new Promise(function (resolve, reject) {
    reject(error);
  }));
