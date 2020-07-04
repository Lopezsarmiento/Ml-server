const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the meli replica App server");
});

module.exports = router;
