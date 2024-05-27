const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/hotel")
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
