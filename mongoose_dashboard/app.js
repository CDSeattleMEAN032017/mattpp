
var PORT = 8000
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
// var session = require('express-session') // for session

mongoose.connect('mongodb://localhost/mongoose_dashboard')

var app = express()
// MIDDLEWARE
// app.use(session({secret: 'mattrox'}));  // encryption session
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './static')))
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'pug')

require('./config/routes')(app)

app.listen(PORT, function() {
 console.log('listening on port ', PORT)
})
