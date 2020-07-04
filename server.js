const debug = require("debug")("app:startup");
const express = require("express");
const axios = require("axios");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

// displays process.env.NODE_ENV
// if not set it returns development
console.log(`app: ${app.get("env")}`);

// middleware functions
// You can use app.use() to specify middleware as the callback function
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  debug("Morgan enabled for development");
}

const baseUrl = "https://api.mercadolibre.com/";
const limit = "&&limit=2";

app.get("/", (req, res) => {
  res.send("Welcome to the meli replica App server");
});

app.get("/api/search/:query", (req, res) => {
  const query = req.params.query;
  const search = `sites/MLA/search?q=${query}`;

  async function fetchData() {
    try {
      const { data } = await axios.get(`${baseUrl}${search}${limit}`);
      res.send(data.results);
    } catch (err) {
      console.log("something went wrong with the api call: ", err);
      return err;
    }
  }

  fetchData();
});

app.get("/api/items/:id", (req, res) => {
  const id = req.params.id;
  const itemsUrl = `items/${id}`;

  async function fetchData() {
    try {
      const { data } = await axios.get(`${baseUrl}${itemsUrl}`);
      res.send(data);
    } catch (err) {
      console.log("something went wrong with the api call: ", err);
      return err;
    }
  }

  fetchData();
});

app.get("/api/items/:id/description", (req, res) => {
  const id = req.params.id;
  const itemsUrl = `items/${id}`;

  async function fetchData() {
    try {
      const { data } = await axios.get(`${baseUrl}${itemsUrl}/description`);
      res.send(data);
    } catch (err) {
      console.log("something went wrong with the api call: ", err);
      return err;
    }
  }

  fetchData();
});

app.get("/api/categories/:id", (req, res) => {
  const id = req.params.id;
  const itemsUrl = `categories/${id}`;

  async function fetchData() {
    try {
      const { data } = await axios.get(`${baseUrl}${itemsUrl}`);
      res.send(data);
    } catch (err) {
      console.log("something went wrong with the api call: ", err);
      return err;
    }
  }

  fetchData();
});

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log(`listening on port : ${port}`);
});
