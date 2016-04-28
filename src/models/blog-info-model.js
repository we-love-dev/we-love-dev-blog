'use strict';

var mongoose = require('mongoose')
  , ObjectId = mongoose.Schema.Types.ObjectId
  , schema = new mongoose.Schema({
      authors: { type: [{ type: ObjectId, ref: 'Author' }], default:[]  }
    })
  , Info = mongoose.model('Info', schema, 'info');

module.exports.getBlogInfo = () => {
  return new Promise((resolve, reject) => {
    let _query = {};
    Info.findOne(_query).populate('authors').lean().exec((err, info) => {
      if(err) {
        reject(err)
      } else {
        resolve(info);
      }
    });
  });
};
