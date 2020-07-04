const error = require("./middleware/error");
const debug = require("debug")("app:startup");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const endpoints = require("./routes/endpoints");
const home = require("./routes/home");

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

// express endpoints routes
app.use("/api", endpoints);
app.use("/", home);

// Error middleware
app.use(error); //pass error by reference

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  debug("Morgan enabled for development");
}

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log(`listening on port : ${port}`);
});
