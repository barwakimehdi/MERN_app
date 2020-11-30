const express = require("express");
const { get } = require("mongoose");
const router = express.Router();
const Person = require("../models/Person");

//test routing
router.get("/hello", (req, res) => {
  res.send("hello routing");
});

router.post("/", async (req, res) => {
  //console.log(req.body);
  try {
    const newPerson = new Person({ ...req.body });

    // if (!res.body.age) {
    //   res.status(400).send({ message: "age is required check again" });
    //   // return;
    // }

    let response = await newPerson.save();
    res.send({ response: response, message: "person saved" });
  } catch (error) {
    res.status(500).send({ message: "can not save" });
  }
});
//get all persons
router.get("/", async (req, res) => {
  try {
    const result = await Person.find();
    res.send({ response: result, message: "geting persons succsessfuly" });
  } catch (error) {
    res.status(400).send({ message: "can not get the persons" });
  }
});

//get person by id
router.get("/:id", async (req, res) => {
  try {
    const result = await Person.findOne({ _id: req.params.id });
    res.send({
      response: result,
      message: "geting  persons by id succsessfuly",
    });
  } catch (error) {
    res.status(400).send({ message: "can not get the persons by id" });
  }
});

//delete by id

router.delete("/:id", async (req, res) => {
  try {
    const result = await Person.deleteOne({ _id: req.params.id });

    result.n
      ? res.send({ response: "person deleted" })
      : res.send("there is no person with this id");
  } catch (error) {
    console.error(error);
    res.status(500).send("not deleted");
  }
});

// update person
router.put("/:id", async (req, res) => {
  try {
    const result = await Person.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    result.nModified
      ? res.send({ message: "updated" })
      : res.send({ message: "not updated" });
    console.log(result);
  } catch (error) {
    res.status(400).send({ message: "not updated with this id" });
  }
});

module.exports = router;
