const Commande = require("../models/commande");
const Compte = require("../models/compte");

const add = async (req, res) => {
  try {
    const commande = new Commande({
      utilisateur: req.query.utilisateur,
      produits: req.query.produits,
      commandePrete: req.query.commandePrete,
      commandeServie: req.query.commandeServie,
    });

    commande.save();

    res.json(true);
  } catch (error) {
    res.status(501).json(error);
  }
};

const verifierUtilisateur = async (req, res) => {
  try {
    const user = await Compte.findById(req.params.id);
    if (user) {
      const commande = await Commande.findOne({
        utilisateur: user,
      });
      if (commande) {
        console.log(commande);
        res.json(commande);
      } else {
        res.json(false);
      }
    } else {
      res.json(false);
    }
  } catch (error) {
    res.status(501).json(error);
  }
};

const get = async (req, res) => {
  try {
    if (req.params.id != null) {
      const commande = await Commande.findById(req.params.id);
      commande.save();

      res.json(commande);
    } else {
      const commande = await Commande.find();

      res.json(commande);
    }
  } catch (error) {
    res.status(501).json(error);
  }
};

const updateCommandePrete = async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.id);

    commande.commandePrete = true;

    commande.save();

    res.json(commande);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateCommandeServie = async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.id);

    commande.commandeServie = req.body.commandeServie;

    commande.save();

    res.json(commande);
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.id);

    commande.utilisateur = req.body.utilisateur;
    commande.date = req.body.date;
    commande.produits = req.body.produits;
    commande.commandePrete = req.body.commandePrete;
    commande.commandeServie = req.body.commandeServie;

    commande.save();

    res.json(commande);
  } catch (error) {
    res.status(400).json(error);
  }
};

const del = async (req, res) => {
  try {
    const commande = await Commande.findByIdAndDelete(req.params.id);

    res.json(commande);
  } catch (error) {
    res.status(501).json(error);
  }
};

module.exports = {
  add,
  get,
  verifierUtilisateur,
  update,
  updateCommandePrete,
  updateCommandeServie,
  del,
};
