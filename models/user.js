const { Squelize, DataTypes } = require('sequelize');

db = require('./index');

const sequelize = db.sequelize;


const User =  sequelize.define("User",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nom:{
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique : true,
        validate : { isEmail: true}
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    adresse:{
        type: DataTypes.STRING,
        allowNull: true
    },
    telephone:{
        type: DataTypes.STRING,
        allowNull: false        
    },
    ville:{
        type: DataTypes.STRING,
        allowNull:true
    }
});


module.exports = User;