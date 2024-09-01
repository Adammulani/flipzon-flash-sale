const express = require("express");
const connectDB = require("./config/database");
const flashSaleRoutes = require("./routes/flashSaleRoutes");
const { startFlashSale } = require("./utils/scheduler");

//Initialize express
const app = express();

//connect to MongoDB database
connectDB();

app.use(express.json());

app.use("/api", flashSaleRoutes);

//start Flash Sale scheduler
startFlashSale();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`magic happens at ${PORT}`));
