const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  date: { type: String, required: true },
  address: [{ street: String,
		  	city: String,
		  	state: String,
		  	zipcode: String,
		  	county: String,
		  	country: String,
		  	required: true }],
  officerName: [{body: String}],
  officerBadge: [{body: String}],
  ticketNumber: [{body: String}],
  comments: [{ body: String, date: Date }],
  location: { type: String, required: true },
  experience: { type: String, required: true },
  rating: { type: Number, required: true },
  feedback: { type: String, required: true },
  hidden: Boolean,
  user: {
  	type: Schema.ObjectId,
  	ref: "Users"
  },
  created_at  : {type: Date, default: Date.now},
  updated_at  : {type: Date}
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
