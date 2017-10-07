var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  productId: String,
  name: String,
  date: Date,
  comment: String
});

module.exports = mongoose.model('comment', CommentSchema, 'comment');
