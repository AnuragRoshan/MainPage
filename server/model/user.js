const mongoose = require("mongoose");
const user = new mongoose.Schema({
  name:String,
  username: String,
  password: String,
  admin:Boolean
});

module.exports = mongoose.model("User", user);
