const express = require("express");
const process = require("process");
const mongoose = require("mongoose");
const productRoute = require("./routes/products.route.js");
const userRoute = require("./routes/users.route.js");

// Initialize Express App
const app = express();
const port = process.env.PORT || 3000

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const loggingMiddleware = (req,res,next) =>{
  console.log(`${req.method} - ${req.url}`);
  next();
}
// enabling the middleware function globally
app.use(loggingMiddleware);

// routes
app.use("/api/products", productRoute);
app.use("/api/users",userRoute);

// enabling the middleware for a single route
app.get("/",loggingMiddleware, (req, res) => {
  res.send("Hello from node API server");
});

mongoose
  .connect("mongodb://localhost:27017/CRUD-with-Express")
  .then(() => {
    console.log("Database connected!");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
