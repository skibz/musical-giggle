
# musical-giggle

this scaffold follows a convention of exporting routes from any file in the `src/controllers` directory.

testability is achieved by only importing the route handlers into the test harness runtime and then mocking the request and response streams to avoid hitting a live http server.

##### routes

```javascript
// it's possible to export an array of these objects, too
module.exports = {
  uri: '/',
  method: 'get',
  handler: function(req, res) {
    return res.end('hello, world!')
  }
}
```

##### todos

* recursive directory walking from `src/controllers`
* route and test generator
* factor out mocking of express's request and response streams
* codeclimate test coverage reporting
