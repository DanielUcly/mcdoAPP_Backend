const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProduitSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  prix: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Produit = mongoose.model("Produit", ProduitSchema);

module.exports = Produit;
