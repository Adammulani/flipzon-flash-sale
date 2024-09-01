const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  user_authentication_token: String,
});

module.exports = mongoose.model("Customer", customerSchema);
