const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CompteController = require("./controllers/compte");
const ProduitController = require("./controllers/produit");
const BoissonsController = require("./controllers/boisson");
const AccompagnementsController = require("./controllers/accompagnement");
const CommandeController = require("./controllers/commande");
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

//BOISSONS
app.get("/boissons", BoissonsController.get);
app.get("/boisson/:id", BoissonsController.get);
app.post("/boisson/new", BoissonsController.add);
app.put("/boisson/:id", BoissonsController.update);
app.delete("/boisson/:id", BoissonsController.del);

//ACCOMPAGNEMENTS
app.get("/accompagnements", AccompagnementsController.get);
app.get("/accompagnement/:id", AccompagnementsController.get);
app.post("/accompagnement/new", AccompagnementsController.add);
app.put("/accompagnement/:id", AccompagnementsController.update);
app.delete("/accompagnement/:id", AccompagnementsController.del);

//COMMANDES
app.get("/commandes", CommandeController.get);
app.get("/commande/:id", CommandeController.get);
app.get(
  "/commande/verifierUtilisateur/:id",
  CommandeController.verifierUtilisateur
);
app.post("/commande/new", CommandeController.add);
app.put("/commande/:id", CommandeController.update);
app.put("/commande/commandeprete/:id", CommandeController.updateCommandePrete);
app.put(
  "/commande/commandeservie/:id",
  CommandeController.updateCommandeServie
);
app.delete("/commande/:id", CommandeController.del);

app.listen(process.env.MONGO_PORT, () => {
  console.log(`Server Started at ${process.env.MONGO_PORT}`);
});
