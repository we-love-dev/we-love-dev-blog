'use strict';

var mongoose = require('mongoose')
  , ObjectId = mongoose.Schema.Types.ObjectId
  , schema = new mongoose.Schema({
      title: { type: String, required: true }
    , subtitle: { type: String, default: null }
    , createdIn: { type: Date, default: null }
    , author: { type: ObjectId, required: true }
    , tags: { type: [String], default:[] }
    , src: { type: String, required: true }
    , active: { type: Boolean, default: true }
    })
  , Post = mongoose.model('Post', schema);

module.exports.findAll = () => {
  return new Promise((resolve, reject) => {
    let _query = { active: true };

    Post.find(_query).lean().exec((err, posts) => {
      resolve(posts);
    });
  });
};
