const Comptes = require("../models/compte");

const add = async (req, res) => {
  try {
    console.log("ze");
    const compte = new Comptes({
      nom: req.query.nom,
      prenom: req.query.prenom,
      login: req.query.login,
      mdp: req.query.mdp,
      points: req.query.points,
      restaurateur: req.query.restaurateur,
    });
    console.log(compte);
    compte.save();

    res.json(true);
  } catch (error) {
    res.status(501).json(error);
  }
};

const get = async (req, res) => {
  try {
    if (req.params.id != null) {
      const compte = await Comptes.findById(req.params.id);
      compte.save();

      res.json(compte);
    } else {
      const comptes = await Comptes.find();

      res.json(comptes);
    }
  } catch (error) {
    res.status(501).json(error);
  }
};

const update = async (req, res) => {
  try {
    const compte = await Comptes.findById(req.params.id);

    compte.nom = req.body.nom;
    compte.prenom = req.body.prenom;
    compte.login = req.body.login;
    compte.mdp = req.body.mdp;
    compte.points = req.body.points;
    compte.restaurateur = req.body.restaurateur;

    compte.save();

    res.json(compte);
  } catch (error) {
    res.status(400).json(error);
  }
};

const del = async (req, res) => {
  try {
    const compte = await Comptes.findByIdAndDelete(req.params.id);

    res.json(compte);
  } catch (error) {
    res.status(501).json(error);
  }
};

const connection = async (req, res) => {
  try {
    const compte = await Comptes.findOne({
      login: req.query.login,
      mdp: req.query.mdp,
    });
    console.log(compte);
    if (compte) {
      res.json(compte);
    } else {
      res.json(false);
    }
  } catch (error) {
    res.status(501).json(error);
  }
};

module.exports = {
  add,
  get,
  update,
  del,
  connection,
};
