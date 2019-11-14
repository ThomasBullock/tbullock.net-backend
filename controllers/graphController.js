const db = require("../models"); // new require for db object

exports.getAll = (req, res) => {
  return db.Graph.findAll().then(data => {
    res.json(data);
  });
};

exports.getById = (req, res) => {
  return db.Graph.findOne({
    where: {
      username: req.params.id
    }
  }).then(data => {
    res.json(data);
  });
};

exports.updateOne = (req, res) => {};

exports.create = (req, res) => {
  console.log(req.body);
  return db.Graph.create({
    ...req.body
  }).then(data => {
    console.log(data);
    res.json(data);
  });
};

exports.deleteOne = (req, res) => {};
