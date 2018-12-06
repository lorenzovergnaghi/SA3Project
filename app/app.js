const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const dust = require('klei-dust');
const methodOverride = require('method-override');
const dust_link = require('dustjs-linkedin');
const dust_helpers = require('dustjs-helpers');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
require('./models/User');
const User = mongoose.model('User');

//passport
    var passport = require('passport');
    var Strategy = require('passport-local').Strategy;

    passport.use(new Strategy(
  function(username, password, cb) {
    db.users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));

  passport.serializeUser(function(user, cb) {
cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
db.users.findById(id, function (err, user) {
  if (err) { return cb(err); }
  cb(null, user);
});
});

const app = express();
//configure app
//SET DUST ENGINE
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');
app.engine('dust', dust.dust);

app.use(logger('dev'))
//SET JSON AND ENCODED PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
//SET REQUESTS TO SEARCH IN ./public
app.use(express.static(path.join(__dirname, 'public')));



//passport
    app.use(require('cookie-parser')());
    app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
    app.use(passport.initialize());
    app.use(passport.session());
// Initialize routers here
const routers = require('./routes/routers');
app.use(methodOverride('_method'));
app.use('/', routers.root);
app.use('/watching', routers.watching);
app.use('/upload', routers.upload);
app.use('/login', routers.login);
app.use('/home', routers.home);



module.exports = app;
