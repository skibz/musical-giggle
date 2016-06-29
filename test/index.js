
'use strict'

var http = require('http')

var chai = require('chai')
var expect = chai.expect

var server = require('../'), instance;

before(function(done) {
  instance = server(8888, done)
})

after(function(done) {
  instance.close(done)
})

describe('server', function () {
  it('should respond over http', function (done) {
    http.get(
      'http://localhost:8888/',
      done.bind(done, null)
    ).on('error', done)
  });

  it('should return 404 if the uri does not exist', function (done) {
    http.get('http://localhost:8888/testing', function(res) {
      expect(res.statusCode).to.equal(404)
      done()
    }).on('error', done)
  })
})
