const db = require("../models");

module.exports = {

    findAll: function(req, res) {
        db.Pickup
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.Pickup
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        db.Pickup
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        db.Pickup
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => req.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};