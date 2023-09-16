const express = require("express");
const indexRouter = express.Router();

indexRouter.use("/feedback", require("./feedBackRoutes"));
indexRouter.use("/register", require("./registerRoutes"));

module.exports = indexRouter;
