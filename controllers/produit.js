const Produit = require("../models/produit");

const add = async (req, res) => {
  try {
    const produit = new Produit({
      nom: req.body.nom,
      description: req.body.description,
      prix: req.body.prix,
      image: req.body.image,
      isProduit: req.body.isProduit,
      isBoisson: req.body.isBoisson,
      isAccompagnement: req.body.isAccompagnement,
    });

    produit.save();

    res.json(produit);
  } catch (error) {
    res.status(501).json(error);
  }
};

const get = async (req, res) => {
  try {
    if (req.params.id != null) {
      const produit = await Produit.findById(req.params.id);
      produit.save();

      res.json(produit);
    } else {
      const produit = await Produit.find();

      res.json(produit);
    }
  } catch (error) {
    res.status(501).json(error);
  }
};

const update = async (req, res) => {
  try {
    const produit = await Produit.findById(req.params.id);

    produit.nom = req.body.nom;
    produit.description = req.body.description;
    produit.prix = req.body.prix;
    produit.image = req.body.image;
    produit.isProduit = req.body.isProduit;
    produit.isBoisson = req.body.isBoisson;
    produit.isAccompagnement = req.body.isAccompagnement;

    produit.save();

    res.json(produit);
  } catch (error) {
    res.status(400).json(error);
  }
};

const del = async (req, res) => {
  try {
    const produit = await Produit.findByIdAndDelete(req.params.id);

    res.json(produit);
  } catch (error) {
    res.status(501).json(error);
  }
};

module.exports = {
  add,
  get,
  update,
  del,
};
