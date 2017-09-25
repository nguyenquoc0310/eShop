var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

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

app.use(cookieParser());

app.use(session({
  secret: 'eShopSecret',
  resave : false,
  saveUninitialized : false,
  store: new MongoStore({mongooseConnection : mongoose.connection}),
  cookie:{ maxAge : 180 * 60 * 1000}
}));

app.use(forceSSL());

app.get('*', function (req, res) {
  res.sendfile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function () {
  console.log("Listening port : " + port);
});
