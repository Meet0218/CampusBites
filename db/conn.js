const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

const db = process.env.DATABASE;

mongoose  
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection to Database successfully done"))
  .catch((error) => console.log("Error: " + error.message));