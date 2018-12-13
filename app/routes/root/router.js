/** @module root/router */
'use strict';
const formidable = require('formidable');
const fs = require("fs");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const express = require('express');
const router = express.Router();

require('../../models/episode');
const Episode = mongoose.model('Episode');
const login = require('connect-ensure-login');
const util = require('util');
const default_headers = {'Content-Type': 'text.html; cahrset = utf-8'};
const http = require('http');
const url	= require('url');




//,login.ensureLoggedIn()
router.get('/',
login.ensureLoggedIn(),
function(req, res){
  res.redirect('/home')
});

router.get('/storage',function(req,res){
  req.status(200).end();
});

router.post('/',function(req,res){
  console.log(req.query);
  console.log(req.body);
  res.redirect('/');
});

/** router for /root */
module.exports = router;
