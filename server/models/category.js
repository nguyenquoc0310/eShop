var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
  type: String,
  name: String
});

module.exports = mongoose.model('category', CategorySchema, 'category');
