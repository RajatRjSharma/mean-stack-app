import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/crudDb", {
  useNewUrlParser: true,
  family: 4,
});

const db = mongoose.connection;

db.on("error ", console.error.bind(console, "Connection Error: "));
db.once("open", () => {
  console.log("Db Connection Succeeded...");
});

export default mongoose;
