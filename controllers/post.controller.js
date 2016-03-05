'use strict';

var Post = require('../models/post-model')
  , Tag = require('../models/tag-model')
  , ctrl = {};

ctrl.renderPostPage = (req, res) => {
  let _promises = [Tag.findAll(), Post.getPostByPath(req.params.path)];
  Promise.all(_promises).then((results) => {
    let _options = {
        layout: 'template'
      , closeMenu: true
      , hasCode: true
      , title: 'teste'
      , tags: results[0]
      , post: results[1]
    };
    res.render('post', _options);
  });
};

module.exports = ctrl;
