'use strict';

var mongoose = require('mongoose')
  , imageSchema = require('./image-model')
  , schema = new mongoose.Schema({
      path: { type: String, required: true, unique: true }
    , name: { type: String, required: true }
    , nickname: { type: String, required: true }
    , image: { type: imageSchema, required: true }
    })
  , Author = mongoose.model('Author', schema);

module.exports.findById = (id) => {
  return new Promise((resolve, reject) => {
    let _query = { _id: id };
    Author.findOne(_query).lean().exec((err, autor) => {
      resolve(autor);
    });
  });
};
