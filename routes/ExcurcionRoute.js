const express = require("express");
const route = express.Router();

const ExcursionController = require("../Controller/excursionController")


route.get("/Excursion",ExcursionController.GetExcursion);


module.exports = route;