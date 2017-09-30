var express = require('express');
var mongoose = require('mongoose');
var Product = require('../models/product.js');
var Category = require('../models/category.js');
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

// Get All Products By CategoryType
router.get('/products/type/:categoryType', function (req, res) {
  Product.find({'categoryType': req.params.categoryType})
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
  Product.findById(req.params.id, function (err, product) {
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

// Get All Categories
router.get('/categories', function (req, res) {
  Category.find({})
    .exec(function (err, categories) {
      if (err) {
        console.log('Error ')
      } else {
        res.json(categories);
      }
    });
});

// Get All Categories
// router.get('/categories', function (req, res) {
//   Product.aggregate([{
//     $lookup: {
//       from: "category", // collection name in db
//       localField: "categoryType",
//       foreignField: "type",
//       as: "productTmp"
//     }}
//     ,{
//     $group:
//       {
//         _id: "$categoryType",
//         total:
//           {
//             $sum: 1
//           }
//       }
//   }], function (err, categories) {
//     if (err) {
//       console.log('Error ')
//     } else {
//       console.log(categories);
//       res.json(categories);
//
//     }
//   });
// });

// Get A Category
router.get('/categories/:id', function (req, res) {
  Category.findById(req.params.id, function (err, category) {
    if (err) {
      console.log('Error ')
    } else {
      res.json(category);
    }
  });
});

// Create A Category
router.post('/categories', function (req, res) {
  Category.create(req.body, function (err, category) {
    if (err) {
      console.log('Error ')
    } else {
      res.json(category);
    }
  });
});

// Update A Category
router.put('/categories/:id', function (req, res) {
  Category.update({_id: req.params.id}, req.body, function (err, category) {
    if (err) {
      console.log('Error ')
    } else {
      res.json(category);
    }
  });
});

// Delete A Category
router.delete('/categories/:id', function (req, res) {
  Category.deleteOne({_id: req.params.id}, function (err, category) {
    if (err) {
      console.log('Error ')
    } else {
      res.json(category);
    }
  });
});


module.exports = router;
