var mongoose = require('mongoose')

var SnakeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  blurb: { type: String, required: true, min: 6 },
  venomous: { type: Boolean, required: true },
  knows_steve_irwin: { type: Boolean, default: true }
}, { timestamps: true })

module.exports = mongoose.model('Snake', SnakeSchema)
