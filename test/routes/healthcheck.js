
'use strict'

var chai = require('chai')
chai.use(require('sinon-chai'))
var expect = chai.expect
var express = require('sinon-express-mock')

var route = require('../../routes/healthcheck')

describe(`${route.method.toUpperCase()} ${route.uri}`, function() {
  it('should send a json response', function () {
    var res = express.mockRes()
    route.callback(null, res)
    expect(res.json).to.be.called
  })
})
