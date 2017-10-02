var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/assets/image/product/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.toString())
  }
});

var upload = multer({ storage: storage }).single('image');
//
// multer.prototype.removeFile = function removeFile (req, file, cb) {
//   this.storage._removeFile(req, file, cb)
// }

router.post('/', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      // An error occurred when uploading
    }

    res.json({
      success: true,
      message: 'Image uploaded!'
    });
  })
});


module.exports = router;
