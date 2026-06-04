const mongoose = require("mongoose");
const { Schema } = mongoose;

const PositionsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  product: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  qty: {
    type: Number,
    required: true,
  },

  avg: {
    type: Number,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  net: {
    type: String,
    default: "0%",
  },

  day: {
    type: String,
    default: "0%",
  },

  isLoss: {
    type: Boolean,
    default: false,
  },
});

const PositionsModel = mongoose.model("Position", PositionsSchema);

module.exports = { PositionsModel };
