const cron = require("node-cron");
const Product = require("../models/product");

// Function to start the flash sale at a fixed time
const startFlashSale = () => {
  cron.schedule("0 0 * * 0", async () => {
    // Runs at 12:00 AM on Sunday
    try {
      const product = await Product.findOne({ name: "iPhone" });
      if (product) {
        if (product.stock === 0) {
          // Only restock if it's a new sale

          product.stock = 1000; // Restock 1000 iPhones
          await product.save();
          console.log("Flash Sale started: 1000 iPhones available");
        } else {
          console.log("Flash Sale already in progress.");
        }
      }
    } catch (error) {
      console.error("Error starting flash sale:", error.message);
    }
  });
};

module.exports = { startFlashSale };
