const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = require("./app");

dotenv.config();

// Connect database
console.log();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected..."))
  .catch((error) => console.log("An error occured..."));

// Serve client folder
// app.use(express.static(path.join(__dirname, "client", "build")));

if(process.env.NODE_ENV === 'PRODUCTION'){
  const path = require("path");
  app.use(express.static(path.join(__dirname, './build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build', 'index.html'));
  });
}



//   Listen to port
exports.expressServer = app.listen(process.env.PORT || 4000, () =>
  console.log("Listening...")
);
