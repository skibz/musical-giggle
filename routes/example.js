
'use strict'

module.exports = [
  {
    uri: '/',
    method: 'all',
    callback: function (req, res) {
      return res.end('hello, world')
    }
  }
]
