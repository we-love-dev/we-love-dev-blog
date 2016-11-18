'use strict'

const Post = require('../models/post-model')
const Tag = require('../models/tag-model')
const fs = require('fs')
const path = require('path')
const ctrl = {}
const ARTICLE_DIR = path.join(__dirname, '../views/articles/')
const ENCODE = 'utf8'
const CACHE = {}

ctrl.renderPostPage = (req, res) => {
  let _promises = [Tag.getAllTags(), Post.getPostByPath(req.params.path)]
  Promise.all(_promises).then((results) => {
    let _post = results[1]
    let _tag = results[0]
    let _options = {
      layout: 'template',
      path: req.params.path,
      closeMenu: true,
      hasCode: true,
      title: _post.title,
      tags: _tag,
      post: _post
    }

    if (CACHE[_post.content]) {
      _post.content = CACHE[_post.content]
      return res.render('post', _options)
    } else {
      fs.readFile(path.join(ARTICLE_DIR, _post.content), ENCODE, (err, html) => {
        if (err) throw err
        CACHE[_post.content] = html
        _post.content = html
        return res.render('post', _options)
      })
    }
  })
}

module.exports = ctrl
