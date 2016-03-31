'use strict';

import globalReducer from './global';
import filterReducer from './filter';
import statusReducer from './status';
import jsErrorReducer from './jsError';
import chartReducer from './chart';

exports.global = globalReducer;
exports.filter = filterReducer;
exports.status = statusReducer;
exports.jsError = jsErrorReducer;
exports.chart = chartReducer;
