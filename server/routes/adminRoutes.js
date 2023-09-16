const express = require("express");
const adminRouter=express.Router();
const adminController=require("../controllers/adminController");

adminRouter.route('/total-events').get(adminController.getTotalEventCount);

adminRouter.route('/total-registrations').get(adminController.getTotalRegistrations);
adminRouter.route("/total-revenue").get(adminController.getTotalRevenue);
adminRouter.route("/add-event").post(adminController.addNewEvent);
adminRouter.route("/event-info").get(adminController.eventInfo);
adminRouter.route("/getVolunteers").get(adminController.getVolunteers);

module.exports =adminRouter;