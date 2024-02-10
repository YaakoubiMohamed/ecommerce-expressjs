const { Produit } = require('../models');

// Controller methods
const getAllProduits = async (req, res) => {
  try {
    const produits = await Produit.findAll();
    res.json(produits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProduitById = async (req, res) => {
  const produitID = req.params.produitID;
  try {
    const produit = await Produit.findByPk(produitID);
    if (produit) {
      res.json(produit);
    } else {
      res.status(404).json({ message: 'Produit not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProduit = async (req, res) => {
  const { produitName, price, categorieID } = req.body;
  try {
    const newProduit = await Produit.create({ produitName, price, categorieID });
    res.status(201).json(newProduit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProduitById = async (req, res) => {
  const produitID = req.params.produitID;
  const { produitName, price, categorieID } = req.body;
  try {
    const produit = await Produit.findByPk(produitID);
    if (produit) {
      await produit.update({ produitName, price, categorieID });
      res.json(produit);
    } else {
      res.status(404).json({ message: 'Produit not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProduitById = async (req, res) => {
  const produitID = req.params.produitID;
  try {
    const produit = await Produit.findByPk(produitID);
    if (produit) {
      await produit.destroy();
      res.json({ message: 'Produit deleted successfully' });
    } else {
      res.status(404).json({ message: 'Produit not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProduits,
  getProduitById,
  createProduit,
  updateProduitById,
  deleteProduitById,
};
