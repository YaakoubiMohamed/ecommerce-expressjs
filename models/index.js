const config = require('../config/config.js');
const mysql = require('mysql2');
const Sequelize = require('sequelize');

module.exports = db = {};

// create db if it doesn't already exist
const { host, port, user, password, database } = config.database;
const pool = mysql.createPool({ host, port, user, password });
pool.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

// connect to db
const sequelize = new Sequelize(database, user, password, {
    dialect: 'mysql',
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
    }
}
);
db.sequelize = sequelize;

// init the Employee and Categorie models and add them to the exported db object

const User = require('./user.js');
const Produit = require('./produit.js');
const Categorie = require('./categorie.js');
const Commande = require('./commande.js');
const LigneCommande= require("./ligne_cmd");
const Panier = require("./panier")

User.hasMany(Commande);
Commande.belongsTo(User);

Categorie.hasMany(Produit);
Produit.belongsTo(Categorie);

Commande.hasMany(LigneCommande);
LigneCommande.belongsTo(Commande);

Produit.hasMany(LigneCommande);
LigneCommande.belongsTo(Produit);

// Optional: Define associations for Panier
User.hasOne(Panier);
Panier.belongsTo(User);

Panier.hasMany(LigneCommande);
LigneCommande.belongsTo(Panier);

// sync all models with database
sequelize.sync({ force: false });



// db.Employee = Employee;

// db.Produit = Produit;

// db.Categorie = Categorie;

// db.Categorie.hasMany(Produit, { foreignKey: 'categorieId' });

// db.Produit.belongsTo(Categorie, { foreignKey: 'categorieId' });