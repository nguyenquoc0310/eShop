var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price : Number,
  quantity : Number,
  image : String
});

module.exports = mongoose.model('product', ProductSchema, 'product');
