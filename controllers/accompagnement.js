const Accompagnement = require("../models/accompagnement");

const add = async (req, res) => {
  try {
    const accompagnement = new Accompagnement({
      nom: req.body.nom,
      description: req.body.description,
      prix: req.body.prix,
      image: req.body.image,
    });

    accompagnement.save();

    res.json(accompagnement);
  } catch (error) {
    res.status(501).json(error);
  }
};

const get = async (req, res) => {
  try {
    if (req.params.id != null) {
      const accompagnement = await Accompagnement.findById(req.params.id);
      accompagnement.save();

      res.json(accompagnement);
    } else {
      const accompagnement = await Accompagnement.find();

      res.json(accompagnement);
    }
  } catch (error) {
    res.status(501).json(error);
  }
};

const update = async (req, res) => {
  try {
    const accompagnement = await Accompagnement.findById(req.params.id);

    accompagnement.nom = req.body.nom;
    accompagnement.description = req.body.description;
    accompagnement.prix = req.body.prix;
    accompagnement.image = req.body.image;

    accompagnement.save();

    res.json(accompagnement);
  } catch (error) {
    res.status(400).json(error);
  }
};

const del = async (req, res) => {
  try {
    const accompagnement = await Accompagnement.findByIdAndDelete(
      req.params.id
    );

    res.json(accompagnement);
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
