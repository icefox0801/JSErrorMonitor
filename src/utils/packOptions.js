'use strict';

const packOptions = function (params) {
  return new Promise(function (resolve, reject) {

    try {
      var urlParams = {};
      var globalParams = {};
      var options = {};
      const business = localStorage.getItem('business');
      const timeRange = localStorage.getItem('timeRange');
      const platform = localStorage.getItem('platform');
      globalParams = { business, timeRange, platform };

      urlParams = Object.assign({}, params, globalParams);
      options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.assign({}, params || {}, globalParams))
      };
      resolve(options);
    } catch (err) {
      reject(err);
    }

  });
};

export default packOptions;
