"use strict";
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "Article",
    {
      title: DataTypes.STRING,
      tags: DataTypes.STRING,
      content: DataTypes.STRING,
      slug: DataTypes.STRING,
      isLive: DataTypes.INTEGER
    },
    {}
  );
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};
