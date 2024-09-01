const express = require("express");
const router = express.Router();
const {
  getFlashSale,
  placeOrder,
  getStockStatus,
  getCustomer,
  getProduct,
} = require("../controllers/flashSaleController");

router.get("/flash-sale", getFlashSale);
router.post("/place-order", placeOrder);
router.get("/stock-status/:id", getStockStatus);
router.get("/customer/:id", getCustomer);
router.get("/product/:id", getProduct);

module.exports = router;
