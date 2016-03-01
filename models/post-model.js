'use strict';

var mongoose = require('mongoose')
  , ObjectId = mongoose.Schema.Types.ObjectId
  , imageSchema = require('./image-model')
  , schema = new mongoose.Schema({
      path: { type: String, required: true, unique: true }
    , title: { type: String, required: true }
    , subtitle: { type: String, default: null }
    , createdIn: { type: Date, required: true }
    , author: { type: ObjectId, ref: 'Autor', required: true }
    , tags: { type: [ObjectId], default:[] }
    , src: { type: String, required: true }
    , active: { type: Boolean, default: true }
    , image: imageSchema
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
