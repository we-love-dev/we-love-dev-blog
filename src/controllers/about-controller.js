'use strict';

var Post = require('../models/post-model')
  , Tag = require('../models/tag-model')
  , BlogInfo = require('../models/blog-info-model')
  , ctrl = {};

ctrl.renderAboutPage = (req, res) => {
  let _promises = [Tag.getAllTags(), BlogInfo.getBlogInfo()];

  Promise.all(_promises).then((results) => {
    let _options = {
        layout: 'template'
      , closeMenu: true
      , hasCode: false
      , tags: results[0]
      , authors: results[1].authors
    };

    res.render('about', _options);
  });
};

module.exports = ctrl;
