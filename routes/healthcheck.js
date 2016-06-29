
'use strict'

module.exports = {
  uri: '/healthcheck',
  method: 'get',
  callback: function(req, res) {
    return res.json({healthy: true}, 200)
  }
}
