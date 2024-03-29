const { LigneCommande } = require('../models');

// Controller methods
const getAllLigneCommandes = async (req, res) => {
  try {
    const ligneCommandes = await LigneCommande.findAll();
    res.json(ligneCommandes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLigneCommandeById = async (req, res) => {
  const ligneCommandeID = req.params.ligneCommandeID;
  try {
    const ligneCommande = await LigneCommande.findByPk(ligneCommandeID);
    if (ligneCommande) {
      res.json(ligneCommande);
    } else {
      res.status(404).json({ message: 'LigneCommande not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createLigneCommande = async (req, res) => {
  const { commandeID, produitID, quantity, totalPrice } = req.body;
  try {
    const newLigneCommande = await LigneCommande.create({ commandeID, produitID, quantity, totalPrice });
    res.status(201).json(newLigneCommande);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateLigneCommandeById = async (req, res) => {
  const ligneCommandeID = req.params.ligneCommandeID;
  const { commandeID, produitID, quantity, totalPrice } = req.body;
  try {
    const ligneCommande = await LigneCommande.findByPk(ligneCommandeID);
    if (ligneCommande) {
      await ligneCommande.update({ commandeID, produitID, quantity, totalPrice });
      res.json(ligneCommande);
    } else {
      res.status(404).json({ message: 'LigneCommande not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteLigneCommandeById = async (req, res) => {
  const ligneCommandeID = req.params.ligneCommandeID;
  try {
    const ligneCommande = await LigneCommande.findByPk(ligneCommandeID);
    if (ligneCommande) {
      await ligneCommande.destroy();
      res.json({ message: 'LigneCommande deleted successfully' });
    } else {
      res.status(404).json({ message: 'LigneCommande not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllLigneCommandes,
  getLigneCommandeById,
  createLigneCommande,
  updateLigneCommandeById,
  deleteLigneCommandeById,
};
