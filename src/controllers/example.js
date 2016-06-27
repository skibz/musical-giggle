
'use strict'

module.exports = [
  {
    uri: '/v1/example',
    method: 'get',
    handler: function(req, res) {
      return res.json({got: true})
    }
  },
  {
    uri: '/v1/another-example',
    method: 'post',
    handler: function (req, res) {
      return res.json({posted: true})
    }
  }
]
