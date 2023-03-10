const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
let ejs = require("ejs");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// app.use(express.static("assets"));

app.get("/", (req, res) => {
  return res.render("Index");
});

// app.use("/", require("./routes/todo.js"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
