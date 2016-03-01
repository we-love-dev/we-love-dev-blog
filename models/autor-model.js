'use strict';

var mongoose = require('mongoose')
  , imageSchema = require('.image-model')
  , schema = new mongoose.Schema({
      path: { type: String, required: true, unique: true }
    , name: { type: String, required: true }
    , picture: imageSchema
    })
  , Autor = mongoose.model('Autor', schema);

module.exports.findAll = () => {
  return new Promise((resolve, reject) => {
    Autor.find({}).lean().exec((err, tags) => {
      resolve(tags);
    });
  });
};
