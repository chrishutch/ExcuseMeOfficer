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
		  	gps:{
		  		longitude: Number,
		  		latitude: Number
		  	}
		  	required: true }],
  officername: [{body: String}],
  comments: [{ body: String, date: Date }],
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  feedback: { type: String, required: true },
  hidden: Boolean,
  user: {
  	type: Schema.ObjectId,
  	ref: "Users"
  }
  dateCreated: { type: Date, default: Date.now }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
