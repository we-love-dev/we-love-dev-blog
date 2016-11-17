'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const routeManager = require('./config/route-config')
const compression = require('compression')
const app = express()
require('./config/db-config')

app.disable('x-powered-by')

// Enable gzip
app.use(compression())

// Config bodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Config handlebars
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.use('/public', express.static('dist', { maxAge: '1d' }))

// Config routes
routeManager.configRoutes(app)

module.exports = app
