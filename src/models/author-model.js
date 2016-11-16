'use strict'

const mongoose = require('mongoose')
const imageSchema = require('./image-model')
const schema = new mongoose.Schema({
  path: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  nickname: { type: String, required: true },
  image: { type: imageSchema, required: true },
  description: { type: String, required: true }
})
const Author = mongoose.model('Author', schema)

module.exports.getAuthorByPath = (path) => {
  return new Promise((resolve, reject) => {
    let _query = { path: path }
    Author.findOne(_query).lean().exec((err, autor) => {
      if (err) {
        reject(err)
      } else {
        resolve(autor)
      }
    })
  })
}
