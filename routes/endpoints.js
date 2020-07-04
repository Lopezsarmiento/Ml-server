const express = require("express");
const axios = require("axios");
const config = require("config");
const router = express.Router();

const { baseUrl, limit, search, items, categories } = config.get("Api");

router.get("/search/:query", (req, res, next) => {
  const { query } = req.params;
  const path = `${search}${query}`;

  async function fetchData() {
    try {
      const { data } = await axios.get(`${baseUrl}${path}${limit}`);
      res.send(data.results);
    } catch (err) {
      next(err);
    }
  }

  fetchData();
});

router.get("/items/:id", (req, res, next) => {
  const { id } = req.params;
  const path = `${items}${id}`;

  async function fetchData() {
    try {
      const { data } = await axios.get(`${baseUrl}${path}`);
      res.send(data);
    } catch (err) {
      next(err);
    }
  }

  fetchData();
});

router.get("/items/:id/description", (req, res, next) => {
  const { id } = req.params;
  const path = `${items}${id}`;

  async function fetchData() {
    try {
      const { data } = await axios.get(`${baseUrl}${path}/description`);
      res.send(data);
    } catch (err) {
      next(err);
    }
  }

  fetchData();
});

router.get("/categories/:id", (req, res) => {
  const { id } = req.params;
  const path = `${categories}${id}`;

  async function fetchData() {
    try {
      const { data } = await axios.get(`${baseUrl}${path}`);
      res.send(data);
    } catch (err) {
      next(err);
    }
  }

  fetchData();
});

module.exports = router;
