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
  let ep = {
    name: 'Death Note Ep.1',
    file : '/storage/testFileDN.mp4',
    id : 1
  };
  let epa = {
    name: 'Boruto Ep.1',
    file : '/storage/testFileBO.mp4',
    id : 2
  };
  let list = [ep,epa,epa,epa,epa,epa];
  let model = {
    x : list
  }
  res.render('index' , model);
    // Episode.find({name :'pippo'},(err,found)=>{
    //   if (err) {
    //     console.log('err');
    //     res.status(500).end();
    //   }else {
    //     res.render('index', {x:found});
    //   }
    // })
});

router.get('/storage/testFile.mp4',function(req,res){
  console.log('recived req');

  req.status(200).end();

});

/** router for /root */
module.exports = router;
