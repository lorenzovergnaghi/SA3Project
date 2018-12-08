const mongoose = require('mongoose');
// require('./episode');
// const Episode = mongoose.model('Episode');
// Role = require('./role.js'),
Episode = require('./episode');
const SagaSchema = new mongoose.Schema(
  {
    name : {type: String, required : true},
    episodes : {type:[Episode], required : true,defauld:[]},
    image : {type:String, required:true}
  }
);
mongoose.model('Saga', SagaSchema);
const Saga = mongoose.model('Saga');
module.exports = SagaSchema;
