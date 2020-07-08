const logger = require("../middleware/logger");

module.exports = function () {
  // Uncaught exceptions handling
  process.on("uncaughtException", (ex) => {
    console.log("we have an uncaught exception");
    logger.error(ex.message, ex);
    process.exit(1);
  });

  // rejections handling
  process.on("unhandledRejection", (ex) => {
    console.log("we have an unhandled rejection");
    logger.error(ex.message, ex);
    process.exit(1);
  });
};
