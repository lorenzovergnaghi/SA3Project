const mongoose = require('mongoose');
const EpisodeSchema = new mongoose.Schema(
  {
    name : {type: String, required : true},
    bookmarked : {type : Boolean, required:true},
    file : {type:String, required:true}
  }
);

mongoose.model('Episode', EpisodeSchema);

const Episode = mongoose.model('Episode');






module.exports = EpisodeSchema;
