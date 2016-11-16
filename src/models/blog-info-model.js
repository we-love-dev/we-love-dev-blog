'use strict'

const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const schema = new mongoose.Schema({
  authors: { type: [{ type: ObjectId, ref: 'Author' }], default: [] }
})
const Info = mongoose.model('Info', schema, 'info')

module.exports.getBlogInfo = () => {
  return new Promise((resolve, reject) => {
    let _query = {}
    Info.findOne(_query).populate('authors').lean().exec((err, info) => {
      if (err) {
        reject(err)
      } else {
        resolve(info)
      }
    })
  })
}
