
var fs = require('fs')
var path = require('path')
var mongoose = require('mongoose')

var dbName = 'dojo_1955_api'
mongoose.connect(`mongodb://localhost/${dbName}`)
mongoose.Promise = global.Promise // override mongooses promise functionality
