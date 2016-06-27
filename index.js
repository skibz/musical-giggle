
'use strict'

var NODE_ENV = process.env.NODE_ENV || 'development'

var cors = require('cors')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var express = require('express')

module.exports = function(port, onListening) {
  var server = express()

  server.use(cors())
  server.use(bodyParser.json())
  if (NODE_ENV === 'development') server.use(morgan('dev'))

  // register all controllers
  require('./src')(server)

  server.use(function(err, req, res, next) {
    return res.status(404).json({
      status: 404,
      error: true,
      message: 'not found'
    })
  })

  return server.listen(port, onListening)

}
