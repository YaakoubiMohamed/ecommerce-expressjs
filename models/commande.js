const { Sequelize, DataTypes } = require("sequelize");

const db = require('./index.js');
const sequelize = db.sequelize;

const Commande = sequelize.define('commande', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    commandeDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
});

module.exports = Commande;