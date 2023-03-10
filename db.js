const mongoose = require("mongoose");
const uri = "mongodb://127.0.0.1:27017/todo";

async function main() {
  try {
    let conn = await mongoose.connect(uri);
    if (conn) {
      console.log("Connected to database");
    }
  } catch (error) {
    console.error(error);
  }
}
// main();
module.exports = main;
