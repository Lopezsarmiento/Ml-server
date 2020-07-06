const logger = require("./logger");
module.exports = function (err, req, res, next) {
  const { data } = err.response;
  //winston.error(data.message, err);
  logger.error(data.message, data);
  console.log("something went wrong with the api call: ", data);
  res.status(data.status).send(`response from API: ${data.message}`);
};
