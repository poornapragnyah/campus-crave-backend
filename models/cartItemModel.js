const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartItemsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CartItems", cartItemsSchema);
