const Boisson = require("../models/boisson");

const add = async (req, res) => {
  try {
    const boisson = new Boisson({
      nom: req.body.nom,
      description: req.body.description,
      prix: req.body.prix,
      image: req.body.image,
    });

    boisson.save();

    res.json(boisson);
  } catch (error) {
    res.status(501).json(error);
  }
};

const get = async (req, res) => {
  try {
    if (req.params.id != null) {
      const boisson = await Boisson.findById(req.params.id);
      boisson.save();

      res.json(boisson);
    } else {
      const boisson = await Boisson.find();

      res.json(boisson);
    }
  } catch (error) {
    res.status(501).json(error);
  }
};

const update = async (req, res) => {
  try {
    const boisson = await Boisson.findById(req.params.id);

    boisson.nom = req.body.nom;
    boisson.description = req.body.description;
    boisson.prix = req.body.prix;
    boisson.image = req.body.image;

    boisson.save();

    res.json(boisson);
  } catch (error) {
    res.status(400).json(error);
  }
};

const del = async (req, res) => {
  try {
    const boisson = await Boisson.findByIdAndDelete(req.params.id);

    res.json(boisson);
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
