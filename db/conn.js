const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.DATABASE;

mongoose
  .connect(db)
  .then(() => console.log("Connection to Database successfully done!"))
  .catch((error) => console.log("Error: " + error.message));
