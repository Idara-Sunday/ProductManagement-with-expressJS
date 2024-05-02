const express = require("express");
const mongoose = require("mongoose");
// const Product = require('./models/product.model.js');
const productRoute = require("./routes/products.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from node API server");
});

mongoose
  .connect("mongodb://localhost:27017/CRUD-with-Express")
  .then(() => {
    console.log("Database connected!");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
