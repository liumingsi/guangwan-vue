'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"http://demo2.kuateyi.site/gateway"',
  IMG_ROOT: '"http://demo2.kuateyi.site/gateway/file"'
})
