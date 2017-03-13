
var PORT = 8000
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var exphbs  = require('express-handlebars')
// var session = require('express-session') // for session

mongoose.connect('mongodb://localhost/dojo_message_board')
mongoose.Promise = global.Promise // override mongooses promise functionality

var app = express()
// MIDDLEWARE
// app.use(session({secret: 'mattrox'}));  // encryption session
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './static')))
app.set('views', path.join(__dirname, './views'))
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

require('./config/routes')(app)

app.listen(PORT, function() {
 console.log('listening on port ', PORT)
})
