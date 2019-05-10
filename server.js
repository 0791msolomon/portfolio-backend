const express = require("express");
const bodyParser = require("body-parser");
const router = require("./app/routes");
const app = express();
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// const mongo = require("mongodb").MongoClient;
const url =
  process.env.MONGODB_URI ||
  process.env.REACT_APP_MONGOURL ||
  "mongodb://localhost:27017";
const port = process.env.PORT || 5000;

// app.use(express.static(path.join(__dirname, "client", "build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(router);

mongoose.connect(url, { useNewUrlParser: true }, function(err) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Connected to the database");
  }
});
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });
app.listen(port, () => {
  console.log(`Listening on port ${port} `);
});
