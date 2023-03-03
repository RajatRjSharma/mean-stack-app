import mongoose from "mongoose";

export const Employee = mongoose.model("Employee", {
  name: { type: String },
  position: { type: String },
  office: { type: String },
  salary: { type: Number },
});
