/** @module models/index.js
* Loads all models
*/
'use strict';

const mongoose = require('mongoose');
require('./episode');
require('./card');

module.exports = {
  'Episode' : mongoose.model('Episode'),
  'Card' : mongoose.model('Card')
};
