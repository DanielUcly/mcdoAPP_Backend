const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CompteController = require("./controllers/compte");
const ProduitController = require("./controllers/produit");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("ERROR !!!"));

// COMPTES
app.get("/comptes", CompteController.get);
app.get("/compte/connection", CompteController.connection);
app.get("/compte/:id", CompteController.get);
app.post("/compte/new", CompteController.add);
app.put("/compte/:id", CompteController.update);
app.delete("/compte/:id", CompteController.del);

//PRODUITS
app.get("/produits", ProduitController.get);
app.get("/produit/:id", ProduitController.get);
app.post("/produit/new", ProduitController.add);
app.put("/produit/:id", ProduitController.update);
app.delete("/produit/:id", ProduitController.del);

app.listen(process.env.MONGO_PORT, () => {
  console.log(`Server Started at ${process.env.MONGO_PORT}`);
});
