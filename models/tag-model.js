'use strict';

var mongoose = require('mongoose')
  , schema = new mongoose.Schema({
      path: { type: String, required: true, unique: true }
    , name: { type: String, required: true }
    })
  , Tag = mongoose.model('Tag', schema);

module.exports.findAll = () => {
  return new Promise((resolve, reject) => {
    Tag.find({}).lean().exec((err, tags) => {
      resolve(tags);
    });
  });
};
