'use strict';

var mongoose = require('mongoose')
  , schema = new mongoose.Schema({
      path: { type: String, required: true, unique: true }
    , name: { type: String, required: true }
    , color: { type: String, required: true }
    })
  , Tag = mongoose.model('Tag', schema);

module.exports.getAllTags = () => {
  return new Promise((resolve, reject) => {
    Tag.find({}).lean().exec((err, tags) => {
      if(err) {
        reject(err);
      } else {
        resolve(tags);
      }
    });
  });
};

module.exports.getIdsByPaths = (paths) => {
  return new Promise((resolve, reject) => {
    let _query = { path: { $in: paths } };

    Tag.find(_query).lean().exec((err, tags) => {
      if(err) {
        reject(err);
      } else {
        resolve(tags);
      }
    });
  });
};
