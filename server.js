const express = require("express");
const app = express();
const person = require("./models/Person");
require("dotenv").config();
const dbConnect = require("./config/connectDB");
//connectDB
dbConnect();

//create route
//midlware router body parser
app.use(express.json());
app.use("/api/person", require("./routes/persons"));

//server
const PORT = process.env.PORT;

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log("server is running")
);
