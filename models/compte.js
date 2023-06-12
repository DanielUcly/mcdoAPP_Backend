const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompteSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  login: {
    type: String,
    required: true,
  },
  mdp: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: false,
    default: 0,
  },
  restaurateur: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const Compte = mongoose.model("Compte", CompteSchema);

module.exports = Compte;
