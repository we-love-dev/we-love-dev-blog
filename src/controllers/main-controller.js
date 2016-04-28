'use strict';

var Post = require('../models/post-model')
  , Tag = require('../models/tag-model')
  , ctrl = {};

ctrl.renderHomePage = (req, res) => {
  let _promises = [Tag.getAllTags(), Post.getPostsByName(req.query.search)];

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

ctrl.renderTagSearsh = (req, res) => {
  let _promises = [Tag.getAllTags(), Post.getPostsByTags([req.params.tag])];

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
