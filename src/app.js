'use strict';

var express = require('express')
  , bodyParser = require('body-parser')
	, exphbs = require('express-handlebars')
	, db = require('./config/db-config')
  , routeManager = require('./config/route-config')
  , app = express();

app.disable('x-powered-by');

// Config bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Config handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use('/public', express.static('public'));

// Config routes
routeManager.configRoutes(app);

module.exports = app;
