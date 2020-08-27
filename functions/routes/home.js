const express = require('express');
const router = express.Router();
const home = require('../controllers/home/home');

router.get('/',home.getHomeIndex);

module.exports = router;