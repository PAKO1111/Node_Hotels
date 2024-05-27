const express = require("express");
const menuItem = require("../models/menu");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new menuItem(data);
    const response = await newMenuItem.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await menuItem.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/:name", async (req, res) => {
  try {
    const nameval = req.params.name;
    const data = await menuItem.find({ name: nameval });
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = router;
