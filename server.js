const express = require("express");
const { default: Axios } = require("axios");
const app = express();

const url =
  "https://api.mercadolibre.com/sites/MLA/search?q=${samsung}&&limit=2";
app.get("/", (req, res) => {
  res.send("Wello Hor");
});

app.get("/api/v1/items", (req, res) => {
  async function fetchData() {
    const { data } = await Axios.get(url);
    console.log(data);
    res.send(data.results);
  }

  fetchData();
});

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log(`listening on port : ${port}`);
});
