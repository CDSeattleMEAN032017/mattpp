
var mongoose = require('mongoose')

var friendSchema = new mongoose.Schema({
  fName: { type: String, min: 4, required: true },
  lName: { type: String, min: 4, required: true },
  bDay: { type: Date, default: Date.now }
}, { timestamps: true })

module.exports = mongoose.model('Friend', friendSchema)
