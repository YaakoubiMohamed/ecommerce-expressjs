const { Panier, LigneCommande } = require('../models');

// Controller methods
const getAllPaniers = async (req, res) => {
  try {
    const paniers = await Panier.findAll({ include: LigneCommande });
    res.json(paniers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPanierById = async (req, res) => {
  const cartID = req.params.cartID;
  try {
    const panier = await Panier.findByPk(cartID, { include: LigneCommande });
    if (panier) {
      res.json(panier);
    } else {
      res.status(404).json({ message: 'Panier not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPanier = async (req, res) => {
  const { userID } = req.body;
  try {
    const newPanier = await Panier.create({ userID });
    res.status(201).json(newPanier);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePanierById = async (req, res) => {
  const cartID = req.params.cartID;
  const { userID } = req.body;
  try {
    const panier = await Panier.findByPk(cartID);
    if (panier) {
      await panier.update({ userID });
      res.json(panier);
    } else {
      res.status(404).json({ message: 'Panier not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePanierById = async (req, res) => {
  const cartID = req.params.cartID;
  try {
    const panier = await Panier.findByPk(cartID);
    if (panier) {
      await panier.destroy();
      res.json({ message: 'Panier deleted successfully' });
    } else {
      res.status(404).json({ message: 'Panier not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllPaniers,
  getPanierById,
  createPanier,
  updatePanierById,
  deletePanierById,
};
