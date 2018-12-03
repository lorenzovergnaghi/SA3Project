const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const dust = require('klei-dust');
const methodOverride = require('method-override');
const dust_link = require('dustjs-linkedin');
const dust_helpers = require('dustjs-helpers');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


const app = express();
//configure app
//SET DUST ENGINE
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');
app.engine('dust', dust.dust);


app.use(logger('dev'))
//SET JSON AND ENCODED PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
//SET REQUESTS TO SEARCH IN ./public
app.use(express.static(path.join(__dirname, 'public')));

// Initialize routers here
const routers = require('./routes/routers');
app.use(methodOverride('_method'));
app.use('/', routers.root);
app.use('/watching', routers.watching);
app.use('/upload', routers.upload);



module.exports = app;
