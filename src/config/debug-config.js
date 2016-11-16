'use strict'

const env = require('../env')
const debug = require('debug')

module.exports = (moduleName) => {
  let _custonDebug = debug(`${env.applicationName}:${moduleName}`)
  return function show (message) {
    _custonDebug(message)
  }
}
