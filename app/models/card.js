const mongoose = require('mongoose');
const CardSchema = new mongoose.Schema(
  {
    name : {type: String, required : true},
    bookmarked : {type : Boolean, required:true},
    vodeos : {type : [Episode], default : [], required : true}
  }
);

mongoose.model('Card', CardSchema);

const Episode = mongoose.model('Card');






module.exports = CardSchema;
