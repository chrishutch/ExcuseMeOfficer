import axios from "axios";

export default {
  // Gets all books
  getReviews: function() {
    return axios.get("/api/reviews");
  },
  // Gets the book with the given id
  getReview: function(id) {
    return axios.get("/api/reviews/" + id);
  },
  // Deletes the book with the given id
  deleteReview: function(id) {
    return axios.delete("/api/reviews/" + id);
  },
  // Saves a book to the database
  saveReview: function(reviewData) {
    return axios.post("/api/reviews", reviewData);
  }
};

