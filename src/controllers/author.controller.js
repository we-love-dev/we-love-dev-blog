'use strict'

const Author = require('../models/author-model')
const Post = require('../models/post-model')
const Tag = require('../models/tag-model')
const ctrl = {}

ctrl.renderAuthorPage = (req, res) => {
  Author.getAuthorByPath(req.params.path).then(author => {
    let _promises = [Tag.getAllTags(), Post.getPostsByAuthor(author._id)]

    Promise.all(_promises).then((results) => {
      let _options = {
        layout: 'template',
        closeMenu: true,
        hasCode: false,
        author: author,
        tags: results[0],
        posts: results[1]
      }

      res.render('author', _options)
    })
  })
}

module.exports = ctrl
