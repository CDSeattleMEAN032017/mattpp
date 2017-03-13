
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PostSchema = new Schema({
  posted_by: { type: String, required: true, min: 4 },
  text: { type: String, required: true, min: 6 },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true })

module.exports = mongoose.model('Post', PostSchema)
