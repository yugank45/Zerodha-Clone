const { Schema } = require("mongoose");


const OrdersSchema = new Schema({
  // Define your order schema fields here
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

module.exports = { OrdersSchema };
