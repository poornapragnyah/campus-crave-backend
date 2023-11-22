const express = require('express');
const signupController = require('../controllers/signUpController');

const router = express.Router();

router.post('/', signupController.signUpUser);

module.exports =  router;