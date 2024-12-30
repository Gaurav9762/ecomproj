const mysql2 = require("mysql2");
require("dotenv").config();

let connectionParams;

const useLocalhost = process.env.USE_LOCALHOST === "true";

if (useLocalhost) {
  console.log("inside localhost");
  connectionParams = {
    host: "localhost",
    user: "localhost",
    password: "root123",
    databse: "e_commerce",
  };
} else {
  connectionParams = {
    user: process.env.DB_SERVER_USER,
    host: process.env.DB_SERVER_HOST,
    password: process.env.DB_SERVER_PASSWORD,
    database: process.env.DB_SERVER_DATABASE,
  };
}

const pool = mysql2.createConnection(connectionParams);

pool.connect((err) => {
  if (err) {
    console.log("Error connecting to the database");
  } else {
    console.log("Connected to the database");
  }
});

module.exports = pool;
