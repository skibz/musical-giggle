
'use strict'

module.exports = {
  uri: '/healthcheck',
  method: 'get',
  handler: function(req, res) {
    return res.status(200).end()
  }
}
