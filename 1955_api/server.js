
var PORT = 8000
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var app = express()
app.use(bodyParser.json())

require('./server/config/mongoose_setup')

// load the routes
require('./server/config/routes')(app)

app.listen(PORT, function() {
 console.log('listening on port ', PORT)
})
