/** @module root/router */
'use strict';
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const express = require('express');
const router = express.Router();

const util = require('util');
const default_headers = {'Content-Type': 'text.html; cahrset = utf-8'};
const http = require('http');
const url	= require('url');
const login = require('connect-ensure-login');




router.get('/',
login.ensureLoggedIn(),
function(req,res){
  console.log('logout lol lol ');
  req.logout();
  console.log('GGGG');
  res.redirect('http://localhost:3000/login');
});


/** router for /root */
module.exports = router;
