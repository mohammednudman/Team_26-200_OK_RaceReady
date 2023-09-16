const express = require("express");
const indexRouter = express.Router();

indexRouter.use("/feedback", require("./feedBackRoutes"));

module.exports = indexRouter;
