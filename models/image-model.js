'use strict';

var mongoose = require('mongoose')
  , schema = new mongoose.Schema({
      name: { type: String, required: true }
    , alias: { type: String, required: true }
    });

module.exports = schema;
