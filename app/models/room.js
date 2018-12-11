const mongoose = require('mongoose');
Episode = require('./episode');
Saga = require('./saga');
const RoomSchema = new mongoose.Schema(
  {
    name : {type: String, required : true},
    watching:{type:Saga,required:false},
    saga_id:{type: String, required : false}
  }
);
mongoose.model('Room', RoomSchema);
const Room = mongoose.model('Room');
module.exports = RoomSchema;
