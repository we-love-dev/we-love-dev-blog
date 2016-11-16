'use strict'

const path = require('path')
const fs = require('fs')
const config = {}

config.configRoutes = function (app) {
  let _routePath = path.join(__dirname, '../routes')
  let _fileNames = fs.readdirSync(_routePath)

  _fileNames.forEach(function (fileName) {
    var routeConfig = require(path.join(_routePath, fileName))
    app.use(routeConfig)
  })
}

module.exports = config
