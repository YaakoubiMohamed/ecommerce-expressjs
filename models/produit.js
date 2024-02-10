const { Sequelize, DataTypes } = require("sequelize");

const db = require('./index.js');
const sequelize = db.sequelize;

const Produit = sequelize.define("produit", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prix: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 0, // Enforce non-negative price
        },
      },
      quantite: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0, // Enforce non-negative quantity
        },
      },
      marque: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
});

module.exports = Produit;