'use strict';

var Post = require('../models/post-model')
  , Tag = require('../models/tag-model')
  , ctrl = {};

ctrl.renderHomePage = (req, res) => {
  let _promises = [Tag.findAll(), Post.findAll()];
  Promise.all(_promises).then((results) => {
    let _options = {
        layout: 'home'
      , title: 'teste'
      , tags: results[0]
      , posts: results[1]
    };
    res.render('posts', _options);
  });
};

module.exports = ctrl;
