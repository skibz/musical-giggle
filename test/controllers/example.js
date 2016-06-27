
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

var ctrls = require('../../src/controllers/example')

ctrls.forEach(function (ctrl) {
  describe(`${ctrl.method.toUpperCase()} ${ctrl.uri}`, function() {
    it('should return via callback', function(done) {
      ctrl.handler(null, mockRes(done))
    })
  })
})
