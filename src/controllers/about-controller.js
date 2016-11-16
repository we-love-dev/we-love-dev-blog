'use strict'

const Tag = require('../models/tag-model')
const BlogInfo = require('../models/blog-info-model')
const ctrl = {}

ctrl.renderAboutPage = (req, res) => {
  let _promises = [Tag.getAllTags(), BlogInfo.getBlogInfo()]

  Promise.all(_promises).then((results) => {
    let _options = {
      layout: 'template',
      closeMenu: true,
      hasCode: false,
      tags: results[0],
      info: results[1]
    }

    res.render('about', _options)
  })
}

module.exports = ctrl
