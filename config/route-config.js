'use strict';

var routeConfig = {}
  , main = require('../routes/main-route');

routeConfig.configPageRoutes = function (app) {
  app.use('/', main);
};

module.exports = routeConfig;
