const { Sequelize, DataTypes } = require("sequelize");

const db = require('./index.js');
const sequelize = db.sequelize;

const LigneCommande = sequelize.define('ligneCommande', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    quantite: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    prixTotal: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

module.exports = LigneCommande;