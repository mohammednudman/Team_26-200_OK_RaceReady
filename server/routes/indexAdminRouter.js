const express = require("express");
const indexRouter = express.Router();

indexAdminRouter.use("/total-events", require("./adminRoutes"));

indexAdminRouter.use("/total-registrations", require("./adminRoutes"));

indexAdminRouter.use("/total-revenue", require("./adminRoutes"));

module.exports = indexRouter;
