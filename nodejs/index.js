import express from "express";
import cors from "cors";

import mongoose from "./db.js";
import { router as employeeController } from "./controllers/employeeController.js";

var app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));

app.listen(3000, () => console.log("Server started at port : 3000"));

app.use("/employees", employeeController);
