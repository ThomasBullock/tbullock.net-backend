const db = require("../models"); // new require for db object

exports.getAll = (req, res) => {
  return db.Article.findAll().then(data => {
    res.status(200).json(data);
  });
};

exports.getById = (req, res) => {
  console.log("get article == " + req.params.id);
  return db.Article.findOne({
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.status(200).json(data);
  });
};

exports.getBySlug = (req, res) => {
  console.log(req.params);
  console.log("get article slug == " + req.params.slug);
  return db.Article.findOne({
    where: {
      slug: req.params.slug
    }
  }).then(data => {
    res.status(200).json(data);
  });
};

exports.create = (req, res) => {
  console.log("!!!!CREATE Article!!!!");
  console.log(req.body);
  return db.Article.create({
    ...req.body
  }).then(data => {
    console.log("!!!!RES CREATED Article!!!!");
    console.log(data);
    res.status(201).json(data);
  });
};

exports.updateOne = (req, res) => {
  const updatedValues = { ...req.body };
  console.log("updateOne", updatedValues);
  return db.Article.update(updatedValues, {
    where: { id: updatedValues.id }
  }).then(result => {
    // here your result is simply an array with number of affected rows
    console.log(result);
    return res.status(204).json(result);
  });
};

exports.deleteOne = (req, res) => {
  console.log(req.params);
  res.status(204);
};
