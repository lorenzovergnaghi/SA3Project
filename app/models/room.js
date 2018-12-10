const mongoose = require('mongoose');
Episode = require('./episode');
const RoomSchema = new mongoose.Schema(
  {
    name : {type: String, required : true}
  }
);
mongoose.model('Room', RoomSchema);
const Room = mongoose.model('Room');
module.exports = RoomSchema;
