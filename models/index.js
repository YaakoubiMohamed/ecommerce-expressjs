const config = require('../config/config.js');
const mysql = require('mysql2');
const Sequelize = require('sequelize');

module.exports = db = {}

const {host, port, user, password, database} = config.database;
const pool = mysql.createPool({host, port, user, password});
pool.query(`CREATE DATABASE IF  NOT EXISTS ${database};`);



const sequelize = new Sequelize(database,user,password,{
    dialect: 'mysql',
    pool:{
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
    }
});

db.sequelize = sequelize

const User = require('./user.js');
const Produit = require('./produit.js');
const Categorie =require("./categorie");

Categorie.hasMany(Produit);
Produit.belongsTo(Categorie);

sequelize.sync({force: true})