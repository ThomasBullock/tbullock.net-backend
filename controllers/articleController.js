const db = require("../models"); // new require for db object

exports.getAll = (req, res) => {
  return db.Article.findAll().then(data => {
    res.json(data);
  });
};

exports.getById = (req, res) => {
  return db.Article.findOne({
    where: {
      username: req.params.id
    }
  }).then(data => {
    res.json(data);
  });
};

exports.updateOne = (req, res) => {};

exports.create = (req, res) => {};

exports.deleteOne = (req, res) => {};
