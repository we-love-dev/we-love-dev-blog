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
    , mainTag: { type: ObjectId, ref: 'Tag' }
    , active: { type: Boolean, default: true }
    , image: { type: imageSchema, required: true }
    , content: { type: String, required: true }
    })
  , Post = mongoose.model('Post', schema)
  , Author = require('./author-model')
  , Tag = require('./tag-model');

module.exports.getPostsByName = (search) => {
  return new Promise((resolve, reject) => {
    let _query = { active: true };

    if(search) {
      _query.$or = [
        { title: new RegExp(search, 'i') },
        { subtitle: new RegExp(search, 'i') }
      ];
    }

    Post.find(_query).populate('author').populate('tags').populate('mainTag').lean().exec((err, posts) => {
      if(err) {
        reject(err)
      } else {
        resolve(posts);
      }
    });
  });
};

module.exports.getPostsByTags = (tagPaths) => {
  return new Promise((resolve, reject) => {
    Tag.getIdsByPaths(tagPaths)
      .then((tagIds) => {
        let _query = { active: true };

        if(tagIds) {
          _query.tags = { $in: tagIds };
        }

        Post.find(_query)
          .populate('author')
          .populate('tags')
          .populate('mainTag')
          .lean()
          .exec((err, posts) => {
            if(err) {
              reject(err)
            } else {
              resolve(posts);
            }
          });
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports.getPostByPath = (path) => {
  return new Promise((resolve, reject) => {
    let _query = { active: true, path: path };

    Post.findOne(_query)
      .populate('author')
      .populate('tags')
      .populate('mainTag')
      .lean()
      .exec((err, post) => {
        if(err) {
          reject(err)
        } else {
          resolve(post);
        }
      });
  });
};

module.exports.getPostsByAuthor = (authorId) => {
  return new Promise((resolve, reject) => {
    let _query = { active: true, author: authorId };

    Post.find(_query).populate('tags').populate('mainTag').lean().exec((err, posts) => {
      if(err) {
        reject(err)
      } else {
        resolve(posts);
      }
    });
  });
};
