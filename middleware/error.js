module.exports = function (err, req, res, next) {
  const { data } = err.response;
  console.log("something went wrong with the api call: ", data);
  res.status(data.status).send(`response from API: ${data.message}`);
};
