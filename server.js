var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');

var app = new express();

var port = process.env.PORT || 3000;

var api = require('./server/routes/api');

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(morgan('dev'));

app.use('/api', api);

//app.use(forceSSL());

app.get('*', function (req, res) {
  res.sendfile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function () {
  console.log("Listening port : " + port);
});
