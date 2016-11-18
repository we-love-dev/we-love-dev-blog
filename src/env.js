'use strict'

var env = {
  applicationName: 'we-love-dev',
  port: process.env.PORT || 3000,
  isProduction: true,
  db: {
    uri: process.env.DB_URI || 'mongodb://dev:dev@ds039860.mlab.com:39860/we-love-dev',
    options: {
      user: process.env.DB_USER || '',
      pass: process.env.DB_PASS || ''
    }
  },
  public: {
    build: {
      path: './dist',
      js: { src: './public/js', target: './dist/js' },
      css: { src: './public/css', target: './dist/css' },
      imgs: { src: './public/img', target: './dist/img' },
      icons: { src: './public/img/icons', target: './dist/img/icons' },
      fonts: { src: './public/font', target: './dist/font' },
      vendor: {
        js: { src: './public/vendor/js', target: './dist/vendor/js' },
        css: { src: './public/vendor/css', target: './dist/vendor/css' }
      }
    }
  }
}

module.exports = Object.freeze(env)
