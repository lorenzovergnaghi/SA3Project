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
  // Episode.find({},function(err,foundAll){
  //     if (err) {
  //       res.render('index');
  //     }else {
  //       let mod = {
  //         x : foundAll
  //       }
  //       res.render('index',mod);
  //     }});
  res.redirect('/home')
});

router.get('/storage',function(req,res){
  req.status(200).end();
});

/** router for /root */
module.exports = router;
