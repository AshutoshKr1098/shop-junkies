const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product must contain name"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  quantity: {
    type: Number,
    required: [true, "quantity is required"],
  },
  imageUrl: {
    type: String,
    required: [true, "imageUrl is required"],
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
