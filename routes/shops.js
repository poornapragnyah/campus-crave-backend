const express = require('express');
const shopController = require('../controllers/shopController');

const router = express.Router();


// router.get('/', shopController.getShopItems);
// router.get('/:id', shopController.getShopItem);
// router.post('/', shopController.createShopItem);
// router.delete('/:id', shopController.deleteShopItem);
// router.put('/:id', shopController.updateShopItem);

//cantina
router.get('/cantina', shopController.getShopItems);
// router.post('/cantina', shopController.createShopItem);

module.exports =  router;