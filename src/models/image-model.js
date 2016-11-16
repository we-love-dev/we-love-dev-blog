'use strict'

const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name: { type: String, required: true },
  alt: { type: String, required: true }
})

module.exports = schema
