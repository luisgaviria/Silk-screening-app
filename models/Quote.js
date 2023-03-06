const mongoose = require("mongoose");

const Quote = new mongoose.Schema({
  email: mongoose.SchemaTypes.String,
  phone_number: mongoose.SchemaTypes.String,
});

module.exports = mongoose.model("quotes", Quote);
