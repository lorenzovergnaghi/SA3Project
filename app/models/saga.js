const mongoose = require('mongoose');
// require('./episode');
// const Episode = mongoose.model('Episode');
const SagaSchema = new mongoose.Schema(
  {
    name : {type: String, required : true},
    files : {type:[String], required : false},
    image : {type:String, required:true}
  }
);
mongoose.model('Saga', SagaSchema);
const Saga = mongoose.model('Saga');
module.exports = SagaSchema;
