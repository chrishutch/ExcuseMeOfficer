const db = require("../models");

// Defining methods for the reviewController
module.exports = {
  findAll: function(req, res) {
    db.Review
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Review
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // findByCity: function(req, res) {
  //   db.Review
  //     .findByCity(req.params.city)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
    findByZip: function(req, res) {
    let searchTerm = new RegExp(req.params.zipcode + '.*', 'i')
    db.Review
      .find(`{ zipcode: '${searchTerm}'}`)
      .sort({ date: -1 }) 
      .then(dbModel => {
        console.log('dbModel', dbModel)
        res.json(dbModel)})
      .catch(err => {
        console.log(err)
        res.status(422).json(err)}); 
  },
  create: function(req, res) {
    db.Review
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Review
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Review
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
