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


// // get a single Shop
// const getShopItem = async (req, res) => {
//   const { id } = req.params

//   const shop = await ShopItems.findById(id)
//   if (!shop) {
//     return res.status(404).json({error: 'No such Shop'})
//   }else{
//     res.status(200).json(shop)
//   }
  
// }

// create a new Shop
const createShopItem = async (shopName, req, res) => {
  // const {title, cost, desc} = req.body

  // // add to the database
  // try {
  //   const newShop = new ShopItems({ shopName, title, cost, desc });
  //   await newShop.save();
  //   res.status(200).json(newShop);
  // } catch (error) {
  //   res.status(400).json({ error: error.message })
  // }
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

// // delete a Shop
// const deleteShopItem = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({error: 'No such Shop'})
//   }

//   const deletedShop = await ShopItems.findOneAndDelete({_id: id})

//   if(!deletedShop) {
//     return res.status(400).json({error: 'No such Shop'})
//   }

//   res.status(200).json(deletedShop)
// }

// const updateShopItem = async (req, res) => {
//   const { id } = req.params;
//   const updateData = req.body;

//   try {
//     const updatedShop = await ShopItems.findByIdAndUpdate(id, updateData, { new: true });
//     await updatedShop.save()
//     if (!updatedShop) {
//       return res.status(400).json({ error: 'No such Shop' });
//     }else{
//       res.status(200).json(updatedShop);
//     }

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
module.exports = {
  getShopItems,
  createShopItem,
  createWithShopName,
  getWithShopName
}