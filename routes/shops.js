const express = require('express');
const shopController = require('../controllers/shopController');

const router = express.Router();


// router.get('/', shopController.getShopItems);
// router.get('/:id', shopController.getShopItem);
// router.post('/', shopController.createShopItem);
// router.delete('/:id', shopController.deleteShopItem);
// router.put('/:id', shopController.updateShopItem);

//cantina
router.get('/cantina', shopController.getWithShopName('cantina'));
router.post('/cantina', shopController.createWithShopName('cantina'));
//halli-mane
router.get('/halli-mane', shopController.getWithShopName('halli-mane'));
router.post('/halli-mane', shopController.createWithShopName('halli-mane'));
module.exports =  router;