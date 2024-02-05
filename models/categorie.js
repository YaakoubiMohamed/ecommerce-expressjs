const { Squelize, DataTypes } = require('sequelize');

db = require('./index');

const sequelize = db.sequelize;

const Categorie =  sequelize.define("Categorie",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nom:{
        type: DataTypes.STRING,
        allowNull: false
    },
});


module.exports = Categorie;