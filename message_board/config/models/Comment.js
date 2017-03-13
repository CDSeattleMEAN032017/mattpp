
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CommentSchema = new Schema({
  posted_by: { type: String, required: true },
  text: { type: String, required: true },
  _post: { type: Schema.Types.ObjectId, ref: 'Post' }
}, { timestamps: true })

module.exports = mongoose.model('Comment', CommentSchema)
