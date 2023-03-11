const express = require("express");
const router = express.Router();
const todo = require("../Models/todo");

// middleware that is specific to this router
router.use((req, res, next) => {
  //   console.log("Time: ", Date.now());
  next();
});
// define the home page route
router.get("/", async (req, res) => {
  const notes = await todo.find({});
  const note = notes;
  //   console.log(note);
  res.render("Index", { data: note });
});
// define the save todo route
router.post("/save", async (req, res) => {
  let { description, cat, date } = req.body;

  if (description != "" && cat != "" && date != "") {
    try {
      const note = new todo({
        description: description,
        category: cat,
        date: date,
      });

      const res = await note.save();

      //   console.log("Note saved");
    } catch (error) {}
  }
  const notes = await todo.find({});
  const note = notes;
  setTimeout(() => {
    //  res.render("Index", { data: note });
    return res.redirect("/");
  }, 300);
});
// define the delete route
router.post("/delete", async (req, res) => {
  let ids = req.body;

  for (i = 0; i < ids.length; i++) {
    await todo.findByIdAndDelete(ids[i]);
  }

  // updating the data in the page
  const notes = await todo.find({});
  const note = notes;
  //   console.log(note);
  res.render("Index", { data: note });
});
module.exports = router;
