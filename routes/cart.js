const express = require("express");
const cartController = require("../controllers/cartController");

const router = express.Router();

router.post("/", cartController.addToCart);
router.get("/", cartController.getCartItems);
router.delete("/:itemId", cartController.removeFromCart); // Route for removing an item from the cart
router.patch("/:itemId", cartController.updateQuantity); // Route for updating the quantity of an item in the cart

module.exports = router;
