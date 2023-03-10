const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const main = require("./db");
main();
// app.use(express.static("/assets"));
app.use(express.static(__dirname + "/assets"));
let ejs = require("ejs");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.get("/", (req, res) => {
//   return res.render("Index");
// });

app.use("/", require("./routes/todo.js"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
