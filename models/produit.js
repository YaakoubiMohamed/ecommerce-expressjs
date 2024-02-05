const { Squelize, DataTypes } = require('sequelize');

db = require('./index');

const sequelize = db.sequelize;


const Produit =  sequelize.define("Produit",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nom:{
        type: DataTypes.STRING,
        allowNull: false
    },
    prix:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    marque:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantite:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: true
    },
});


module.exports = Produit;