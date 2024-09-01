const cron = require("node-cron");
const Product = require("../models/product");

const startFlashSale = () => {
  cron.schedule("0 0 * * 0", async () => {
    // Flash sale starts at 12 AM on Sunday
    try {
      const product = await Product.findOne({ name: "iPhone" });
      if (product) {
        product.stock = 1000; // Restock 1000 iPhones
        await product.save();
        console.log("Flash Sale started: 1000 iPhones available");
      }
    } catch (error) {
      console.error("Error starting flash sale:", error.message);
    }
  });
};

module.exports = { startFlashSale };
