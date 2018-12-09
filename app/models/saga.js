const mongoose = require('mongoose');
Episode = require('./episode');
const SagaSchema = new mongoose.Schema(
  {
    name : {type: String, required : true},
    episodes : {type:[Episode], required : true,defauld:[]},
    image : {type:String, required:true,default:'./storage/saga_covers/afro.jpg'},
    last_watched : {type: Number, required : true, defauld:0},
    last_watched_time : {type: Number, required:true, default:0}
  }
);
mongoose.model('Saga', SagaSchema);
const Saga = mongoose.model('Saga');
module.exports = SagaSchema;
