'use strict'

const express = require('express')
const ctrl = require('../controllers/post.controller')
const router = express.Router()

router.get('/post/:path', ctrl.renderPostPage)

module.exports = router
