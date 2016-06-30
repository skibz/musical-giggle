
'use strict'

var fs = require('fs')

var cors = require('cors')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var express = require('express')

var NODE_ENV = process.env.NODE_ENV || 'development'
var TESTING = NODE_ENV === 'testing' || (process.env._ || '').indexOf('istanbul') > -1

var server = express()

server.use(cors())
server.use(bodyParser.json())

if (!TESTING && NODE_ENV === 'development') {
  server.use(morgan('dev'))
}

fs.readdirSync(
  `${__dirname}/routes`
).map(function(file) {
  return require(`./routes/${file}`)
}).reduce(function(prev, curr) {
  return prev.concat(curr)
}).forEach(function(route) {
  server[route.method](
    route.uri,
    route.callback
  )
})

server.use(function(err, req, res, next) {
  return res.status(404).json({
    status: 404,
    error: true,
    message: 'not found'
  })
})

module.exports = server.listen.bind(server)
