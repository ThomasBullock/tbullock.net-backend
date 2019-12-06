"use strict";
module.exports = (sequelize, DataTypes) => {
  const Graph = sequelize.define(
    "Graph",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      data: DataTypes.STRING,
      type: DataTypes.STRING,
      xLabel: DataTypes.STRING,
      yLabel: DataTypes.STRING,
      slug: DataTypes.STRING,
      isLive: DataTypes.INTEGER
    },
    {}
  );
  Graph.associate = function(models) {
    // associations can be defined here
  };
  return Graph;
};
