/** @module root/router */
'use strict';
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const express = require('express');
const router = express.Router();

require('../../models/user');
const User = mongoose.model('User');

const util = require('util');
const default_headers = {'Content-Type': 'text.html; cahrset = utf-8'};
const http = require('http');
const url	= require('url');
const login = require('connect-ensure-login');

router.get('/',
    // login.ensureLoggedIn(),
    function(req, res){
  res.redirect('login');
});

router.post('/',
function(req,res){
  console.log(req.body);
  if (req.body.password[0] === req.body.password[1]) {
      res.render('register', {x:req.body});
  }else {
    let msg = ["passwords don't match",undefined];
    res.render('register', {x:{lname:req.body.lname, email:req.body.email, password:msg}});
  }
});

/** router for /root */
module.exports = router;
