'use strict'

const express = require('express')
const ctrl = require('../controllers/main-controller')
const router = express.Router()

router.get('/', ctrl.renderHomePage)
router.get('/:tag', ctrl.renderTagSearsh)

module.exports = router
