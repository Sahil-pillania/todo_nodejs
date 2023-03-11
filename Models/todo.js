const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  description: {
    type: "string",
    required: true,
  },
  category: {
    type: "string",
    required: true,
  },
  date: { type: "string", required: true },
});

const todo = mongoose.model("todo", todoSchema);

module.exports = todo;
