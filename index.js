var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.json({
    msg: 'hello world',
    NODE_ENV: process.env.NODE_ENV,
    SY_KEY: process.env.SY_KEY,
  })
})

var port = process.env.PORT || 1337;
app.listen(port, () => console.log('Example app listening on port!', port))
