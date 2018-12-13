'use strict';
const fs = require("fs");
const mongoose = require('mongoose');
const formidable = require('formidable');
mongoose.connect('mongodb://localhost/test');
const util =require('util')
const express = require('express');
const router = express.Router();

require('../../models/episode');
const Episode = mongoose.model('Episode');
require('../../models/saga');
const Saga = mongoose.model('Saga');
const login = require('connect-ensure-login');





module.exports = router;