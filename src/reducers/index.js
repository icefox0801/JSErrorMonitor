'use strict';

import globalReducer from './global';
import filterReducer from './filter';
import jsErrorReducer from './jsError';
import chartReducer from './chart';

exports.global = globalReducer;
exports.filter = filterReducer;
exports.jsError = jsErrorReducer;
exports.chart = chartReducer;
