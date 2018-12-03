/** @module root/router */
'use strict';
const fs = require("fs");
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

const express = require('express');
const router = express.Router();

require('../../models/episode');
const Episode = mongoose.model('Episode');

router.get('/', function(req, res){
  console.log('/upload:get');
  res.render('upload');
})

router.post('/', function(req, res){
  console.log('/upload:post');


  var form = new formidable.IncomingForm();
  form.on('progress', function(bytesReceived, bytesExpected) {
     console.log('bytesReceived :' + bytesReceived);
     console.log('bytesExpected :' + bytesExpected);
  });
  form.on('fileBegin', function(name, file) {
    file.pathname = './NodeStaticFiles/'+file.name;
    file.path = './NodeStaticFiles/'+file.name;
  });
  form.on('end', function() {
    console.log('file uploaded successfully');
  });


  form.uploadDir='../../public/storage';
  form.encoding = 'utf-8';
  form.keepExtensions = true;
  form.parse(req, (err, fields, files)=>{
    res.writeHead(201);
    res.end();
  });
});


/** router for /upload */
module.exports = router;
