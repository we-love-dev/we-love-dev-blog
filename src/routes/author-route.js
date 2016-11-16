'use strict'

const express = require('express')
const ctrl = require('../controllers/author.controller')
const router = express.Router()

router.get('/author/:path', ctrl.renderAuthorPage)

module.exports = router
