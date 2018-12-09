const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const dust = require('klei-dust');
const methodOverride = require('method-override');
const dust_link = require('dustjs-linkedin');
const dust_helpers = require('dustjs-helpers');
const mongoose = require('mongoose');


require('./models/user');
const User = mongoose.model('User');
const app = express();
//passport
    var passport = require('passport');
    var LocalStrategy = require('passport-local');

    passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (user.password != password) { console.log('wrongPASS');return done(null, false); }
        return done(null, user);
      });
    }
  ));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
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
app.use('/favorites', routers.favorites);
app.use('/register', routers.register);
app.use('/search', routers.search);



module.exports = app;
