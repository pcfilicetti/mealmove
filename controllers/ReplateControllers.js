const db = require("../models");

module.exports = {

    findAll: function(req, res) {
        db.Donor
        .find(req.query)
        // dunno if we will use line 9
        // .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findAll: function(req, res) {
        db.Volunteer
        .find(req.query)
        // same as above not sure if we will use this line
        // .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.Donor
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.Volunteer
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        db.Donor
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        db.Volunteer
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // update the user info
    update: function(req, res) {
        db.Donor
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => req.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        db.Volunteer
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
        db.Donor
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
        db.Volunteer
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};