const express = require("express");
const app = express();
const Router = require("./src/Routes/api");

//middleware
app.use(Router);
app.use(express.static("./public"));

module.exports = app;
