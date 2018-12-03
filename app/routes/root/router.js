/** @module root/router */
'use strict';
const formidable = require('formidable');
const fs = require("fs");
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

const express = require('express');
const router = express.Router();

require('../../models/episode');
const Episode = mongoose.model('Episode');


const util = require('util');
const default_headers = {'Content-Type': 'text.html; cahrset = utf-8'};
const http = require('http');
const url	= require('url');





router.get('/', function(req, res){
  Episode.find({},function(err,foundAll){
      if (err) {
        res.status(404).end();
      }else {
        console.log(foundAll[0]);
        let mod = {
          x : foundAll
        }
        res.render('index', mod);
      }});
});

router.get('/storage/testFile.mp4',function(req,res){
  console.log('recived req');

  req.status(200).end();

});

/** router for /root */
module.exports = router;
