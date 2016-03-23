'use strict';

var Post = require('../models/post-model')
  , Tag = require('../models/tag-model')
  , fs = require('fs')
  , path = require('path')
  , ctrl = {}
  , ARTICLE_DIR = path.join(__dirname, '../views/articles/')
  , ENCODE = 'utf8';

ctrl.renderPostPage = (req, res) => {
  let _promises = [Tag.getAllTags(), Post.getPostByPath(req.params.path)];
  Promise.all(_promises).then((results) => {
    let _post = results[1]
      , _tag = results[0]
      , _options = {
          layout: 'template'
        , closeMenu: true
        , hasCode: true
        , title: _post.title
        , tags: _tag
        , post: _post
      };

    fs.readFile(path.join(ARTICLE_DIR, _post.content), ENCODE, function (err, html) {
      _post.content = html;
      res.render('post', _options);
    });
  });
};

module.exports = ctrl;
