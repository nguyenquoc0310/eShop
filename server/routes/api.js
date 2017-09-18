var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

var db = 'mongodb://quocn:1234@ds135384.mlab.com:35384/book';
mongoose.Promise = global.Promise;

// Get All Books
router.get('/eshop', function (req, res) {
  console.log('Error ');
  res.send('This is a web shop !!!!');
});

module.exports = router;
