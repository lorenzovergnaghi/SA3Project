/** @module favorite/login */
'use strict';

const http = require('http');
const passport = require('passport');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

require('../../models/user');
const User = mongoose.model('User');


router.get('/', function(req,res){
  res.render('login');
});

router.post('/',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router;
