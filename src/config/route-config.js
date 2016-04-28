'use strict';

var config = {}
  , path = require('path')
  , fs = require('fs')
  , env = require('../env');

config.configRoutes = function(app) {
  var _routePath = path.join(__dirname, '../routes')
    , _fileNames = fs.readdirSync(_routePath);

  _fileNames.forEach(function(fileName) {
    var routeConfig = require(path.join(_routePath, fileName));
    app.use(routeConfig);
  });
}

module.exports = config;
