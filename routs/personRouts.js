const express = require("express");
const router = express.Router();
const person = require("../models/person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new person(data);
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await person.find();
    console.log("data sended");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/:worktype", async (req, res) => {
  try {
    const worktype = req.params.worktype;
    if (worktype == "waiter" || worktype == "chef" || worktype == "manager") {
      const response = await person.find({ work: worktype });
      console.log(worktype + "found");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "worktype not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedPersonData = req.body;

    const response = await person.findByIdAndUpdate(id, updatedPersonData, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      res.status(404).json({ error: "person not found" });
    }

    console.log("record updated");
    res.status(200).json(response);
  } catch (error) {}
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await person.findByIdAndDelete(id);
    if (!response) {
      console.log("person not found");
    }
    console.log("record deleted");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = router;
