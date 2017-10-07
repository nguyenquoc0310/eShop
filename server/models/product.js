var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  quantity: Number,
  image: String,
  categoryType: String,
  commentNum: Number,
  feature : {
    screen: String,
    os: String,
    cameraFront: String,
    cameraAfter: String,
    cpu: String,
    ram: String,
    capital: String,
    storage: String,
    sim: String,
    pin: String
  }
});

module.exports = mongoose.model('product', ProductSchema, 'product');
