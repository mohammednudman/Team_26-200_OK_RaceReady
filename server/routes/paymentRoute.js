const express = require('express');
const paymentRouter = express();

const payment = require('../controllers/paymentController');

paymentRouter.route('/').post(payment);

module.exports = {paymentRouter};