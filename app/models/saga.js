const mongoose = require('mongoose');
const SagaSchema = new mongoose.Schema(
  {
    name : {type: String, required : true},
    files : {type:String, required : false}
  }
);
mongoose.model('Saga', SagaSchema);
const Saga = mongoose.model('Saga');
module.exports = SagaSchema;
