
'use strict'

function mockRes(mochaDone) {
  var res = {}
  res.json = mochaDone.bind(mochaDone, null)
  res.end = mochaDone.bind(mochaDone, null)
  res.status = function() {
    return res
  }
  return res
}

var ctrl = require('../../src/controllers/healthcheck')

describe(`${ctrl.method.toUpperCase()} ${ctrl.uri}`, function() {
  it('should return via callback', function(done) {
    ctrl.handler(null, mockRes(done))
  })
})
