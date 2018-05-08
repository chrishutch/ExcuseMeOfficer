const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  date: String,
  time: String,
  street: String,
	city: String,
	state: String,
	zipcode: String,
	county: String,
	country: String,
  officerName: String,
  officerBadge: String,
  ticketNumber: String,
  experience: String,
  rating: String,
  feedback: String,
  hidden: Boolean,
  // _userId: {
  // 	type: Schema.Types.ObjectId,
  // 	ref: "Users"
  // },
  created_at  : {type: Date, default: Date.now}
  // updated_at  : {type: Date}
});

// reviewSchema.pre('save', function(next) {
//   // get the current date
//   var currentDate = new Date();

//   // change the updated_at field to current date
//   this.updated_at = currentDate;

//   // if created_at doesn't exist, add to that field
//   if (!this.created_at)
//     this.created_at = currentDate;

//   next();
// });

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
