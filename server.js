const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

const logRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request Made to ${req.originalUrl}`
  );
  next();
};

app.use(logRequest);

app.get("/", (req, res) => {
  res.send("Prakash Sarvaiya");
});

const personRouts = require("./routs/personRouts");
app.use("/person", personRouts);

const menuRouts = require("./routs/menuRouts");
app.use("/menuItems", menuRouts);

app.listen(PORT);
