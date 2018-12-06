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
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.writeHead(302,{'Location':'http://localhost:3000'}).end();
  });





module.exports = router;
