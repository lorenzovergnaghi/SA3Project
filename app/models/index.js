/** @module models/index.js
* Loads all models
*/
'use strict';

const mongoose = require('mongoose');
require('./episode');

module.exports = {
  'Episode' : mongoose.model('Episode')
};
