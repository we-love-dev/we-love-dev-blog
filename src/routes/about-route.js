'use strict'

const express = require('express')
const ctrl = require('../controllers/about-controller')
const router = express.Router()

router.get('/about', ctrl.renderAboutPage)

module.exports = router
