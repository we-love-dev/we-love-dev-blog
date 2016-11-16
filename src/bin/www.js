'use strict'

const app = require('../app')
const env = require('../env')
const debug = require('../config/debug-config')('http:server')

app.listen(env.port, () => {
  debug(`Server port: ${env.port}`)
})
