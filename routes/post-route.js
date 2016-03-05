'use strict';

var express = require('express')
  , ctrl = require('../controllers/post.controller')
  , router = express.Router();

router.get('/post/:path', ctrl.renderPostPage);

module.exports = router;
