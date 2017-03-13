
var mongoose = require('mongoose')

var PeopleSchema = new mongoose.Schema({
  name: { type: String, required: true }
}, { timestamps: true })

module.exports = mongoose.model('People', PeopleSchema)
