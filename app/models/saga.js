const mongoose = require('mongoose');
Episode = require('./episode');
const SagaSchema = new mongoose.Schema(
  {
    name : {type: String, required : true},
    episodes : {type:[Episode], required : true,defauld:[]},
    image : {type:String, required:false},
    last_watched : {type: Number, required : false, defauld:0},
    last_watched_time : {type: Number, required:false, default:0}
  }
);
mongoose.model('Saga', SagaSchema);
const Saga = mongoose.model('Saga');
module.exports = SagaSchema;
