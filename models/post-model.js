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
    , active: { type: Boolean, default: true }
    , image: { type: imageSchema, required: true }
    })
  , Post = mongoose.model('Post', schema)
  , Author = require('./author-model')
  , Tag = require('./tag-model');

module.exports.findAll = () => {
  return new Promise((resolve, reject) => {
    let _query = { active: true };

    Post.find(_query).lean().exec((err, posts) => {
      if(err) {
        reject(err)
      } else {
        let _promises = [];

        for (var i = 0; i < posts.length; i++) {
          _promises.push(loadData(posts[i]));
        }

        Promise.all(_promises)
          .then(value => {
            resolve(posts);
          }).catch(err => {
            reject(err);
          });
      }
    });
  });
};

module.exports.getPostByPath = (path) => {
  return new Promise((resolve, reject) => {
    let _query = { active: true, path: path };

    Post.findOne(_query).lean().exec((err, post) => {
      if(err) {
        reject(err)
      } else {
        Promise.all(loadData(post))
          .then(value => {
            resolve(post);
          }).catch(err => {
            reject(err);
          });
      }
    });
  });
};

function loadData(post) {
  loadLongDate(post);
  let _promises = [];
  _promises.push(loadAutor(post));
  _promises.push(loadTag(post));
  return _promises;
}

function loadLongDate(post) {
  post.longCreatedIn = post.createdIn.getDay()
  + '/' + post.createdIn.getMonth() + '/' + post.createdIn.getYear();
}

function loadAutor(post) {
  return new Promise((resolve, reject) => {
    Author.findById(post.author)
      .then(author => {
        post.author = author;
        resolve();
      })
      .catch(err => {
        reject(err)
      });
  });
}

function loadTag(post) {
  return new Promise((resolve, reject) => {
    Tag.findByIds(post.tags)
      .then(tags => {
        post.tags = tags;
        resolve();
      })
      .catch(err => {
        reject(err)
      });
  });
}
