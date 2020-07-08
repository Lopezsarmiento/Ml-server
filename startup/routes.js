const express = require("express");
const helmet = require("helmet");
const endpoints = require("../routes/endpoints");
const home = require("../routes/home");
const error = require("../middleware/error");

module.exports = function (app) {
  // middleware functions
  // You can use app.use() to specify middleware as the callback function
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use(helmet());

  // express endpoints routes
  app.use("/api", endpoints);
  app.use("/", home);

  // Error middleware
  app.use(error); //pass error by reference
};
