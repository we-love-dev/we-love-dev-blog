'use strict';

var env = require('../env')
  , debug = require('debug');

module.exports = function(moduleName) {
  let _custonDebug = debug(env.applicationName + ':' + moduleName);
  return function show(message) {
    _custonDebug(message);
  };
};
