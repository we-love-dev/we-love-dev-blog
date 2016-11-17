'use strict'

const mongoose = require('mongoose')
const env = require('../env')
const debug = require('./debug-config')('db')

mongoose.Promise = global.Promise
mongoose.connect(env.db.uri, env.db.options)

const db = mongoose.connection

db.on('connected', () => {
  debug(`Connected with: ${env.db.uri}`)
})

db.on('open', function () {
  debug('MongoDB open.')
})

db.on('disconnected', function () {
  debug('MongoDB disconnected.')
})

db.on('error', function (err) {
  debug(`MongoDB error: ${err}`)
})

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    debug('MongoDB disconnected through app termination')
    process.exit(0)
  })
})

module.exports = db
