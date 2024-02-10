const { Sequelize, DataTypes } = require('sequelize');

const db = require('./index.js');
const sequelize = db.sequelize;

// Define User model
const Panier = sequelize.define('panier', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

module.exports = Panier;