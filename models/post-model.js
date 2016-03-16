'use strict';

var mongoose = require('mongoose')
  , ObjectId = mongoose.Schema.Types.ObjectId
  , imageSchema = require('./image-model')
  , schema = new mongoose.Schema({
      path: { type: String, required: true, unique: true }
    , title: { type: String, required: true }
    , subtitle: { type: String, default: null }
    , createdIn: { type: Date, required: true }
    , author: { type: ObjectId, ref: 'Author', required: true }
    , tags: { type: [{ type: ObjectId, ref: 'Tag' }], default:[]  }
    , active: { type: Boolean, default: true }
    , image: { type: imageSchema, required: true }
    })
  , Post = mongoose.model('Post', schema)
  , Author = require('./author-model')
  , Tag = require('./tag-model');

module.exports.findAll = () => {
  return new Promise((resolve, reject) => {
    let _query = { active: true };

    Post.find(_query).populate('author').populate('tags').lean().exec((err, posts) => {
      if(err) {
        reject(err)
      } else {
        resolve(posts);
      }
    });
  });
};

module.exports.getPostByPath = (path) => {
  return new Promise((resolve, reject) => {
    let _query = { active: true, path: path };

    Post.findOne(_query).populate('author').populate('tags').lean().exec((err, post) => {
      if(err) {
        reject(err)
      } else {
        resolve(post);
      }
    });
  });
};
