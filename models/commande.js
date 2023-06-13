const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommandeSchema = new Schema({
  utilisateur: {
    type: Schema.Types.ObjectId,
    ref: "compte",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  produits: [
    {
      type: Schema.Types.ObjectId,
      ref: "produit",
      required: true,
    },
  ],
  commandePrete: {
    type: Boolean,
    default: false,
  },
  commandeServie: {
    type: Boolean,
    default: false,
  },
});

const Commande = mongoose.model("Commande", CommandeSchema);

module.exports = Commande;
