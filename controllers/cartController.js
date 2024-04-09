const CartItems = require("../models/cartItemModel");

const addToCart = async (req, res) => {
  const { title, cost, quantity } = req.body;

  // add to the database
  try {
    const existingItem = await CartItems.findOne({ title });
    if (existingItem) {
      existingItem.quantity++;
      await existingItem.save();
      return res.status(200).json(existingItem);
    } else {
      const newCartItem = new CartItems({ title, cost, quantity });
      await newCartItem.save();
      res.status(201).json(newCartItem);
    }
  } catch (error) {
    res.status(500).json({
      error: "An unexpected error occurred while adding the item to the cart.",
    });
  }
};

const getCartItems = async (req, res) => {
  try {
    const shopItems = await CartItems.find({}).sort({
      createdAt: -1,
    });

    if (shopItems.length === 0) {
      // Handle the case where no shop items are found
      return res.status(404).json({ message: "No shop items found" });
    }

    res.status(200).json(shopItems);
  } catch (error) {
    console.error("Error fetching shop items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const removeFromCart = async (req, res) => {
  const { itemId } = req.params;

  try {
    const removedItem = await CartItems.findByIdAndDelete(itemId);
    if (!removedItem) {
      return res.status(404).json({ message: "Item not found in cart" });
    }
    res.status(200).json({ message: "Item removed from cart", removedItem });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateQuantity = async (req, res) => {
  const { itemId } = req.params;
  const { quantity } = req.body;

  try {
    const updatedItem = await CartItems.findByIdAndUpdate(
      itemId,
      { quantity },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found in cart" });
    }
    res.status(200).json({ message: "Quantity updated", updatedItem });
  } catch (error) {
    console.error("Error updating quantity:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { addToCart, getCartItems, removeFromCart, updateQuantity };
