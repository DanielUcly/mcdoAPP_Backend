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
    required: true,
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
});

const Commande = mongoose.model("Commande", CommandeSchema);

module.exports = Commande;
