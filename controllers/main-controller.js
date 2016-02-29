'use strict';

var Post = require('../models/post-model')
  , ctrl = {};

ctrl.renderMainPage = (req, res) => {
  Post.findAll().then(posts => {
    res.json(posts);
  });
};

module.exports = ctrl;
