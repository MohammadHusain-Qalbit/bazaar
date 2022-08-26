const { DataTypes } = require('sequelize');
const { db } = require("../../services/db.service");

const Directory = db.define('directory', {
    // Model attributes are defined here
    fname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gfname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mob1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mob2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ll: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Other model options go here
    tableName: "directory",
    timestamps: false
  });



  module.exports = {
    Directory
  }