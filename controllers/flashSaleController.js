const Product = require("../models/product");
const Order = require("../models/order");
const Customer = require("../models/customer");

// Get Flash Sale Details
exports.getFlashSale = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Place Order
exports.placeOrder = async (req, res) => {
  const { user_authentication_token, productId, quantity } = req.body;

  try {
    const customer = await Customer.findOne({ user_authentication_token });
    if (!customer)
      return res.status(404).json({ message: "Customer not found" });

    const product = await Product.findById(productId);
    if (!product || product.stock < quantity)
      return res.status(400).json({ message: "Insufficient stock" });

    product.stock -= quantity;
    await product.save();

    const order = new Order({
      customerId: customer._id,
      productId: product._id,
      quantity,
    });
    await order.save();

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get status of Stock
exports.getStockStatus = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ stock: product.stock });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
