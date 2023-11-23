const ShopItems = require('../models/shopItemsModel')

const addToCart = async (shopName, req, res) => {
    const {title, cost, desc} = req.body
  
    // add to the database
    try {
        const existingItem = await ShopItems.find({ title });
    if (existingItem) {
        existingItem.quantity++;
    }
      const newCartItem = new ShopItems({ shopName, title, cost, desc });
      await newCartItem.save();
      res.status(201).json(newCartItem);
    } catch (error) {
        res.status(500).json({ error: 'An unexpected error occurred while adding the item to the cart.' })
    }
  }