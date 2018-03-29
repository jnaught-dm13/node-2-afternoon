require("dotenv").config();
const products_controller = require("./products_controller");

const express = require("express"),
  massive = require("massive"),
  { json } = require("body-parser"),
  app = express(),
  cors = require("cors");

port = process.env.PORT;

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});
app.use(cors());
app.use(json());

app.get("/api/products", products_controller.getAll);
app.get("/api/product/:id", products_controller.getOne);
app.put("/api/product/:id", products_controller.update);
app.post("/api/product", products_controller.create);
app.delete("/api/product/:id", products_controller.delete);

app.listen(process.env.PORT || 3000, () => {
  console.log(`"I'm listening" on port ${process.env.PORT || 3000}!`);
});
