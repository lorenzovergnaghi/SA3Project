/** @module favorite/login */
'use strict';

const http = require('http');
const passport = require('passport');
const express = require('express');
const router = express.Router();



router.get('/', function(req,res){
  res.render('login');
});

router.post('/',
  passport.authenticate('local'),
  function(req, res) {
    console.log('~ POST /login');
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.render('index');
  });




module.exports = router;
