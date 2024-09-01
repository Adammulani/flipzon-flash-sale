const express = require("express");
const router = express.Router();
const {
  getFlashSale,
  placeOrder,
  getStockStatus,
} = require("../controllers/flashSaleController");

router.get("/flash-sale", getFlashSale);
router.post("/place-order", placeOrder);
router.get("stock-status/:id", getStockStatus);

module.exports = router;
