const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, unique: true, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  race: { type: String, default: "Unknown" },
  _reviewId: [{
  	type: Schema.Types.ObjectId,
  	ref: "Review"
  }]
  dateCreated: { type: Date, default: Date.now }
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;