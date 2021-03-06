const db = require("../models"); // new require for db object

exports.getAll = (req, res) => {
  return db.Graph.findAll().then(data => {
    res.json(data);
  });
};

exports.getById = (req, res) => {
  return db.Graph.findOne({
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.json(data);
  });
};

exports.getBySlug = (req, res) => {
  console.log("get article == " + req.params.slug);
  return db.Graph.findOne({
    where: {
      slug: req.params.slug
    }
  }).then(data => {
    res.status(200).json(data);
  });
};

exports.updateOne = (req, res) => {};

exports.create = (req, res) => {
  console.log(req.body);
  return db.Graph.create({
    ...req.body
  }).then(data => {
    console.log(data);
    res.status(201).json(data);
  });
};

exports.deleteOne = (req, res) => {
  res.status(204);
};
