const express = require("express");
const route = express.Router();

const bookingController = require("../Controller/bookingController")


route.get("/booking",bookingController.GetBooking);


module.exports = route;