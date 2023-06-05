const express = require("express");
const route = express.Router();

const PaymentController = require("../Controller/paymentController")


route.get("/Payment",PaymentController.GetPayment);


module.exports = route;