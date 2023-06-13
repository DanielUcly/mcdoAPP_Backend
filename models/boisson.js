const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoissonSchema = new Schema({
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

const Boisson = mongoose.model("BoissonSchema", BoissonSchema);

module.exports = Boisson;
