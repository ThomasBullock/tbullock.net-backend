'use strict';
module.exports = (sequelize, DataTypes) => {
  const Graph = sequelize.define('Graph', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    data: DataTypes.STRING
  }, {});
  Graph.associate = function(models) {
    // associations can be defined here
  };
  return Graph;
};