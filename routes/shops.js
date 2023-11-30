const express = require('express');
const shopController = require('../controllers/shopController');

const router = express.Router();

//cantina
router.get('/cantina', shopController.getWithShopName('cantina'));
router.post('/cantina', shopController.createWithShopName('cantina'));
//halli-mane
router.get('/halli-mane', shopController.getWithShopName('halli-mane'));
router.post('/halli-mane', shopController.createWithShopName('halli-mane'));
//pes-canteen
router.get('/pes-canteen', shopController.getWithShopName('pescanteen'));
router.post('/pes-canteen', shopController.createWithShopName('pescanteen'));
//campus mart
router.get('/campus-mart', shopController.getWithShopName('campusmart'));
router.post('/campus-mart', shopController.createWithShopName('campusmart'));

module.exports =  router;