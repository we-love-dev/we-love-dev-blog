'use strict';

var express = require('express')
  , ctrl = require('../controllers/about-controller')
  , router = express.Router();

router.get('/about', ctrl.renderAboutPage);

module.exports = router;
