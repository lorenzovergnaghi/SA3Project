/** @module root/router */
'use strict';
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

const express = require('express');
const router = express.Router();

const util = require('util');
const default_headers = {'Content-Type': 'text.html; cahrset = utf-8'};
const http = require('http');
const url	= require('url');





router.get('/', function(req, res){
    res.render('home');
});


/** router for /root */
module.exports = router;
