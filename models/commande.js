const { Sequelize, DataTypes } = require('sequelize');

const db = require('./index');
const sequelize = db.sequelize;

const Commande = sequelize.define('commande', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Commande