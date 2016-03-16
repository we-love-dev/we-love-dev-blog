'use strict';

var express = require('express')
  , ctrl = require('../controllers/author.controller')
  , router = express.Router();

router.get('/author/:path', ctrl.renderAuthorPage);

module.exports = router;
