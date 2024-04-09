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
      validate: {
        validator: (value) => value >= 0,
        message: "Quantity must be a positive number",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CartItems", cartItemsSchema);
