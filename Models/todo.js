import mongoose from "mongoose";
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
  date: { type: Date, required: true },
});

const todos = mongoose.model("todo", todoSchema);

module.exports = todos;
