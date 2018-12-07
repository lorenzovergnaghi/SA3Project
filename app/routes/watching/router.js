/** @module favorite/watching */
'use strict';

const http = require('http');
const express = require('express');
const router = express.Router();


router.get('/', function(req,res){
  console.log('PIPPA2');
  let jo = {
    name : 'nome',
    src : '/storage/testFile.mp4'
  };
  res.json(jo);
});




module.exports = router;
