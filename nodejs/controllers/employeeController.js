import express from "express";
import { Employee } from "../models/employee.js";
import mongoose from "mongoose";

export const router = express.Router();

router.get("/", (req, res) => {
  Employee.find()
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      console.log("Error in retriving employees : " + err);
    });
});

router.post("/", (req, res) => {
  const emp = new Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  });
  emp
    .save()
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      console.log("Error in saving employees : " + err);
    });
});

router.get("/:id", (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id))
    return res
      .status(400)
      .send("No Record with the given Id : " + req.params.id);
  else
    Employee.findById(req.params.id)
      .then((docs) => {
        res.send(docs);
      })
      .catch((err) => {
        console.log("Error in retriving employee by ID : " + err);
      });
});

router.put("/:id", (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id))
    return res
      .status(400)
      .send("No Record with the given Id : " + req.params.id);
  else {
    const emp = {
      name: req.body.name,
      position: req.body.position,
      office: req.body.office,
      salary: req.body.salary,
    };
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true })
      .then((docs) => {
        res.send(docs);
      })
      .catch((err) => {
        console.log("Error in updating employee by ID : " + err);
      });
  }
});

router.delete("/:id", (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id))
    return res
      .status(400)
      .send("No Record with the given Id : " + req.params.id);
  else
    Employee.findByIdAndDelete(req.params.id)
      .then((docs) => {
        res.send(docs);
      })
      .catch((err) => {
        console.log("Error in retriving employee by ID : " + err);
      });
});
