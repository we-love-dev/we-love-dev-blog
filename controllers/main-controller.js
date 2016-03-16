'use strict';

var Post = require('../models/post-model')
  , Tag = require('../models/tag-model')
  , ctrl = {};

ctrl.renderHomePage = (req, res) => {
  let _tag = req.params.tag
    , _promises = [Tag.findAll(), Post.findAll(_tag)];

  Promise.all(_promises).then((results) => {
    let _options = {
        layout: 'template'
      , closeMenu: false
      , hasCode: false
      , tags: results[0]
      , posts: results[1]
    };

    res.render('posts', _options);
  });
};

module.exports = ctrl;
