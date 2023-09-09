const vehicle = require("./routes/vehicle");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

const cors = require("cors");

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.use(express.json());
// const routes = require("./rout es/routes");
app.use("/vehicle", vehicle);
app.listen(5000, () => {
  console.log(`Server Started at ${5000}`);
});
