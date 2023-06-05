const express = require("express");
const route = express.Router();

const mainController = require("../Controller/MainController");


route.get("/", mainController.GetMainDenois);



module.exports = route;