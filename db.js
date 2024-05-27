const mongoose = require("mongoose");
require("dotenv").config();
const connectionURL = process.env.CONNECTIONURL_LOCAL;

mongoose
  .connect(connectionURL)
  .then(
    () => {
      console.log("Connected to MongoDB");
    },
    (err) => {
      console.log(err);
    }
  )
  .catch((err) => {
    console.log(err);
    mongoose.disconnect();
  });

const db = mongoose.Connection;

module.exports = db;
