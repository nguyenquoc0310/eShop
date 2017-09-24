var express = require('express');
var mongoose = require('mongoose');
var Product = require('../models/product.js')
var router = express.Router();

var db = 'mongodb://quocn:1234@ds147974.mlab.com:47974/eshop';
mongoose.Promise = global.Promise;

mongoose.connect(db, {useMongoClient: true}, function (err, res) {
  if (err) {
    console.log('Failed to connected to ' + db);
  } else {
    console.log('Connected to ' + db);
  }
});

// Get All Products
router.get('/products', function (req, res) {
  Product.find({})
    .exec(function (err, products) {
      if (err) {
        console.log('Error ')
      } else {
        res.json(products);
      }
    });
});

// Get A Product
router.get('/products/:id', function (req, res) {
  Product.find({_id: req.params.id})
    .exec(function (err, product) {
      if (err) {
        console.log('Error ')
      } else {
        res.json(product);
      }
    });
});

// Create A product
router.post('/products', function (req, res) {
  Product.create(req.body, function (err, product) {
    if (err) {
      console.log('Error ')
    } else {
      res.json(product);
    }
  });
});

// Update A product
router.put('/products/:id', function (req, res) {
  Product.update({_id: req.params.id}, req.body, function (err, product) {
    if (err) {
      console.log('Error ')
    } else {
      res.json(product);
    }
  });
});

// Delete A product
router.delete('/products/:id', function (req, res) {
  Product.deleteOne({_id: req.params.id}, function (err, product) {
    if (err) {
      console.log('Error ')
    } else {
      res.json(product);
    }
  });
});

module.exports = router;
