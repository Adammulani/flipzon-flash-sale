# Flipzon Flash Sale API

## Overview

**Flipzon Flash Sale API** is a backend service built using **Node.js** and **MongoDB** (via **MongoDB Atlas**). This service is designed to handle flash sales for an eCommerce platform called **Flipzon**, where a limited number of items (e.g., 1000 iPhones) go on sale at a fixed time and date (12 AM on Sunday). The service ensures fairness by limiting the number of items each customer can purchase and stores all successful transactions in the database.

## Features

- **Scheduled Flash Sale**: Automatically starts the flash sale at a specified time.
- **Stock Management**: Handles the deduction of item quantities and prevents overselling.
- **Fairness Rules**: Limits the number of items a customer can purchase to ensure fairness.
- **Transaction Logging**: Stores details of all successful transactions in the database.

## Prerequisites
- Node.js (version 14.x or later)
- MongoDB Atlas account
- npm (Node Package Manager)

# Installation
## Clone the repository:
`\` git clone https://github.com/Adammulani/flipzon-flash-sale.git\''
`\`cd flipzon-flash-sale\''

# Install dependencies:
`\`npm install\``

# Set up MongoDB Atlas:

Create a MongoDB cluster on MongoDB Atlas.
Get your MongoDB connection string.
Replace the your_mongodb_connection_string placeholder in config/database.js with your connection string.

# Run the application:
`\`npm run start \``

# Fairness Rules
- Customers are limited to purchasing a maximum of 2 items per order.
- Orders exceeding available stock are automatically rejected.

# API Usage

## Get status of flash sale
- /api/flash-sale
- **Method**-GET
- **Description**- Get the status of sale, if sale is already started it returns product stock

## Place order
- /api/place-order
- **Method**- POST
- **Description**- place the order
- **Request Body**-  ``` {
    
"user_authentication_token":"user1-auth-token",
 "productId":"66d47bb9ac944000a3d8fd19",
 "quantity":2
}```

- **Response Body**- ``` {message:"Order placed successfully" : order:order}```

## Get the product stock
- /api/stock-status/:id
- **Method**-GET

## Get the customer details based on provided id
- /api/customer/:id
- **Method**-GET

## Get the product details based on provided id
- /api/product/:id
- **Method**-GET


# Scheduler
The flash sale is scheduled to start at 12:00 AM on Sunday using a cron job. The job initializes the stock to 1000 items and begins the sale.

# To Change the Schedule:
Modify the cron expression in scheduler/scheduler.js:
```
cron.schedule('0 0 * * 0', async () => {
    // Your function to start the flash sale
});
```

