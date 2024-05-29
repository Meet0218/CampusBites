const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

// Debugging log to check if the environment variable is loaded
// console.log("Database URL from .env file: ", process.env.DATABASE);

// const db = process.env.DATABASE;

const db =
  "mongodb+srv://rajbodar720:raj123@cluster0.vysikqh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

if (!db) {
  console.error("Error: DATABASE environment variable is not defined.");
  process.exit(1); // Exit the process with an error code
}

mongoose
  .connect(db)
  .then(() => console.log("Connection to Database successfully done!"))
  .catch((error) => console.log("Error: " + error.message));
