
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/fullstack_friends')
mongoose.Promise = global.Promise // override mongooses promise functionality
