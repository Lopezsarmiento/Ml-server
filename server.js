const debug = require("debug")("app:startup");
const express = require("express");
const morgan = require("morgan");
const app = express();

require("./startup/logging");
require("./startup/routes")(app);

// displays process.env.NODE_ENV
// if not set it returns development
console.log(`app: ${app.get("env")}`);

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  debug("Morgan enabled for development");
}

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log(`listening on port : ${port}`);
});
