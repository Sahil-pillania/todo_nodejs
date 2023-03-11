const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const main = require("./db");
main();
// app.use(express.static("/assets"));
app.use(express.static(__dirname + "/assets"));
// ejs
let ejs = require("ejs");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());

// body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/", require("./routes/todo.js"));

// port listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
