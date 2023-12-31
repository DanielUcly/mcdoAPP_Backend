const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccompagnementSchema = new Schema({
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

const Accompagnement = mongoose.model(
  "AccompagnementSchema",
  AccompagnementSchema
);

module.exports = Accompagnement;
