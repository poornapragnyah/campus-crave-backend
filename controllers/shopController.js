const ShopItems = require('../models/shopItemsModel');
const mongoose = require('mongoose');

const createWithShopName = (shopname) => {
  return (req, res) => {
    createShopItem(shopname, req, res);
  };
};
const getWithShopName = (shopname) => {
  return (req, res) => {
    getShopItems(shopname, req, res);
  };
};
// get all shop items
const getShopItems = async (shopname,req, res) => {
  try {
    const shopItems = await ShopItems.find({ shopName: shopname}).sort({
      createdAt: -1,
    });

    if (shopItems.length === 0) {
      // Handle the case where no shop items are found
      return res.status(404).json({ message: 'No shop items found' });
    }

    res.status(200).json(shopItems);
  } catch (error) {
    console.error('Error fetching shop items:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// create a new ShopItem
const createShopItem = async (shopName, req, res) => {
  const {title, cost, desc} = req.body
    try {
        const existingItem = await ShopItems.findOne({ title });
    if (existingItem) {
        existingItem.quantity++;
        await existingItem.save();
    }else{
      const newCartItem = new ShopItems({ shopName, title, cost, desc });
      await newCartItem.save();
      res.status(201).json(newCartItem);
    }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
module.exports = {
  getShopItems,
  createShopItem,
  createWithShopName,
  getWithShopName
}