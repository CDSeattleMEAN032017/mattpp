
var PORT       = process.env.PORT || 8000
var express    = require('express')
var bodyParser = require('body-parser')
var path       = require('path')
var app        = express()

// load db
require('./server/config/dbConnection')

app.use(express.static(path.join(__dirname, 'client')))
app.use(express.static(path.join(__dirname, 'bower_components')))
app.use(bodyParser.json())

// load in routes
require('./server/config/routes')(app)

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`)
})
