
'use strict'

var http = require('http')

var chai = require('chai')
var expect = chai.expect

var server = require('../'), server;

describe('server', function() {

  before(function(done) {
    server = server(8888, done)
  })

  after(function(done) {
    server.close(done)
  })

  it('should return 404 if the uri does not exist', function(done) {
    http.get('http://localhost:8888/ljasdfljsdf', function(res) {
      expect(res.statusCode).to.equal(404)
      done()
    }).on('error', done)
  })
})
