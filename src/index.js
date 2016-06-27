
'use strict'

var fs = require('fs')

module.exports = function(express) {
  fs.readdirSync(
    __dirname + '/controllers'
  ).map(function(file) {
    return require('./controllers/' + file)
  }).reduce(function(prev, curr) {
    return prev.concat(curr)
  }).forEach(function(controller) {
    express[controller.method](
      controller.uri,
      controller.handler
    )
  })
}
