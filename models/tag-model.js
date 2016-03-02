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

module.exports.findByIds = (tagIds) => {
  return new Promise((resolve, reject) => {
    let _query = { _id: { $in: tagIds } };

    Tag.find(_query).lean().exec((err, tags) => {
      resolve(tags);
    });
  });
};
