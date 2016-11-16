'use strict'

var env = {
  applicationName: 'we-love-dev',
  port: process.env.PORT || 3000,
  db: {
    DB_URI: process.env.DB_URI || 'mongodb://dev:dev@ds039860.mlab.com:39860/we-love-dev',
    DB_CREDENTIAL: {user: process.env.DB_USER || '', pass: process.env.DB_PASS || ''}
  }
}

module.exports = Object.freeze(env)
