var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  quantity: Number,
  image: String,
  categoryType: String,
  rate: Number
});

module.exports = mongoose.model('product', ProductSchema, 'product');
