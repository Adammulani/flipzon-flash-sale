const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: Number,
  orderDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
