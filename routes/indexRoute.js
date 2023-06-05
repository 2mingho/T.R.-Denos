const express = require("express");
const route = express.Router();

const IndexController = require("../Controller/indexController")


route.get("/contact",IndexController.GetIndex);


module.exports = route;