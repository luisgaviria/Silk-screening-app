const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  title: {
    type: mongoose.SchemaTypes.String,
    unique: true,
  },
  sizes: mongoose.SchemaTypes.String,
  colors: mongoose.SchemaTypes.Array,
  description: mongoose.SchemaTypes.String,
  images: mongoose.SchemaTypes.Array,
  category: mongoose.SchemaTypes.String,
});

module.exports = mongoose.model("products", Product);
