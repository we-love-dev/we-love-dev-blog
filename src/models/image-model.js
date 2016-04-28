'use strict';

var mongoose = require('mongoose')
  , schema = new mongoose.Schema({
      name: { type: String, required: true }
    , alt: { type: String, required: true }
    });

module.exports = schema;
